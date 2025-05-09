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

export const challenges: IQuestions[] = [
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
  // {
  //   type: 'text',
  //   content: 'Quais são os 3 Katas "principais" que vieram com Kanbun Uechi após seus anos de estudo na China?',
  //   options: [
  //     {correct: 1, data: 'Sanchin - Seichin - Seiryu'},
  //     {correct: 2, data: 'Kanchin - Kanshu - Seisan'},
  //     {correct: 0, data: 'Seisan - Sanseiryu - Sanchin'},
  //     {correct: 3, data: 'Sanseiryu - Seisan - Seichin'}
  //   ]
  // },
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
  // {
  //   type: 'image',
  //   content: [kiba, 'Qual o nome da base acima?'],
  //   options: [
  //     {correct: 1, data: 'Shiko Dachi'},
  //     {correct: 3, data: 'Zen Kutsu Dachi'},
  //     {correct: 2, data: 'Heiko Dachi'},
  //     {correct: 0, data: 'Kiba Dachi'}
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [zen, 'Qual o nome da base acima?'],
  //   options: [
  //     {correct: 1, data: 'Shiko Dachi'},
  //     {correct: 0, data: 'Zen Kutsu Dachi'},
  //     {correct: 2, data: 'Heiko Dachi'},
  //     {correct: 3, data: 'Kokutsu Dachi'}
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [mu, 'Qual o nome da base acima?'],
  //   options: [
  //     {correct: 0, data: 'Musubi Dachi'},
  //     {correct: 1, data: 'Zen Kutsu Dachi'},
  //     {correct: 2, data: 'Heisoku Dachi'},
  //     {correct: 3, data: 'Kokutsu Dachi'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Oque significa Shin Gi Tai?',
  //   options: [
  //     {correct: 1, data: '3 - conflitos'},
  //     {correct: 2, data: 'Mente - de - Principiante'},
  //     {correct: 0, data: 'Mente - Técnica - Corpo'},
  //     {correct: 3, data: 'Buscar - Excelência'}
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [nek, 'Qual o nome da base acima?'],
  //   options: [
  //     {correct: 0, data: 'Neko ashi Dachi'},
  //     {correct: 1, data: 'Kokutsu Dachi'},
  //     {correct: 2, data: 'Shiko Dachi'},
  //     {correct: 3, data: 'Sanchin Dachi'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Em qual lugar se difundiu o Karatê Uechi Ryu?',
  //   options: [
  //     {correct: 1, data: 'China'},
  //     {correct: 0, data: 'Okinawa'},
  //     {correct: 2, data: 'Fukien'},
  //     {correct: 3, data: 'Hong Kong'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual palavra é conhecida por treinar o fortalecimento/calejamento das pernas?',
  //   options: [
  //     {correct: 1, data: 'Tai Kitae'},
  //     {correct: 2, data: 'Kote Kitae'},
  //     {correct: 0, data: 'Ashi Kitae'},
  //     {correct: 3, data: 'Mone Kitae'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Ao realizar um golpe altura JODAN, em qual area ele será desferido?',
  //   options: [
  //     {correct: 1, data: 'Altura entre ombros e quadril'},
  //     {correct: 2, data: 'Altura do quadril para baixo'},
  //     {correct: 3, data: 'Altura entre ombros e quadril mas pelas costas'},
  //     {correct: 0, data: 'Altura do ombro para cima'}
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [heiko, 'Qual o nome da base acima?'],
  //   options: [
  //     {correct: 1, data: 'Kokutsu Dachi'},
  //     {correct: 3, data: 'Heisoku Dachi'},
  //     {correct: 0, data: 'Heiko Dachi'},
  //     {correct: 2, data: 'Shiko Dachi'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [shi, 'Qual o nome da base acima?'],
  //   options: [
  //     {correct: 1, data: 'Zen Kutsu Dachi'},
  //     {correct: 0, data: 'Shiko Dachi'},
  //     {correct: 2, data: 'Heiko Dachi'},
  //     {correct: 3, data: 'Neko ashi Dachi'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [san, 'Qual o nome da base acima?'],
  //   options: [
  //     {correct: 2, data: 'Shiko Dachi'},
  //     {correct: 3, data: 'Neko ashi Dachi'},
  //     {correct: 1, data: 'Heisoku Dachi'},
  //     {correct: 0, data: 'Sanchin Dachi'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [heisoku, 'Qual o nome da base acima?'],
  //   options: [
  //     {correct: 0, data: 'Heisoku Dachi'},
  //     {correct: 2, data: 'Kokutsu Dachi'},
  //     {correct: 1, data: 'Sanchin Dachi'},
  //     {correct: 3, data: 'Neko ashi Dachi'},
  //   ]
  // },
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
  // {
  //   type: 'text',
  //   content: 'Qual o nome da Província que o fundador do estilo Uechi Ryu foi para estudar artes marciais?',
  //   options: [
  //     {correct: 1, data: 'Okinawa'},
  //     {correct: 0, data: 'Fukien'},
  //     {correct: 2, data: 'Xangai'},
  //     {correct: 3, data: 'Shenzhen'}
  //   ]
  // },
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
  // {
  //   type: 'text',
  //   content: 'Qual palavra é conhecida por treinar o fortalecimento/calejamento do ante-braço?',
  //   options: [
  //     {correct: 1, data: 'Tai Kitae'},
  //     {correct: 0, data: 'Kote Kitae'},
  //     {correct: 2, data: 'Ashi Kitae'},
  //     {correct: 3, data: 'Harai Kitae'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual palavra é conhecida por treinar o fortalecimento/calejamento do corpo em Uechi Ryu?',
  //   options: [
  //     {correct: 0, data: 'Tai Kitae'},
  //     {correct: 1, data: 'Kote Kitae'},
  //     {correct: 2, data: 'Ashi Kitae'},
  //     {correct: 3, data: 'Harai Kitae'}
  //   ]
  // },
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
  // {
  //   type: 'text',
  //   content: 'Qual o nome dos exercícios padronizados por Kanei Uechi para treino, muito usado em aquecimentos?',
  //   options: [
  //     {correct: 3, data: 'Yakusoku Kumite'},
  //     {correct: 0, data: 'Hojo Undo'},
  //     {correct: 2, data: 'Bunkai'},
  //     {correct: 1, data: 'Katas'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Oque é Bunkai?',
  //   options: [
  //     {correct: 0, data: 'Aplicações práticas de um Kata'},
  //     {correct: 3, data: 'Luta pré determinada'},
  //     {correct: 2, data: 'Sequência de movimentos para aquecimento'},
  //     {correct: 1, data: 'Treino de fortalecimento/calejamento'}
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [seik, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 0, data: 'Seiken'},
  //     {correct: 2, data: 'Ippon Ken'},
  //     {correct: 1, data: 'Shuto'},
  //     {correct: 3, data: 'Keito'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [hiz, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 2, data: 'Sei Ken'},
  //     {correct: 0, data: 'Hiza'},
  //     {correct: 1, data: 'Shuto'},
  //     {correct: 3, data: 'Kakuto'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [hira, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 0, data: 'Hira Ken'},
  //     {correct: 2, data: 'Ura Ken'},
  //     {correct: 1, data: 'Shuto'},
  //     {correct: 3, data: 'Kakuto'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [sok, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 3, data: 'Enpi'},
  //     {correct: 2, data: 'Kakato'},
  //     {correct: 1, data: 'Shuto'},
  //     {correct: 0, data: 'Sokuto'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [nuk, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 3, data: 'Enpi'},
  //     {correct: 0, data: 'Nukite'},
  //     {correct: 1, data: 'Kumite'},
  //     {correct: 2, data: 'Shuto'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [shut, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 3, data: 'Tetsui'},
  //     {correct: 0, data: 'Shuto'},
  //     {correct: 1, data: 'Kumite'},
  //     {correct: 2, data: 'Haisoku'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [kos, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 0, data: 'Koshi'},
  //     {correct: 3, data: 'Teisho'},
  //     {correct: 1, data: 'Kakato'},
  //     {correct: 2, data: 'Teisoku'},
  //   ]
  // },
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
  // {
  //   type: 'text',
  //   content: 'Qual o significado de Kata?',
  //   options: [
  //     {correct: 3, data: 'Guerra'},
  //     {correct: 0, data: 'Conjunto de movimentos de ataque e defesa'},
  //     {correct: 2, data: 'Conjunto de técnicas avançadas'},
  //     {correct: 1, data: 'Formulário de luta'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Oque é Kihon?',
  //   options: [
  //     {correct: 0, data: 'Técnicas básicas fundamentais'},
  //     {correct: 3, data: 'Luta pré determinada com golpes planejados'},
  //     {correct: 2, data: 'Treino de chutes'},
  //     {correct: 1, data: 'Base de luta'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Oque é Kumite?',
  //   options: [
  //     {correct: 2, data: 'Golpe com ponta de dedos'},
  //     {correct: 3, data: 'Treino de força'},
  //     {correct: 0, data: 'Luta/Combate'},
  //     {correct: 1, data: 'Saudação inicial'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual o significado da palavra Godai?',
  //   options: [
  //     {correct: 2, data: 'Repetir'},
  //     {correct: 0, data: 'Mudar de lado'},
  //     {correct: 3, data: 'Cumprimentar'},
  //     {correct: 1, data: 'Perna direita a frente'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual o significado da palavra Moikai?',
  //   options: [
  //     {correct: 0, data: 'Repetir'},
  //     {correct: 2, data: 'Perna esquerda a frente'},
  //     {correct: 3, data: 'Mudar de lado'},
  //     {correct: 1, data: 'Iniciar'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual o significado da palavra Migi-ashi?',
  //   options: [
  //     {correct: 2, data: 'Cumprimento inicial'},
  //     {correct: 0, data: 'Perna direita'},
  //     {correct: 3, data: 'Virar'},
  //     {correct: 1, data: 'Perna esquerda'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual o significado da palavra Hidare-ashi?',
  //   options: [
  //     {correct: 2, data: 'Perna direita'},
  //     {correct: 0, data: 'Perna esquerda'},
  //     {correct: 3, data: 'Trocar de lado'},
  //     {correct: 1, data: 'Repetir'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual o significado da palavra Mae?',
  //   options: [
  //     {correct: 2, data: 'Perna direita'},
  //     {correct: 1, data: 'Iniciar'},
  //     {correct: 3, data: 'Saudação'},
  //     {correct: 0, data: 'Frente'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Ao realizar um golpe altura CHUDAN, em qual area ele será desferido?',
  //   options: [
  //     {correct: 0, data: 'Altura entre ombros e quadril'},
  //     {correct: 1, data: 'Altura do quadril para baixo'},
  //     {correct: 3, data: 'Altura entre ombros e quadril mas pelas costas'},
  //     {correct: 2, data: 'Altura do ombro para cima'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Ao realizar um golpe altura GEDAN, em qual area ele será desferido?',
  //   options: [
  //     {correct: 1, data: 'Altura entre ombros e quadril'},
  //     {correct: 0, data: 'Altura do quadril para baixo'},
  //     {correct: 3, data: 'Altura entre ombros e quadril mas pelas costas'},
  //     {correct: 2, data: 'Altura do ombro para cima'}
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [tet, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 0, data: 'Tetsui'},
  //     {correct: 3, data: 'Teisho'},
  //     {correct: 1, data: 'Shoken'},
  //     {correct: 2, data: 'Boshiken'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [em, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 1, data: 'Shuto'},
  //     {correct: 3, data: 'Nihon Nukite'},
  //     {correct: 0, data: 'Empi'},
  //     {correct: 2, data: 'Keito'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [kei, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 0, data: 'Keito'},
  //     {correct: 3, data: 'Haishu'},
  //     {correct: 1, data: 'Haito'},
  //     {correct: 2, data: 'Seiken'},
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Tenshin Kosoku Geri. Que movimento é esse?',
  //   options: [
  //     {correct: 1, data: 'Exercício de giro 45° e chute com perna da frente'},
  //     {correct: 3, data: 'Exercício de giro 45° e chute lateral'},
  //     {correct: 0, data: 'Exercício de giro 45° e chute com perna de trás'},
  //     {correct: 2, data: 'Exercício de giro 45° e soco em forma de shoken'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Tenshin Zensoko Geri. Que movimento é esse?',
  //   options: [
  //     {correct: 0, data: 'Exercício de giro 45° e chute com perna da frente'},
  //     {correct: 3, data: 'Exercício de giro 45° e chute lateral'},
  //     {correct: 2, data: 'Exercício de giro 45° e chute com perna de trás'},
  //     {correct: 1, data: 'Exercício de giro 45° e soco em forma de shoken'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual o significado de Kamae?',
  //   options: [
  //     {correct: 3, data: 'Golpe - Atacar'},
  //     {correct: 0, data: 'Postura - Guarda'},
  //     {correct: 2, data: 'Soco circular'},
  //     {correct: 1, data: 'Saudação'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Qual motivo o fundador da Uechi Ryu foi para China?',
  //   options: [
  //     {correct: 3, data: 'Estudar filosofia'},
  //     {correct: 2, data: 'Se encontrar com conhecidos'},
  //     {correct: 0, data: 'Escapar do alistamento militar'},
  //     {correct: 1, data: 'Estava se mudando'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Oque levou o fundador da Uechi Ryu a parar de ensinar arte marcial durante um tempo?',
  //   options: [
  //     {correct: 3, data: 'Estava cansado e sem tempo'},
  //     {correct: 2, data: 'Não sentia motivação'},
  //     {correct: 1, data: 'Foi atacado e perdeu o combate'},
  //     {correct: 0, data: 'Um de seus alunos cometeu uma fatalidade'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Quem teve um papel importante para o fundador da Uechi Ryu voltar a ensinar?',
  //   options: [
  //     {correct: 0, data: 'Ryuyu Tomoyose'},
  //     {correct: 2, data: 'Kanei Uechi'},
  //     {correct: 1, data: 'Kanbun Uechi'},
  //     {correct: 3, data: 'Shū Shiwa'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Shomen Geri, que movimento do Hojo Undo é esse?',
  //   options: [
  //     {correct: 1, data: 'Defesa Mawashi Uke e chute lateral'},
  //     {correct: 2, data: 'Defesa Mawashi Uke e chute de cima para baixo'},
  //     {correct: 0, data: 'Defesa Mawashi Uke e chute frontal'},
  //     {correct: 3, data: 'Defesa Mawashi Uke e chute rotatório'}
  //   ]
  // },
  // {
  //   type: 'text',
  //   content: 'Hiji Zuki, que movimento do Hojo Undo é esse?',
  //   options: [
  //     {correct: 1, data: 'Defesa Mawashi Uke, soco circular altura Jodan (Têmpora).'},
  //     {correct: 2, data: 'Defesa Mawashi Uke, soco em Hiraken para cima, trás e lado.'},
  //     {correct: 3, data: 'Defesa para cima com mão em Hiraken, soco em Hiraken, defesa fechando e abrindo o plexo e soco em Hiraken.'},
  //     {correct: 0, data: 'Defesa Mawashi Uke, cotovelada em Hiraken para cima, lado e para trás.'}
  //   ]
  // },
  {
    type: 'text',
    content: 'Qual objetivo principal do Karatê',
    options: [
      {correct: 1, data: 'Aprender a Lutar'},
      {correct: 2, data: 'Se tornar uma pessoa mais tranquila'},
      {correct: 0, data: 'Máxima eficácia nos golpes'},
      {correct: 3, data: 'Competir'},
    ]
  },
];

