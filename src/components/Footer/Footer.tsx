import React from 'react';
import { XBrand } from '../Icons';

const Footer: React.FC = () => {
  const social = [
    {
      url: 'https://twitter.com/superstarDA0',
      icon: <XBrand className="hover:cursor-pointer hover:stroke-ss-orange-500" />
    }
  ];
  return (
    <footer className="min-h-8 py-4 px-12 flex items-center justify-between w-full bg-transparent z-40 backdrop-blur mt-8">
      <div className="max-w-6xl flex mx-auto justify-between w-full">
        <p className="text-stone-500">Thorium labs - {new Date().getFullYear()} All Rights Reserved</p>
        <div className="flex gap-4">
          {social.map(({ url, icon }, i) => {
            return (
              <i key={i} onClick={() => window.open(url)}>
                {icon}
              </i>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
