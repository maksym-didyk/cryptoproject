import React, { FC, useState } from 'react';
import { CalculatorInput } from './CalculatorInput/CalculatorInput';
import './Calculator.scss';

interface Props {
  currency: string,
}

export const Calculator: FC<Props> = ({ currency }) => {
  const [inputPrice, setInputPrice] = useState<string>('');
  const [inputQuantity, setInputQuantity] = useState<string>('');
  const [inputAll, setInputAll] = useState<string>('');

  return (
    <div className='calculator'>
      Balance 
      <div className='calculator__row'>
        Price 
        <CalculatorInput inputValue={inputPrice} setInputValue={setInputPrice} />
        {currency}
      </div>

      <div className='calculator__row'>
        Quantity 
        <CalculatorInput inputValue={inputQuantity} setInputValue={setInputQuantity} />
        XRP
      </div>

      <div className='calculator__row'>
        All 
        <CalculatorInput inputValue={inputAll} setInputValue={setInputAll} />
        XRP
      </div>

    </div>
  );
};