import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCosmWasm } from '../../providers/CosmWasmProvider';
import { amountToNormal } from '../../utils/calculateCoin';
import { GradientButton } from '../Buttons';
import { ArrowRight, Cross, Logo } from '../Icons';
import MenuSpan from '../Icons/MenuSpan';
import NotificacionIcon from '../Icons/NotificationIcon';
import TextOutline from '../TextOutline';
import './NavMenu.css';
import ConnectButton from '../Buttons/ConnectWallet';
import ConnectWallet from '../Buttons/ConnectWallet';

const NavMenu: React.FC = () => {
  const [menu, setMenu] = useState<'open' | 'close'>('close');
  const [notification, setNotification] = useState<string[]>([]);
  const { connectWallet, disconnectWallet, address, balance } = useCosmWasm();

  const menuLinks = [
    {
      link: '/',
      text: 'Home',
      src: '/assets/home.png'
    },
    {
      link: '/ticket',
      text: 'Buy Tickets',
      src: '/assets/tickets.png'
    },
    {
      link: '/results',
      text: 'Results',
      src: '/assets/results.png'
    },
    {
      link: '/about',
      text: 'About',
      src: '/assets/about.png'
    }
  ];

  return (
    <>
      <div className="min-h-[72px] w-full" />
      <nav
        className={clsx(
          'nav min-h-8 py-4 px-4 md:px-12 flex items-center justify-between w-full bg-transparent fixed top-0 z-40 backdrop-blur'
        )}
      >
        <Link to="/" className="flex items-center justify-center">
          <Logo className="logo" />
          <h2 className="md:text-xl">
            <span className="text-ss-orange-500">SUPER</span>
            <span className="text-orange-500">STAR</span>
          </h2>
        </Link>
        <div className="flex gap-4">
          <ConnectWallet />
          <button className="relative items-center justify-center hidden md:flex">
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
        <ul className={clsx('relative w-full h-full flex flex-col py-24 gap-4 md:gap-0 md:flex-row md:py-0')}>
          <button
            onClick={() => setMenu('close')}
            className="border border-stone-50 rounded-full absolute top-5 right-5 p-2 z-40 hover:border-orange-500 group"
          >
            <Cross className="h-[24px] w-[24px] group-hover:fill-orange-500" />
          </button>
          {menuLinks.map(({ link, text, src }, i) => {
            return (
              <React.Fragment key={`menu-${i}`}>
                <li className="nav-li relative flex-1 transition-all duration-300 md:p-0 p-4 group" onClick={() => setMenu('close')}>
                  <Link
                    to={link}
                    className="nav-link flex rounded-b-lg md:rounded-none flex-row items-center justify-between md:items-start md:justify-center md:flex-col px-4 md:px-6 gap-2 h-full transition-all duration-300 group-hover:bg-gradient-to-b from-transparent via-transparent to-stone-500/70"
                  >
                    <div className="flex gap-2 items-center justify-center md:flex-col md:items-start">
                      <img className="nav-link-img transition-all w-[4rem] duration-300" alt={link} src={src} />
                      <p className="nav-link-text text-3xl font-bold transition-all duration-300 group-hover:text-ss-orange-500">{text}</p>
                    </div>
                    <button className="nav-link-button border border-stone-600 p-2 rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-ss-orange-500 group-hover:to-orange-500 group-hover:border-none">
                      <ArrowRight className="fill-white w-6 h-6" />
                    </button>
                  </Link>
                </li>
                {i != menuLinks.length - 1 && <span className="hidden md:block h-full w-[1px] bg-stone-600/50" />}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
