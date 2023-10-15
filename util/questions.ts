import { IQuestions } from "../interfaces";
import kiba from '../app/assets/images/kiba.png';
import zen from '../app/assets/images/zen.png';
import mu from '../app/assets/images/mu.png';
import nek from '../app/assets/images/nek.png';
import heiko from '../app/assets/images/heik.png';
import shi from '../app/assets/images/shi.png';
import san from '../app/assets/images/san.png';
import heisoku from '../app/assets/images/heisoku.png';
import seik from '../app/assets/images/seik.png';
import hiz from '../app/assets/images/hiz.png';
import hira from '../app/assets/images/hira.png';
import sok from '../app/assets/images/sok.png';
import nuk from '../app/assets/images/nuk.png';
import shut from '../app/assets/images/shut.png';
import kos from '../app/assets/images/kos.png';
import tet from '../app/assets/images/tet.png';
import em from '../app/assets/images/em.png';
import kei from '../app/assets/images/kei.png';

const challenges: IQuestions[] = [
  {
    type: 'text',
    content: 'Qual o nome do fundador do estilo de Karatê Uechi Ryu?',
    options: [
      {correct: 1, data: 'Ryu Tomoyose'},
      {correct: 2, data: 'Kanei Uechi'},
      {correct: 0, data: 'Kanbun Uechi'},
      {correct: 3, data: 'Kanbun Ryu'}
    ]
  },
  {
    type: 'text',
    content: 'Quais são os 3 Katas "principais" que vieram com Kanbun Uechi após seus anos de estudo na China?',
    options: [
      {correct: 1, data: 'Sanchin - Seichin - Seiryu'},
      {correct: 2, data: 'Kanchin - Kanshu - Seisan'},
      {correct: 0, data: 'Seisan - Sanseiryu - Sanchin'},
      {correct: 3, data: 'Sanseiryu - Seisan - Seichin'}
    ]
  },
  {
    type: 'text',
    content: 'Quais animais o estilo Uechi Ryu tem como base?',
    options: [
      {correct: 1, data: 'Garça - Falcão - Tigre'},
      {correct: 0, data: 'Tigre - Dragão - Garça'},
      {correct: 2, data: 'Onça - Dragão - Urso'},
      {correct: 3, data: 'Aranha - Falcão - Garça'}
    ]
  },
  {
    type: 'image',
    content: [kiba, 'Qual o nome da base acima?'],
    options: [
      {correct: 1, data: 'Shiko Dachi'},
      {correct: 3, data: 'Zen Kutsu Dachi'},
      {correct: 2, data: 'Heiko Dachi'},
      {correct: 0, data: 'Kiba Dachi'}
    ]
  },
  {
    type: 'image',
    content: [zen, 'Qual o nome da base acima?'],
    options: [
      {correct: 1, data: 'Shiko Dachi'},
      {correct: 0, data: 'Zen Kutsu Dachi'},
      {correct: 2, data: 'Heiko Dachi'},
      {correct: 3, data: 'Kokutsu Dachi'}
    ]
  },
  {
    type: 'image',
    content: [mu, 'Qual o nome da base acima?'],
    options: [
      {correct: 0, data: 'Musubi Dachi'},
      {correct: 1, data: 'Zen Kutsu Dachi'},
      {correct: 2, data: 'Heisoku Dachi'},
      {correct: 3, data: 'Kokutsu Dachi'}
    ]
  },
  {
    type: 'text',
    content: 'Oque significa Shin Gi Tai?',
    options: [
      {correct: 1, data: '3 - conflitos'},
      {correct: 2, data: 'Mente - de - Principiante'},
      {correct: 0, data: 'Mente - Técnica - Corpo'},
      {correct: 3, data: 'Buscar - Excelência'}
    ]
  },
  {
    type: 'image',
    content: [nek, 'Qual o nome da base acima?'],
    options: [
      {correct: 0, data: 'Neko ashi Dachi'},
      {correct: 1, data: 'Kokutsu Dachi'},
      {correct: 2, data: 'Shiko Dachi'},
      {correct: 3, data: 'Sanchin Dachi'}
    ]
  },
  {
    type: 'text',
    content: 'Em qual lugar se difundiu o Karatê Uechi Ryu?',
    options: [
      {correct: 1, data: 'China'},
      {correct: 0, data: 'Okinawa'},
      {correct: 2, data: 'Fukien'},
      {correct: 3, data: 'Hong Kong'}
    ]
  },
  {
    type: 'text',
    content: 'Qual palavra é conhecida por treinar o fortalecimento/calejamento das pernas?',
    options: [
      {correct: 1, data: 'Tai Kitae'},
      {correct: 2, data: 'Kote Kitae'},
      {correct: 0, data: 'Ashi Kitae'},
      {correct: 3, data: 'Mone Kitae'}
    ]
  },
  {
    type: 'text',
    content: 'Ao realizar um golpe altura JODAN, em qual area ele será desferido?',
    options: [
      {correct: 1, data: 'Altura entre ombros e quadril'},
      {correct: 2, data: 'Altura do quadril para baixo'},
      {correct: 3, data: 'Altura entre ombros e quadril mas pelas costas'},
      {correct: 0, data: 'Altura do ombro para cima'}
    ]
  },
  {
    type: 'image',
    content: [heiko, 'Qual o nome da base acima?'],
    options: [
      {correct: 1, data: 'Kokutsu Dachi'},
      {correct: 3, data: 'Heisoku Dachi'},
      {correct: 0, data: 'Heiko Dachi'},
      {correct: 2, data: 'Shiko Dachi'},
    ]
  },
  {
    type: 'image',
    content: [shi, 'Qual o nome da base acima?'],
    options: [
      {correct: 1, data: 'Zen Kutsu Dachi'},
      {correct: 0, data: 'Shiko Dachi'},
      {correct: 2, data: 'Heiko Dachi'},
      {correct: 3, data: 'Neko ashi Dachi'},
    ]
  },
  {
    type: 'image',
    content: [san, 'Qual o nome da base acima?'],
    options: [
      {correct: 2, data: 'Shiko Dachi'},
      {correct: 3, data: 'Neko ashi Dachi'},
      {correct: 1, data: 'Heisoku Dachi'},
      {correct: 0, data: 'Sanchin Dachi'},
    ]
  },
  {
    type: 'image',
    content: [heisoku, 'Qual o nome da base acima?'],
    options: [
      {correct: 0, data: 'Heisoku Dachi'},
      {correct: 2, data: 'Kokutsu Dachi'},
      {correct: 1, data: 'Sanchin Dachi'},
      {correct: 3, data: 'Neko ashi Dachi'},
    ]
  },
  {
    type: 'text',
    content: 'Qual significado da palavra Hajime?',
    options: [
      {correct: 1, data: 'Parar'},
      {correct: 2, data: 'Permissão para começar'},
      {correct: 0, data: 'Iniciar'},
      {correct: 3, data: 'Frente'}
    ]
  },
  {
    type: 'text',
    content: 'Qual significado da palavra Yoi?',
    options: [
      {correct: 0, data: 'Permissão para começar'},
      {correct: 1, data: 'Parar'},
      {correct: 3, data: 'Repetir'},
      {correct: 2, data: 'Iniciar'},
    ]
  },
  {
    type: 'text',
    content: 'Qual significado da palavra Yame?',
    options: [
      {correct: 1, data: 'Saudação'},
      {correct: 0, data: 'Parar'},
      {correct: 3, data: 'Repetir'},
      {correct: 2, data: 'Iniciar'},
    ]
  },
  {
    type: 'text',
    content: 'Qual o nome do filho do fundador do estilo Uechi Ryu?',
    options: [
      {correct: 1, data: 'Ryu Tomoyose'},
      {correct: 0, data: 'Kanei Uechi'},
      {correct: 2, data: 'Kanbun Uechi'},
      {correct: 3, data: 'Kanbun Ryu'}
    ]
  },
  {
    type: 'text',
    content: 'Qual o nome do estilo do qual se originou o Karatê Uechi Ryu?',
    options: [
      {correct: 0, data: 'Pan Gai Noon'},
      {correct: 1, data: 'Tai Chi Chuan'},
      {correct: 2, data: 'Xing Yi'},
      {correct: 3, data: 'Goju Ryu'}
    ]
  },
  {
    type: 'text',
    content: 'Qual o nome da Província que o fundador do estilo Uechi Ryu foi para estudar artes marciais?',
    options: [
      {correct: 1, data: 'Okinawa'},
      {correct: 0, data: 'Fukien'},
      {correct: 2, data: 'Xangai'},
      {correct: 3, data: 'Shenzhen'}
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado de Pan Gai Noon?',
    options: [
      {correct: 0, data: 'Metade duro, metade suave'},
      {correct: 1, data: 'Metade forte, metade relaxado'},
      {correct: 2, data: 'Metade atento, metade descansado'},
      {correct: 3, data: 'Metade focado, metade relaxado'}
    ]
  },
  {
    type: 'text',
    content: 'Qual palavra é conhecida por treinar o fortalecimento/calejamento do ante-braço?',
    options: [
      {correct: 1, data: 'Tai Kitae'},
      {correct: 0, data: 'Kote Kitae'},
      {correct: 2, data: 'Ashi Kitae'},
      {correct: 3, data: 'Harai Kitae'}
    ]
  },
  {
    type: 'text',
    content: 'Qual palavra é conhecida por treinar o fortalecimento/calejamento do corpo em Uechi Ryu?',
    options: [
      {correct: 0, data: 'Tai Kitae'},
      {correct: 1, data: 'Kote Kitae'},
      {correct: 2, data: 'Ashi Kitae'},
      {correct: 3, data: 'Harai Kitae'}
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado da palavra Sanchin?',
    options: [
      {correct: 3, data: 'Guarda'},
      {correct: 1, data: 'Meio duro meio suave'},
      {correct: 2, data: 'Mente de principiante'},
      {correct: 0, data: '3 Conflitos/Batalhas'}
    ]
  },
  {
    type: 'text',
    content: 'Qual o nome dos exercícios padronizados por Kanei Uechi para treino, muito usado em aquecimentos?',
    options: [
      {correct: 3, data: 'Yakusoku Kumite'},
      {correct: 0, data: 'Hojo Undo'},
      {correct: 2, data: 'Bunkai'},
      {correct: 1, data: 'Katas'}
    ]
  },
  {
    type: 'text',
    content: 'Oque é Bunkai?',
    options: [
      {correct: 0, data: 'Aplicações práticas de um Kata'},
      {correct: 3, data: 'Luta pré determinada'},
      {correct: 2, data: 'Sequência de movimentos para aquecimento'},
      {correct: 1, data: 'Treino de fortalecimento/calejamento'}
    ]
  },
  {
    type: 'image',
    content: [seik, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 0, data: 'Seiken'},
      {correct: 2, data: 'Ippon Ken'},
      {correct: 1, data: 'Shuto'},
      {correct: 3, data: 'Keito'},
    ]
  },
  {
    type: 'image',
    content: [hiz, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 2, data: 'Sei Ken'},
      {correct: 0, data: 'Hiza'},
      {correct: 1, data: 'Shuto'},
      {correct: 3, data: 'Kakuto'},
    ]
  },
  {
    type: 'image',
    content: [hira, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 0, data: 'Hira Ken'},
      {correct: 2, data: 'Ura Ken'},
      {correct: 1, data: 'Shuto'},
      {correct: 3, data: 'Kakuto'},
    ]
  },
  {
    type: 'image',
    content: [sok, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 3, data: 'Enpi'},
      {correct: 2, data: 'Kakato'},
      {correct: 1, data: 'Shuto'},
      {correct: 0, data: 'Sokuto'},
    ]
  },
  {
    type: 'image',
    content: [nuk, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 3, data: 'Enpi'},
      {correct: 0, data: 'Nukite'},
      {correct: 1, data: 'Kumite'},
      {correct: 2, data: 'Shuto'},
    ]
  },
  {
    type: 'image',
    content: [shut, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 3, data: 'Tetsui'},
      {correct: 0, data: 'Shuto'},
      {correct: 1, data: 'Kumite'},
      {correct: 2, data: 'Haisoku'},
    ]
  },
  {
    type: 'image',
    content: [kos, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 0, data: 'Koshi'},
      {correct: 3, data: 'Teisho'},
      {correct: 1, data: 'Kakato'},
      {correct: 2, data: 'Teisoku'},
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado da palavra Karate Do?',
    options: [
      {correct: 2, data: 'Mente limpa'},
      {correct: 3, data: 'Mente Sã, Corpo São'},
      {correct: 0, data: 'Caminho das mãos vazias'},
      {correct: 1, data: 'Caminho do Guerreiro'}
    ]
  },
  {
    type: 'text',
    content: 'Qual estilo de Karate praticamos?',
    options: [
      {correct: 2, data: 'Kyokushin'},
      {correct: 3, data: 'Shotokan'},
      {correct: 1, data: 'Goju Ryu'},
      {correct: 0, data: 'Uechi Ryu'}
    ]
  },
  {
    type: 'text',
    content: 'Qual significado de Uechi Ryu?',
    options: [
      {correct: 2, data: 'Caminho de Uechi'},
      {correct: 3, data: 'Aprendizes de Uechi'},
      {correct: 0, data: 'Escola de Uechi'},
      {correct: 1, data: 'Descendentes de Uechi'}
    ]
  },
  {
    type: 'text',
    content: 'Oque é Tsuki Waza?',
    options: [
      {correct: 0, data: 'Técnicas de golpes diretos com os punhos'},
      {correct: 2, data: 'Técnicas diretas de projeção'},
      {correct: 3, data: 'Técnicas com golpes baixos'},
      {correct: 1, data: 'Soco em linha'},
    ]
  },
  {
    type: 'text',
    content: 'Oque é Uke Waza?',
    options: [
      {correct: 3, data: 'Técnicas para glinche'},
      {correct: 2, data: 'Técnicas diretas de mão aberta'},
      {correct: 0, data: 'Técnicas de defesa'},
      {correct: 1, data: 'Técnicas diretas de chão'},
    ]
  },
  {
    type: 'text',
    content: 'Oque é Geri Waza?',
    options: [
      {correct: 3, data: 'Golpes circulares'},
      {correct: 0, data: 'Técnicas de pernas/chutes'},
      {correct: 2, data: 'Técnicas para derrubar o adversário'},
      {correct: 1, data: 'Técnicas de como não ser derrubado'},
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado de Kata?',
    options: [
      {correct: 3, data: 'Guerra'},
      {correct: 0, data: 'Conjunto de movimentos de ataque e defesa'},
      {correct: 2, data: 'Conjunto de técnicas avançadas'},
      {correct: 1, data: 'Formulário de luta'},
    ]
  },
  {
    type: 'text',
    content: 'Oque é Kihon?',
    options: [
      {correct: 0, data: 'Técnicas básicas fundamentais'},
      {correct: 3, data: 'Luta pré determinada com golpes planejados'},
      {correct: 2, data: 'Treino de chutes'},
      {correct: 1, data: 'Base de luta'},
    ]
  },
  {
    type: 'text',
    content: 'Oque é Kumite?',
    options: [
      {correct: 2, data: 'Golpe com ponta de dedos'},
      {correct: 3, data: 'Treino de força'},
      {correct: 0, data: 'Luta/Combate'},
      {correct: 1, data: 'Saudação inicial'},
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado da palavra Godai?',
    options: [
      {correct: 2, data: 'Repetir'},
      {correct: 0, data: 'Mudar de lado'},
      {correct: 3, data: 'Cumprimentar'},
      {correct: 1, data: 'Perna direita a frente'},
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado da palavra Moikai?',
    options: [
      {correct: 0, data: 'Repetir'},
      {correct: 2, data: 'Perna esquerda a frente'},
      {correct: 3, data: 'Mudar de lado'},
      {correct: 1, data: 'Iniciar'},
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado da palavra Migi-ashi?',
    options: [
      {correct: 2, data: 'Cumprimento inicial'},
      {correct: 0, data: 'Perna direita'},
      {correct: 3, data: 'Virar'},
      {correct: 1, data: 'Perna esquerda'},
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado da palavra Hidare-ashi?',
    options: [
      {correct: 2, data: 'Perna direita'},
      {correct: 0, data: 'Perna esquerda'},
      {correct: 3, data: 'Trocar de lado'},
      {correct: 1, data: 'Repetir'},
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado da palavra Mae?',
    options: [
      {correct: 2, data: 'Perna direita'},
      {correct: 1, data: 'Iniciar'},
      {correct: 3, data: 'Saudação'},
      {correct: 0, data: 'Frente'},
    ]
  },
  {
    type: 'text',
    content: 'Ao realizar um golpe altura CHUDAN, em qual area ele será desferido?',
    options: [
      {correct: 0, data: 'Altura entre ombros e quadril'},
      {correct: 1, data: 'Altura do quadril para baixo'},
      {correct: 3, data: 'Altura entre ombros e quadril mas pelas costas'},
      {correct: 2, data: 'Altura do ombro para cima'}
    ]
  },
  {
    type: 'text',
    content: 'Ao realizar um golpe altura GEDAN, em qual area ele será desferido?',
    options: [
      {correct: 1, data: 'Altura entre ombros e quadril'},
      {correct: 0, data: 'Altura do quadril para baixo'},
      {correct: 3, data: 'Altura entre ombros e quadril mas pelas costas'},
      {correct: 2, data: 'Altura do ombro para cima'}
    ]
  },
  {
    type: 'image',
    content: [tet, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 0, data: 'Tetsui'},
      {correct: 3, data: 'Teisho'},
      {correct: 1, data: 'Shoken'},
      {correct: 2, data: 'Boshiken'},
    ]
  },
  {
    type: 'image',
    content: [em, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 1, data: 'Shuto'},
      {correct: 3, data: 'Nihon Nukite'},
      {correct: 0, data: 'Empi'},
      {correct: 2, data: 'Keito'},
    ]
  },
  {
    type: 'image',
    content: [kei, 'Qual o nome desse ponto de golpe?'],
    options: [
      {correct: 0, data: 'Keito'},
      {correct: 3, data: 'Haishu'},
      {correct: 1, data: 'Haito'},
      {correct: 2, data: 'Seiken'},
    ]
  },
  {
    type: 'text',
    content: 'Tenshin Kosoku Geri. Que movimento é esse?',
    options: [
      {correct: 1, data: 'Exercício de giro 45° e chute com perna da frente'},
      {correct: 3, data: 'Exercício de giro 45° e chute lateral'},
      {correct: 0, data: 'Exercício de giro 45° e chute com perna de trás'},
      {correct: 2, data: 'Exercício de giro 45° e soco em forma de shoken'}
    ]
  },
  {
    type: 'text',
    content: 'Tenshin Zensoko Geri. Que movimento é esse?',
    options: [
      {correct: 0, data: 'Exercício de giro 45° e chute com perna da frente'},
      {correct: 3, data: 'Exercício de giro 45° e chute lateral'},
      {correct: 2, data: 'Exercício de giro 45° e chute com perna de trás'},
      {correct: 1, data: 'Exercício de giro 45° e soco em forma de shoken'}
    ]
  },
  {
    type: 'text',
    content: 'Qual o significado de Kamae?',
    options: [
      {correct: 3, data: 'Golpe - Atacar'},
      {correct: 0, data: 'Postura - Guarda'},
      {correct: 2, data: 'Soco circular'},
      {correct: 1, data: 'Saudação'}
    ]
  },
  {
    type: 'text',
    content: 'Qual motivo o fundador da Uechi Ryu foi para China?',
    options: [
      {correct: 3, data: 'Estudar filosofia'},
      {correct: 2, data: 'Se encontrar com conhecidos'},
      {correct: 0, data: 'Escapar do alistamento militar'},
      {correct: 1, data: 'Estava se mudando'}
    ]
  },
  {
    type: 'text',
    content: 'Oque levou o fundador da Uechi Ryu a parar de ensinar arte marcial durante um tempo?',
    options: [
      {correct: 3, data: 'Estava cansado e sem tempo'},
      {correct: 2, data: 'Não sentia motivação'},
      {correct: 1, data: 'Foi atacado e perdeu o combate'},
      {correct: 0, data: 'Um de seus alunos cometeu uma fatalidade'}
    ]
  },
  {
    type: 'text',
    content: 'Quem teve um papel importante para o fundador da Uechi Ryu voltar a ensinar?',
    options: [
      {correct: 0, data: 'Ryuyu Tomoyose'},
      {correct: 2, data: 'Kanei Uechi'},
      {correct: 1, data: 'Kanbun Uechi'},
      {correct: 3, data: 'Shū Shiwa'}
    ]
  },
  {
    type: 'text',
    content: 'Shomen Geri, que movimento do Hojo Undo é esse?',
    options: [
      {correct: 1, data: 'Defesa Mawashi Uke e chute lateral'},
      {correct: 2, data: 'Defesa Mawashi Uke e chute de cima para baixo'},
      {correct: 0, data: 'Defesa Mawashi Uke e chute frontal'},
      {correct: 3, data: 'Defesa Mawashi Uke e chute rotatório'}
    ]
  },
  {
    type: 'text',
    content: 'Hiji Zuki, que movimento do Hojo Undo é esse?',
    options: [
      {correct: 1, data: 'Defesa Mawashi Uke, soco circular altura Jodan (Têmpora).'},
      {correct: 2, data: 'Defesa Mawashi Uke, soco em Hiraken para cima, trás e lado.'},
      {correct: 3, data: 'Defesa para cima com mão em Hiraken, soco em Hiraken, defesa fechando e abrindo o plexo e soco em Hiraken.'},
      {correct: 0, data: 'Defesa Mawashi Uke, cotovelada em Hiraken para cima, lado e para trás.'}
    ]
  },
];

export default challenges;
