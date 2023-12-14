import React, { useState } from 'react';
import './Header.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import iconUser from '../../assets/images/user.svg';
import iconSettings from '../../assets/images/settings.svg';

export const Header = () => {
  const [optionState, setOptionState] = useState('Spot');
  const [exchangeState, setExchangeState] = useState('Binance');

  const options = ['Spot', 'Futures', 'Invers'];
  const exchanges = ['Binance', 'Bybit', 'Coinbase'];

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__left'>
          <ul className='header__options'>
            {options.map(option =>
              <>
                <li key={option} className={classNames('header__button', {
                  active: option === optionState,
                })} onClick={() => setOptionState(option)}>{option}</li>
                <div className='header__vr' />
              </>
            )}
          </ul>

          <ul className='header__options'>
            {exchanges.map(exchange =>
              <>
                <li key={exchange} className={classNames('header__button', {
                  active: exchange === exchangeState,
                })} onClick={() => setExchangeState(exchange)}>{exchange}</li>
                <div className='header__vr' />
              </>
            )}
          </ul>
        </div>
        <div className='header__right'>
          <Link className='header__donate' to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.09738 5.66688C6.93568 5.20049 5.51226 5.48576 4.65067 6.59625L4.3671 6.96175C3.17515 8.49804 3.34725 10.6889 4.76447 12.0202L11 17.8778L17.2355 12.0202C18.6528 10.6889 18.8249 8.49803 17.6329 6.96174L17.3493 6.59625L17.9594 6.12296L17.3493 6.59625C16.2988 5.24216 14.4129 5.1142 13.1829 6.08293L11.9454 4.51173C13.9929 2.89912 17.1564 3.08494 18.9295 5.37025L18.1394 5.98325L18.9295 5.37025L19.2131 5.73575C21.0374 8.0871 20.774 11.4402 18.6049 13.4779L12.2317 19.4649C12.2255 19.4707 12.2191 19.4766 12.2127 19.4827C12.1204 19.5695 12.0052 19.6778 11.894 19.7634C11.7617 19.8654 11.5587 19.9975 11.2808 20.052L11.0883 19.0708L11.2808 20.052C11.0954 20.0884 10.9046 20.0884 10.7192 20.052L10.9117 19.0708L10.7192 20.052C10.4413 19.9975 10.2383 19.8654 10.106 19.7634C9.99478 19.6778 9.87967 19.5695 9.78733 19.4827C9.78089 19.4767 9.77456 19.4707 9.76835 19.4649L3.39512 13.4779C1.22601 11.4402 0.962606 8.0871 2.78693 5.73575L3.0705 5.37025C4.89373 3.02032 8.18702 2.8894 10.2274 4.65443L10.9503 5.27973L10.3583 6.03011L9.52623 7.08479C9.17964 7.5241 8.98711 7.77189 8.877 7.96051C8.87557 7.96296 8.87417 7.96537 8.8728 7.96773C8.87492 7.96946 8.87708 7.97122 8.87929 7.97301C9.04912 8.11033 9.31699 8.27377 9.79682 8.56167L10.6326 9.06314C10.6487 9.07278 10.6647 9.08241 10.6808 9.09203C11.0611 9.32012 11.4288 9.54064 11.7057 9.76295C12.0169 10.0128 12.3374 10.3594 12.4542 10.8789C12.571 11.3985 12.4298 11.8489 12.2555 12.2079C12.1004 12.5273 11.8625 12.884 11.6164 13.253C11.6061 13.2685 11.5957 13.2841 11.5853 13.2997L10.9154 14.3045L9.25132 13.1951L9.92116 12.1903C10.2103 11.7566 10.3684 11.5155 10.4564 11.3343C10.4575 11.332 10.4586 11.3297 10.4597 11.3274C10.4577 11.3258 10.4558 11.3242 10.4537 11.3226C10.2967 11.1965 10.0506 11.0463 9.60361 10.7781L8.76783 10.2767C8.75091 10.2665 8.73401 10.2564 8.71715 10.2463C8.30709 10.0003 7.91434 9.76477 7.62179 9.52822C7.29508 9.26405 6.95695 8.89336 6.85509 8.33742C6.75323 7.78147 6.93797 7.31498 7.1498 6.95214C7.33949 6.62724 7.62322 6.26774 7.91946 5.8924C7.93164 5.87696 7.94384 5.8615 7.95606 5.84602L8.09738 5.66688ZM8.78768 7.88838C8.78771 7.88838 8.78813 7.88889 8.78886 7.88991C8.78802 7.88888 8.78766 7.88837 8.78768 7.88838ZM8.8219 8.07027C8.82158 8.07147 8.82137 8.0721 8.82135 8.07211L8.8219 8.07027Z" fill="#FCD535"/>
            </svg>

            Donate
          </Link>

          <img src={iconUser} alt='Login' className='header__icon' />

          <img src={iconSettings} alt='Settings' className='header__icon' />

        </div>
      </div>

      <div className='header__devider' />

    </header>
  );
};
