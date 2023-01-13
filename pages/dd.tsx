import React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';

export default function Home() {
  return (
    <div>
      <NumberFormat thousandSeparator={true} prefix={'$'} />
    </div>
  );
}