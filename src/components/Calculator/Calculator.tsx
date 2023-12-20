import React, { FC, useState } from 'react';
import { CalculatorInput } from './CalculatorInput/CalculatorInput';
import './Calculator.scss';
import { CalculatorButtonType } from '../../types/enums';
import classNames from 'classnames';

interface Props {
  currency: string,
  type: CalculatorButtonType;
}

export const Calculator: FC<Props> = ({ currency, type }) => {
  const [inputPrice, setInputPrice] = useState<string>('');
  const [inputQuantity, setInputQuantity] = useState<string>('');
  const [inputAll, setInputAll] = useState<string>('');

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
        <CalculatorInput inputValue={inputQuantity} setInputValue={setInputQuantity} />
        XRP
      </div>

      <div className='calculator__row'>
        All 
        <CalculatorInput inputValue={inputAll} setInputValue={setInputAll} />
        {currency}
      </div>

      <div>
        <button className={classNames('calculator__button', {
                  buy: type === CalculatorButtonType.buy,
                  sell: type === CalculatorButtonType.sell,
                })}>{type}</button>
      </div>

    </div>
  );
};