import React, { FC, useEffect, useState } from 'react';
import { CalculatorInput } from './CalculatorInput/CalculatorInput';
import './Calculator.scss';
import { CalculatorButtonType } from '../../types/enums';
import classNames from 'classnames';

interface Props {
  currency: string,
  type: CalculatorButtonType,
  marketPrice: number,
}

export const Calculator: FC<Props> = ({ currency, type, marketPrice }) => {
  const [inputPrice, setInputPrice] = useState<string | number>('');
  const [inputQuantity, setInputQuantity] = useState<string | number>('');
  const [inputAll, setInputAll] = useState<string | number>('');
  const [calculating, setCalculating] = useState(false); // Новий стан

  const handleSetInputQuantity = (value: number | string) => {
    // if (inputAll) {
    //   setInputAll('');
    // }

    setInputQuantity(value);
  }

  useEffect(() => {
    if (!calculating && inputAll) {
      setCalculating(true);
  
      if (!inputPrice) {
        setInputPrice(marketPrice);
      }

      setInputQuantity(Math.floor(+inputAll / +inputPrice));
      setCalculating(false);

      return;
    }

    if (!calculating && inputQuantity) {
      setCalculating(true);

      if (!inputPrice) {
        setCalculating(false);
        return;
      }

      setInputAll(Math.floor((+inputPrice * +inputQuantity) * 10000) / 10000);
      setCalculating(false);

      return;
    }
    
  }, [inputAll, inputQuantity, inputPrice, marketPrice, calculating]);

  return (
    <div className='calculator'>
      <div>
        Balance
        <span className='calculator__balance'>
          {`168.7 
          ${type === CalculatorButtonType.buy ? '$' : 'XRP'}`}
        </span>
      </div>

      <div className='calculator__row'>
        Price 
        <CalculatorInput inputValue={inputPrice} setInputValue={setInputPrice} />
        {currency}
      </div>

      <div className='calculator__row'>
        Quantity 
        <CalculatorInput inputValue={inputQuantity} setInputValue={handleSetInputQuantity} />
        XRP
      </div>

      <div className='calculator__row'>
        All 
        <CalculatorInput inputValue={inputAll} setInputValue={setInputAll} />
        {currency}
      </div>

      <div>
        <button 
          className={classNames('calculator__button', {
            buy: type === CalculatorButtonType.buy,
            sell: type === CalculatorButtonType.sell,
            })}
        >
            {type}
        </button>


      </div>

    </div>
  );
};