export const adultsQuestions: IQuestions[] = [
  {
    type: 'text',
    content: 'Qual objetivo principal do Karatê',
    options: [
      {correct: 1, data: 'Aprender a Lutar'},
      {correct: 2, data: 'Se tornar uma pessoa mais tranquila'},
      {correct: 0, data: 'Máxima eficácia nos golpes'},
      {correct: 3, data: 'Competir'},
    ]
  },
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
    type: 'text',
    content: 'Oque significa Shin Gi Tai?',
    options: [
      {correct: 1, data: '3 - conflitos'},
      {correct: 2, data: 'Mente - de - Principiante'},
      {correct: 0, data: 'Mente - Técnica - Corpo'},
      {correct: 3, data: 'Buscar - Excelência'}
    ]
  },
  // {
  //   type: 'text',
  //   content: 'Em qual lugar se difundiu o Karatê Uechi Ryu?',
  //   options: [
  //     {correct: 1, data: 'China'},
  //     {correct: 0, data: 'Okinawa'},
  //     {correct: 2, data: 'Fukien'},
  //     {correct: 3, data: 'Hong Kong'}
  //   ]
  // },
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
  // {
  //   type: 'text',
  //   content: 'Qual o nome da Província que o fundador do estilo Uechi Ryu foi para estudar artes marciais?',
  //   options: [
  //     {correct: 1, data: 'Okinawa'},
  //     {correct: 0, data: 'Fukien'},
  //     {correct: 2, data: 'Xangai'},
  //     {correct: 3, data: 'Shenzhen'}
  //   ]
  // },
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
  // {
  //   type: 'text',
  //   content: 'Oque é Bunkai?',
  //   options: [
  //     {correct: 0, data: 'Aplicações práticas de um Kata'},
  //     {correct: 3, data: 'Luta pré determinada'},
  //     {correct: 2, data: 'Sequência de movimentos para aquecimento'},
  //     {correct: 1, data: 'Treino de fortalecimento/calejamento'}
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [nuk, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 3, data: 'Enpi'},
  //     {correct: 0, data: 'Nukite'},
  //     {correct: 1, data: 'Kumite'},
  //     {correct: 2, data: 'Shuto'},
  //   ]
  // },
  // {
  //   type: 'image',
  //   content: [shut, 'Qual o nome desse ponto de golpe?'],
  //   options: [
  //     {correct: 3, data: 'Tetsui'},
  //     {correct: 0, data: 'Shuto'},
  //     {correct: 1, data: 'Kumite'},
  //     {correct: 2, data: 'Haisoku'},
  //   ]
  // },
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
    content: 'Oque é Kumite?',
    options: [
      {correct: 2, data: 'Golpe com ponta de dedos'},
      {correct: 3, data: 'Treino de força'},
      {correct: 0, data: 'Luta/Combate'},
      {correct: 1, data: 'Saudação inicial'},
    ]
  },
]

