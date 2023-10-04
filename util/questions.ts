import { IQuestionsProps } from "../interfaces";
import kiba from '../app/assets/images/kiba.png';
import zen from '../app/assets/images/zen.png';
import mu from '../app/assets/images/mu.png';

const challenges: IQuestionsProps[] = [
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
      {correct: 1, data: '3 conflitos'},
      {correct: 2, data: 'Mente de Principiante'},
      {correct: 0, data: 'Mente - Técnica - Corpo'},
      {correct: 3, data: 'Buscar Exelência'}
    ]
  },
];

export default challenges;