import { IQuestionsProps } from "@/interfaces";

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
      {correct: 0, data: 'Seisan - Seryu - Sanchin'},
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
];

export default challenges;