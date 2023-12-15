import * as React from 'react';
import { Header } from '../components/Header';
import { Calculator } from '../components/Calculator';

export const HomePage = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <div className='main__calculator'>
          <Calculator currency={'USDT'} />
        </div>

        <div className='main__calculator'>
          <Calculator currency={'USDT'} />
        </div>
      </main>

    <footer>
    </footer>
    </>
  )
}

export default HomePage;
