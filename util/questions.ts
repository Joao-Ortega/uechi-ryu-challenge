import { IQuestionsProps } from "@/interfaces";

const challenges: IQuestionsProps[] = [
  {
    type: 'text',
    content: 'Qual o nome do fundador do estilo de Karatê Uechi Ryu?',
    options: [
      {correct: false, data: 'Ryu Tomoyose'},
      {correct: false, data: 'Kanei Uechi'},
      {correct: true, data: 'Kanbun Uechi'},
      {correct: false, data: 'Kanbun Ryu'}
    ]
  },
  {
    type: 'text',
    content: 'Quais são os 3 Katas "principais" que vieram com Kanbun Uechi após seus anos de estudo na China?',
    options: [
      {correct: false, data: 'Sanchin - Seichin - Seryu'},
      {correct: false, data: 'Kanchin - Kanshu - Seisan'},
      {correct: true, data: 'Seisan - Seryu - Sanchin'},
      {correct: false, data: 'Sanseryu - Seisan - Seichin'}
    ]
  },
];

export default challenges;