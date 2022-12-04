import React from 'react';
import { Twitter } from '../Icons';

const Footer: React.FC = () => {
  const social = [
    {
      url: 'https://twitter.com/SuperStarCosmos',
      icon: <Twitter className="fill-stone-500 w-[24px] h-[24px] hover:fill-ss-orange-500" />
    }
  ];
  return (
    <footer className="min-h-8 py-4 px-12 flex items-center justify-between w-full bg-transparent z-40 backdrop-blur mt-8">
      <div className="max-w-6xl flex mx-auto justify-between w-full">
        <p className="text-stone-500">© SuperStar, 2022</p>
        <div className="flex gap-4">
          {social.map(({ url, icon }, i) => {
            return (
              <a key={i} href={url}>
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
