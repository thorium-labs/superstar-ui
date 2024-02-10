import React, { PropsWithChildren } from 'react';
import Footer from '../Footer';
import NavMenu from '../NavMenu';
import './Layout.css';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="layout w-full min-h-screen flex flex-col justify-between items-center scrollbar-thin scrollbar-thumb-ss-orange-500 scrollbar-thumb-rounded-full scrollbar-track-transparent overflow-y-scroll">
      <NavMenu />
      <main className="main max-w-6xl flex-1 p-4 w-full mb-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
