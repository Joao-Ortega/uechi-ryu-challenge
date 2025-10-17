import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Check, Close, Delete, Mic, Stop } from "@mui/icons-material";
import axios from "axios";

interface IRecorderProps {
  correctAnswer: string;
  setAiVerification: React.Dispatch<React.SetStateAction<string>>
  status: "idle" | "loading" | "success" | "error"
  setStatus: React.Dispatch<React.SetStateAction<"idle" | "loading" | "success" | "error">>
}

const Recorder: React.FC<IRecorderProps> = ({
    correctAnswer,
    setAiVerification,
    status,
    setStatus
  }: IRecorderProps) => {
  const [recording, setRecording] = useState(false);
  const [clips, setClips] = useState<{ name: string; url: string }[]>([]);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [returnAi, setReturnAi] = useState<{ correto: boolean, explicacao: string } | null>(null);
  
  const chunks = useRef<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 📱 Tratativa iOS — escolher tipo suportado
  const getSupportedMimeType = () => {
    if (MediaRecorder.isTypeSupported("audio/webm")) return "audio/webm";
    if (MediaRecorder.isTypeSupported("audio/mp4")) return "audio/mp4";
    return "audio/mpeg";
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = getSupportedMimeType();

      const recorder = new MediaRecorder(stream, { mimeType });
      setMediaRecorder(recorder);

      visualize(stream);
      chunks.current = [];

      recorder.ondataavailable = (e) => chunks.current.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        setClips((prev) => [...prev, { name: 'Resposta', url }]);
      };

      recorder.start();
      setRecording(true);
    } catch (err) {
      console.error("Erro ao iniciar gravação:", err);
      alert("Erro ao acessar o microfone.");
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setRecording(false);
  };

  const deleteClip = (url: string) => {
    setClips((prev) => prev.filter((clip) => clip.url !== url));
  };

  const visualize = (stream: MediaStream) => {
    const audioContext = audioCtx || new AudioContext();
    setAudioCtx(audioContext);

    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasCtx = canvas.getContext("2d")!;
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = "rgb(230, 230, 230)";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(25, 118, 210)"; // Azul MUI

      canvasCtx.beginPath();

      const sliceWidth = (WIDTH * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * HEIGHT) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(WIDTH, HEIGHT / 2);
      canvasCtx.stroke();
    };

    draw();
  };

  const sendAudio = async () => {
    setStatus('loading')
    if (!chunks.current.length) return;

    const file = new File([chunks.current[0]], "Resposta.webm", { type: chunks.current[0].type });
    const formData = new FormData();
    formData.append("audio", file);
    formData.append("answer", correctAnswer);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/transcribe`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setReturnAi(res.data.message)
      setStatus(res.data.message.correto ? 'success' : 'error')
      setAiVerification(res.data.message.correto ? '0' : '1')
    } catch (err) {
      console.error("Erro ao enviar áudio:", err);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) canvas.width = window.innerWidth - 40;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card sx={{
      backgroundColor: 'black',
      // mx: "auto",
      // mt: 4,
      p: 0.5,
      // boxShadow: 4
      // display: 'flex',
      // flexDirection: 'column'
    }}
    >
      <Box
        sx={{
          position: "relative",
          width: 60,
          height: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          marginTop: 0,
          p: 0.5
        }}
      >
        <CircularProgress
          size={50}
          sx={{
            opacity: status === "loading" ? 1 : 0,
            transition: "opacity 0.5s ease",
            color: "white",
          }}
        />

        <Check
          sx={{
            fontSize: 45,
            color: "green",
            opacity: status === "success" ? 1 : 0,
            transform: `${status === "success" ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.8)"}`,
            transition: "all 0.5s ease",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />

        <Close
          sx={{
            fontSize: 45,
            color: "red",
            opacity: status === "error" ? 1 : 0,
            transform: `${status === "error" ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.8)"}`,
            transition: "all 0.5s ease",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      </Box>
      {status === 'idle' && (
        <CardContent>
          <Typography color="white" align="center" variant="h6" gutterBottom>
            Grave sua resposta
          </Typography>

          <Box display="flex" gap={2} justifyContent="center" mt={0.5}>
            <Button
              size="small"
              variant="contained"
              startIcon={<Mic fontSize="small" />}
              disabled={recording || !!clips.length}
              onClick={startRecording}
              sx={{
                color: 'white',
                border: '1px solid white',
                borderRadius: '6px',
                backgroundColor: 'black',
                '&.Mui-disabled': {
                  color: '#171717ff',                // cor do texto/ícone
                  borderColor: '#8b8b8bff',          // cor da borda
                  backgroundColor: '#8b8b8bff',      // fundo
                },
              }}
            >
              Gravar
            </Button>

            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<Stop fontSize="small" />}
              disabled={!recording}
              onClick={stopRecording}
              sx={{
                '&.Mui-disabled': {
                  color: '#171717ff',                // cor do texto/ícone
                  borderColor: '#8b8b8bff',          // cor da borda
                  backgroundColor: '#8b8b8bff',      // fundo
                },
              }}
            >
              Parar
            </Button>
          </Box>

          <Box mt={1} textAlign="center">
            <canvas
              ref={canvasRef}
              width={450}
              height={50}
              style={{
                width: "100%",
                borderRadius: "6px",
              }}
            />
          </Box>

          <Box mt={1}>
            {clips.map((clip, idx) => (
              <Card
                key={idx}
                sx={{
                  height: '50px',
                  p: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // boxShadow: 2,
                }}
              >
                <Box display="flex" alignItems="center" gap={0.5}>
                  <audio controls src={clip.url} style={{ width: 150, height: 30 }} />
                  <Typography>{clip.name}</Typography>
                </Box>
                <IconButton color="error" onClick={() => deleteClip(clip.url)}>
                  <Delete fontSize="small" />
                </IconButton>
              </Card>
            ))}
          </Box>
          {!!clips.length && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 1 }}>
              <Button
                onClick={sendAudio}
                size="small"
                sx={{
                  backgroundColor: '#134e13ff',
                  color: 'white',
                }}
              >
                Enviar resposta
              </Button>
            </Box>
          )}
        </CardContent>
      )}
      {returnAi && returnAi.explicacao && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ color: 'white' }}>
            {returnAi.explicacao}
          </Typography>
          <Typography sx={{ color: 'red' }} variant="h6">Resposta</Typography>
          <Typography sx={{ color: 'white' }}>
            {correctAnswer}
          </Typography>
        </Box>
      )}
    </Card>
  );
}

export default Recorder;
