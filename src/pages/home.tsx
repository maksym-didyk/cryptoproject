import * as React from 'react';
import { Header } from '../components/Header';
import { Calculator } from '../components/Calculator';
import { CalculatorButtonType, DropDownType } from '../types/enums';
import { CustomSelect } from '../components/CustomSelect';
import classNames from 'classnames';
import { useState } from 'react';

export const HomePage = () => {
  const [optionState, setOptionState] = useState('USDT');

  const marketPrice = 0.6044;
  const options = ['USDT', 'XRP'];

  return (
    <>
      <Header />

      <main className='main'>
        <CustomSelect type={DropDownType.pair} data={['XRP/USDT','BTC/USDT','ETH/USDT','XRP/BTC']} title={'Choose a pair '}/>

        <div className='main__calculator'>
            <Calculator currency={'USDT'} type={CalculatorButtonType.buy} marketPrice={marketPrice} />

            <Calculator currency={'USDT'} type={CalculatorButtonType.sell} marketPrice={marketPrice} />
        </div>

        <div className='main__marketprice'>
          Market price:
          <div className='main__marketprice-value'>{marketPrice}</div>
        </div>

        <CustomSelect data={['Split position','Choose average','Average All']} title={'Choose your average '}/>

        <div className='main__earn'>
          Choose your earn:

          <ul className='header__options'>
            {options.map((option, index) =>
              <>
                <li key={index} className={classNames('header__button', {
                  active: option === optionState,
                })} onClick={() => setOptionState(option)}>{option}</li>
                <div className='header__vr' />
              </>
            )}
          </ul>
        </div>
      </main>

    <footer>
    </footer>
    </>
  )
}

export default HomePage;
