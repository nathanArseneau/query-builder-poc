import { defaultOperators } from 'react-querybuilder';

export const fields = [
  {
    name: 'numberOne',
    label: 'Number One',
    type: 'number',
  },
  { name: 'numberTwo', label: 'Number Two', type: 'number' },
  { name: 'numberTree', label: 'Number Tree', type: 'number' },
  { name: 'numberFour', label: 'Number Four', type: 'number' },
  { name: 'numberFive', label: 'Number Five', type: 'number' },
];

export const operators = [
  ...defaultOperators,
  { name: '+', label: '+', value: '+' },
  { name: '-', label: '-', value: '-' },
  { name: '*', label: '*', value: '*' },
  { name: '/', label: '/', value: '/' },
];