// export const kotoSimon: IQuestions[] = [
//   {
//     type: 'text',
//     content: 'Qual nome original do estilo, país de origem e significado?',
//     options: [
//       {correct: 0, data: 'Pangainoon, Origem na China, meio rígido/meio flexível.'},
//       {correct: 2, data: 'Wingchun, Origem na Japonesa, meio focado/meio resiliente.'},
//       {correct: 1, data: 'Tai Xin Chuan, Origem na Okinawana, meio relaxado/meio imprevisível.'},
//       {correct: 3, data: 'Gojo Ryu, Origem na Tailandesa, meio seco/meio molhado.'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Quais são os 3 Katas "principais" que vieram com Kanbun Uechi após seus anos de estudo na China?',
//     options: [
//       {correct: 1, data: 'Sanchin - Seichin - Seiryu'},
//       {correct: 2, data: 'Kanchin - Kanshu - Seisan'},
//       {correct: 0, data: 'Seisan - Sanseiryu - Sanchin'},
//       {correct: 3, data: 'Sanseiryu - Seisan - Seichin'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Qual significado de Uechi Ryu?',
//     options: [
//       {correct: 2, data: 'Caminho de Uechi'},
//       {correct: 3, data: 'Aprendizes de Uechi'},
//       {correct: 0, data: 'Escola de Uechi'},
//       {correct: 1, data: 'Descendentes de Uechi'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Qual o nome do mestre Chinês de Kanbun Uechi e quanto tempo Kanbun passou na China ao todo?',
//     options: [
//       {correct: 1, data: 'Kanei Uechi, 8 anos, ensinando na província Fujian'},
//       {correct: 0, data: 'Shushiwa. 13 anos, 10 como aprendiz e 3 ensinando na província Nanjing'},
//       {correct: 2, data: 'Yip Man, 10 anos, 5 aprendendo e 5 ministrando aulas'},
//       {correct: 3, data: 'Shimu, 5 anos, ensinando em Okinawa'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque diferencia o estilo Uechi Ryu dos demais estilos?',
//     options: [
//       {correct: 1, data: 'Chutes Giratórios'},
//       {correct: 2, data: 'Chutes altos'},
//       {correct: 0, data: 'Golpes Circulares'},
//       {correct: 3, data: 'Golpes Contundentes'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Quem foi o grande responsável pela difusão do Uechi Ryu pelo mundo?',
//     options: [
//       {correct: 3, data: 'Kanbun Uechi'},
//       {correct: 1, data: 'George Mattson'},
//       {correct: 2, data: 'Takashi Arakaki'},
//       {correct: 0, data: 'Kanei Uechi'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Quem é o presidente de honra da Okikukai e o presidente executivo?',
//     options: [
//       {correct: 1, data: 'Matsushima Yoshiharu (10º DAN) - Keicho Tobaru (9º DAN)'},
//       {correct: 2, data: 'Takashi Arakaki (9º DAN) - Asao Nakasone (6º DAN)'},
//       {correct: 0, data: 'Tsutomu Nakahodo (10º DAN) - Hirokuni Yamashiro (9º DAN)'},
//       {correct: 3, data: 'Keisuke Fujimoto (9º DAN) - Takahiro Sugimoto (8º DAN)'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Onde se estabeleceu o primeiro dojo de Kanbun Uechi?',
//     options: [
//       {correct: 1, data: 'Okinawa - Japão'},
//       {correct: 0, data: 'Wakayama - Japão Central'},
//       {correct: 2, data: 'Nanjing - China'},
//       {correct: 3, data: 'Fujian - China'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Qual nome da luta que é feita no estilo Uechi Ryu?',
//     options: [
//       {correct: 1, data: 'Uechi Kumite'},
//       {correct: 2, data: 'Sanbon Kumite'},
//       {correct: 0, data: 'Jyu Kumite'},
//       {correct: 3, data: 'Gojo Kumite'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Sanchin?',
//     options: [
//       {correct: 3, data: 'Guarda'},
//       {correct: 1, data: 'Meio duro meio suave'},
//       {correct: 2, data: 'Mente de principiante'},
//       {correct: 0, data: '3 Conflitos (Mente, Corpo e Espírito)'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Boshiken no Karate Uechi Ryu?',
//     options: [
//       {correct: 3, data: 'Golpe com ponta de dedos simbolizando bico de uma garça'},
//       {correct: 0, data: 'Formato da mão com o polegar no meio semelhante a uma pata de tigre'},
//       {correct: 2, data: 'Golpe de mão aberta, acertando com a parte debaixo.'},
//       {correct: 1, data: 'Defesa circular com intuito de envolver braço do adversário'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Sokusen no chute Mae Geri?',
//     options: [
//       {correct: 0, data: 'Chute com a ponta dos dedos do pé'},
//       {correct: 3, data: 'Chute com a lateral/faca do pé'},
//       {correct: 2, data: 'Chute com o calcanhar do pé.'},
//       {correct: 1, data: 'Chute com o peito do pé'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Qual o nome da indumentária do Karate?',
//     options: [
//       {correct: 2, data: 'Kimono - Roupão - Uniforme'},
//       {correct: 3, data: 'Vestimenta - Irui - Kanji'},
//       {correct: 0, data: 'Dogi - Karategi - Keiko Gi'},
//       {correct: 1, data: 'Yubiwa - Burezaa - Uwagi'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Qual o nome do primeiro aluno de Kanbun Uechi?',
//     options: [
//       {correct: 2, data: 'Shushiwa'},
//       {correct: 3, data: 'Kanmei Uechi'},
//       {correct: 1, data: 'Kanei Uechi'},
//       {correct: 0, data: 'Ryu Ryu Tomoyose'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Qual o significado da palavra Karate Do?',
//     options: [
//       {correct: 2, data: 'Mente limpa'},
//       {correct: 3, data: 'Mente Sã, Corpo São'},
//       {correct: 0, data: 'Caminho das mãos vazias'},
//       {correct: 1, data: 'Caminho do Guerreiro'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Hojo Undo?',
//     options: [
//       {correct: 0, data: 'Exercícios Básicos/Preparatórios'},
//       {correct: 3, data: 'Exercício de luta com golpes pré determinados'},
//       {correct: 2, data: 'Luta Combate'},
//       {correct: 1, data: 'Exercícios de concentração'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Yakusoku Kumite?',
//     options: [
//       {correct: 2, data: 'Luta Combate'},
//       {correct: 3, data: 'Forma de Kata'},
//       {correct: 0, data: 'Luta pré combinada/pré arranjada'},
//       {correct: 1, data: 'Começar a luta'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa a palavra Seisan?',
//     options: [
//       {correct: 0, data: '13 anos. Quando um jovem era considerado adulto e ao aprender o kata apto para faixa preta.'},
//       {correct: 3, data: '3 conflitos - 3 formas de ataque e defesa.'},
//       {correct: 2, data: '16 Mãos/Posições.'},
//       {correct: 1, data: 'Aptidão.'}
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa a palavra Sanseiryu?',
//     options: [
//       {correct: 2, data: '13 anos. Quando um jovem era considerado adulto.'},
//       {correct: 0, data: '36 Mãos/Posições de ataque e defesa'},
//       {correct: 1, data: 'Equilíbrio mental'},
//       {correct: 3, data: 'Defesa do Dragão'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Dojo?',
//     options: [
//       {correct: 2, data: 'Caminho Inverso (Onde se treinam Artes Marciais)'},
//       {correct: 3, data: 'Tatame (Onde se treinam Artes Marciais)'},
//       {correct: 1, data: 'Arena Espiritual (Onde se treinam Artes Marciais)'},
//       {correct: 0, data: 'Local do caminho (Onde se treinam Artes Marciais)'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Kanshiwa?',
//     options: [
//       {correct: 0, data: 'Fusão dos nomes do precursor (Shushiwa + Kanbun Uechi), influência do Okinawa TE e Kenpo Chinês.'},
//       {correct: 3, data: 'Kata das Crianças.'},
//       {correct: 1, data: 'Caminho das mão vazias.'},
//       {correct: 2, data: 'Kata intermediário.'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Kanshu?',
//     options: [
//       {correct: 0, data: 'Antes chamado Daini Seisan, 1970 nome alterado para lembrar dos precursores, criador Seiki Itokazu.'},
//       {correct: 1, data: 'Caminho do Guerreiro.'},
//       {correct: 3, data: 'Criado por Kanei Uechi em homenagem ao pai, após seu falecimento.'},
//       {correct: 2, data: 'Lição de vida.'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa a palavra Seichin?',
//     options: [
//       {correct: 1, data: 'Antes chamado Daini Seichin, criado por Kanei Uechi.'},
//       {correct: 0, data: 'Habilidade de um garoto de 10 anos, criado por Saburo Uehara.'},
//       {correct: 3, data: 'Equilibrio mental, simboliza o Dragão.'},
//       {correct: 2, data: 'Controle Emocional.'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa a palavra Seiryu?',
//     options: [
//       {correct: 3, data: 'Equilibrio mental, simboliza o Dragão.'},
//       {correct: 1, data: 'Caminho do Guerreiro após adulto'},
//       {correct: 2, data: 'Forma da Garça'},
//       {correct: 0, data: '16 anos, necessidade de treinamento após faixa preta'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa a palavra Kanchin?',
//     options: [
//       {correct: 0, data: 'Batalha/Táticas de Kanbun, nível de habilidade e como lidar com dificuldades nesse nível técnico.'},
//       {correct: 1, data: 'Conhecimento de Kanei, Habilidade demonstrada ao chegar nesse Kata.'},
//       {correct: 2, data: '56 formas de ataque e defesa.'},
//       {correct: 3, data: 'Coração de Dragão, Kata Rígido demonstrando força.'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Kote Kitae',
//     options: [
//       {correct: 1, data: 'Calejamento das pernas'},
//       {correct: 2, data: 'Calejamento da região abdominal'},
//       {correct: 3, data: 'Calejamento da região peitoral'},
//       {correct: 0, data: 'Calejamento do antebraço'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Hara Kitae',
//     options: [
//       {correct: 1, data: 'Calejamento das pernas'},
//       {correct: 0, data: 'Calejamento da região abdominal'},
//       {correct: 3, data: 'Calejamento da região peitoral'},
//       {correct: 2, data: 'Calejamento do antebraço'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Ashi Kitae',
//     options: [
//       {correct: 0, data: 'Calejamento das pernas'},
//       {correct: 1, data: 'Calejamento da região abdominal'},
//       {correct: 3, data: 'Calejamento da região peitoral'},
//       {correct: 2, data: 'Calejamento do antebraço'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Quando o nome Pangainoon se transformou em Uechi Ryu?',
//     options: [
//       {correct: 3, data: 'Em meados entre 1945 e 1958, como homenagem ao precursores.'},
//       {correct: 1, data: 'Em 1920, quando Kanbun Uechi abriu seu dojo em Okinawa.'},
//       {correct: 0, data: 'Em 1948, após morte de Kanbun Uechi.'},
//       {correct: 2, data: 'Em 1943, após Kanei Uechi introduzir mais Katas ao sistema.'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Em que período os cinco novos Katas foram adicionados ao estilo?',
//     options: [
//       {correct: 0, data: '1954-1958, com ajuda de antigos alunos Seiki Itokazu e Saburo Uehara.'},
//       {correct: 3, data: 'Em 1948, após morte de Kanbun Uechi.'},
//       {correct: 1, data: 'Em 1911, por Kanbun Uechi após nascimento de seu filho Kanei.'},
//       {correct: 2, data: 'Em 1991, após morte de Kanei Uechi.'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Qual o significado de Kata?',
//     options: [
//       {correct: 3, data: 'Guerra'},
//       {correct: 0, data: 'Forma - Modelo'},
//       {correct: 2, data: 'Conjunto de técnicas avançadas'},
//       {correct: 1, data: 'Formulário de luta'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Oque significa Kumite?',
//     options: [
//       {correct: 2, data: 'Golpe com ponta de dedos'},
//       {correct: 3, data: 'Treino de força'},
//       {correct: 0, data: 'Encontro de mãos. Combate propriamente dito'},
//       {correct: 1, data: 'Saudação inicial'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Quais estilos de Karate sugiram em Okinawa?',
//     options: [
//       {correct: 2, data: 'Matsubarashi Ryu - Shuto Ryu - Pangainoon'},
//       {correct: 3, data: 'Shotokan - Shin Ryu - Uechi Ryu'},
//       {correct: 1, data: 'Goju Ryu - Kyokushin - Shorin Ryu'},
//       {correct: 0, data: 'Shorin Ryu - Goju Ryu - Uechi Ryu'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'Quais foram as linhagens de combate originárias de Okinawa e onde Uechi Ryu se encaixa?',
//     options: [
//       {correct: 0, data: 'Naha Te - Shuri Te - Tomari Te. Semelhante ao Naha Te. Uechi Ryu não possui transformações internas.'},
//       {correct: 3, data: 'Naha Te - Shuto Te - Tomari Te. Semelhante ao Tomari Te. Uechi Ryu não possui transformações externas.'},
//       {correct: 1, data: 'Waza Te - Shuri Te - Nage Waza. Semelhante ao Te Waza. Uechi Ryu possui transformações internas.'},
//       {correct: 2, data: 'Naha Te - Shuri Te - Gedan Te. Semelhante ao Shuri Te. Uechi Ryu possui transformações externas.'},
//     ]
//   },
//   {
//     type: 'text',
//     content: 'De onde surgiu o KarateGi e o sistema de faixas do Karate?',
//     options: [
//       {correct: 1, data: 'Baseado no Pangainoon, onde o Kanei Uechi junto com Kanbun estimularam a uniformização.'},
//       {correct: 2, data: 'Baseado no Pangainoon, onde o Shushiwa com Ryu Ryu Tomoyose estimularam a uniformização.'},
//       {correct: 0, data: 'Baseado no Judo, onde o "pai" do judo junto com Funakoshi estimularam a uniformização.'},
//       {correct: 3, data: 'Baseado no Judo, onde o Kanbun Uechi junto com Funakoshi estimularam a uniformização.'},
//     ]
//   },
// ]
