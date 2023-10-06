import { IQuestions } from "../interfaces";
import kiba from '../app/assets/images/kiba.png';
import zen from '../app/assets/images/zen.png';
import mu from '../app/assets/images/mu.png';
import nek from '../app/assets/images/nek.png';
import heiko from '../app/assets/images/heik.png';
import shi from '../app/assets/images/shi.png';
import san from '../app/assets/images/san.png';
import heisoku from '../app/assets/images/heisoku.png';

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
      {correct: 1, data: 'Sanchin - Seichin - Seryu'},
      {correct: 2, data: 'Kanchin - Kanshu - Seisan'},
      {correct: 0, data: 'Seisan - Sanseryu - Sanchin'},
      {correct: 3, data: 'Sanseryu - Seisan - Seichin'}
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
];

export default challenges;
