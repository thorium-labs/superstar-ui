import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCosmWasm } from '../../providers/CosmWasmProvider';
import { useWallet } from '../../providers/WalletProvider';
import { amountToNormal } from '../../utils/calculateCoin';
import { GradientButton } from '../Buttons';
import { ArrowRight, Cross, Logo } from '../Icons';
import MenuSpan from '../Icons/MenuSpan';
import NotificacionIcon from '../Icons/NotificationIcon';
import TextOutline from '../TextOutline';
import './NavMenu.css';

const NavMenu: React.FC = () => {
  const [menu, setMenu] = useState<'open' | 'close'>('close');
  const [notification, setNotification] = useState<string[]>([]);
  const { connectWallet, disconnectWallet, address } = useWallet();
  const { balance } = useCosmWasm();

  const menuLinks = [
    {
      link: '/',
      text: 'Home',
      sum: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
      src: '/assets/home.png'
    },
    {
      link: '/ticket',
      text: 'Buy Tickets',
      sum: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
      src: '/assets/tickets.png'
    },
    {
      link: '/results',
      text: 'Results',
      sum: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
      src: '/assets/results.png'
    },
    {
      link: '/about',
      text: 'About',
      sum: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
      src: '/assets/about.png'
    }
  ];

  return (
    <>
      <div className="min-h-[72px] w-full h-full" />
      <nav className={clsx('nav min-h-8 py-4 px-12 flex items-center justify-between w-full bg-transparent fixed top-0 z-40 backdrop-blur')}>
        <Link to="/" className="flex items-center justify-center">
          <Logo className="logo" />
          <h2 className="text-xl">
            <span className="text-ss-orange-500">SUPER</span>
            <span className="text-orange-500">STAR</span>
          </h2>
        </Link>
        <div className="flex gap-4">
          {address ? (
            <button className="disconnect-button outline-none relative" onClick={disconnectWallet}>
              <TextOutline className="min-w-[9.5rem] text-center gap-5">
                <span>{amountToNormal(balance?.amount || 0)}</span>
                <span className="uppercase">{balance?.denom.slice(1)}</span>
              </TextOutline>
              <span className="disconnect-text opacity-0 absolute bg-ss-bg rounded-[10px] py-1 px-2 top-[2px] left-[2px] transition-all">
                Disconnect
              </span>
            </button>
          ) : (
            <GradientButton onClick={connectWallet} className="min-w-[9.5rem]">
              Connect Wallet
            </GradientButton>
          )}
          <button className="relative flex items-center justify-center ">
            <NotificacionIcon className="w-[22px] h-[22px] hover:fill-ss-orange-500" />
            {notification.length ? (
              <span className="absolute block bg-gradient-to-bl from-ss-orange-500 to-orange-500 h-2 w-2 top-[2px] right-[-3px] rounded-full" />
            ) : (
              ''
            )}
          </button>
          <button onClick={() => setMenu('open')} className="outline-none ">
            <MenuSpan className="w-[28px] h-[28px] hover:stroke-ss-orange-500" />
          </button>
        </div>
      </nav>
      <div className={clsx('fixed z-50 h-screen w-screen bg-stone-700/50 backdrop-blur-lg', menu, menu == 'open' ? 'flex' : 'hidden')}>
        <ul className={clsx('relative w-full h-full flex')}>
          <button
            onClick={() => setMenu('close')}
            className="border border-stone-50 rounded-full absolute top-5 right-5 p-2 z-40 hover:border-orange-500"
          >
            <Cross className="h-[24px] w-[24px] hover:fill-orange-500" />
          </button>
          {menuLinks.map(({ link, text, sum, src }, i) => {
            return (
              <React.Fragment key={`menu-${i}`}>
                <li className="nav-li relative flex-1 transition-all duration-300" onClick={() => setMenu('close')}>
                  <Link
                    to={link}
                    className="nav-link flex items-start justify-center flex-col px-4 gap-2 h-full transition-all duration-300 hover:bg-gradient-to-b from-transparent via-transparent to-stone-500/70"
                  >
                    <img className="nav-link-img opacity-0 transition-all w-[4rem] duration-300" alt={link} src={src} />
                    <p className="nav-link-text text-3xl font-bold transition-all duration-300">{text}</p>
                    <p className="nav-link-sum text-sm text-stone-400 transition-all duration-300">{sum}</p>
                    <button className="nav-link-button border border-stone-600 p-2 rounded-full transition-all duration-300">
                      <ArrowRight className="fill-white w-6 h-6" />
                    </button>
                  </Link>
                </li>
                {i != menuLinks.length - 1 && <span className="block h-full w-[1px] bg-stone-600/50" />}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
