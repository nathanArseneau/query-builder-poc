import { useEffect, useState } from 'react';
import { useValueEditor } from 'react-querybuilder';

import { fields, operators } from './config';

function computeNewArithmeticValue(value, newValue, i) {
  let bom = value.split('|');
  if (bom.length != 3) {
    bom = [fields[0].name, operators[0].value, ''];
  }
  bom[i] = newValue;
  return bom.join('|');
}

export function ArithmeticValueEditor(props) {
  const { multiValueHandler } = useValueEditor(props);
  useEffect(() => {
    if (props.value === '') {
      multiValueHandler(
        [
          fields[0].name,
          operators[0].value === '=' ? '==' : operators[0].value,
          '',
        ].join('|'),
        0,
      );
    }
  }, [props.value]);

  return (
    <>
      <select
        type="text"
        onChange={(e) => {
          multiValueHandler(
            computeNewArithmeticValue(props.value, e.target.value, 0),
            0,
          );
        }}
      >
        {fields.map((f) => (
          <option value={f.name}>{f.label}</option>
        ))}
      </select>
      <select
        onChange={(e) =>
          multiValueHandler(
            computeNewArithmeticValue(props.value, e.target.value, 1),
            0,
          )
        }
      >
        {operators.map((o) => (
          <option value={o.value === '=' ? '==' : o.value}>{o.label}</option>
        ))}
      </select>
      <input
        type="text"
        onChange={(e) => {
          multiValueHandler(
            computeNewArithmeticValue(props.value, e.target.value, 2),
            0,
          );
        }}
      />
    </>
  );
}
