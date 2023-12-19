import * as React from 'react';
import { Header } from '../components/Header';
import { Calculator } from '../components/Calculator';
import { CalculatorButtonType } from '../types/enums';

export const HomePage = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <div className='main__calculator'>
          <Calculator currency={'USDT'} type={CalculatorButtonType.buy} />
        </div>

        <div className='main__calculator'>
          <Calculator currency={'USDT'} type={CalculatorButtonType.sell} />
        </div>
      </main>

    <footer>
    </footer>
    </>
  )
}

export default HomePage;
