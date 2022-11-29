import React from "react";

const HowToPlay: React.FC = () => {
  return (
    <div className=" flex items-center justify-center flex-col gap-4">
      <h2 className="col-span-4 text-6xl">How to play?</h2>
      <p className="text-stone-400 mb-8">
        The digits on your ticket must match in the correct order to win.
      </p>
      <div className="flex-1 w-full flex items-center justify-between ">
        <div className="w-full grid grid-cols-2 flex-1 gap-4 max-w-[40%] border-[2px] border-stone-400 rounded-lg px-8 py-4">
          <h5 className="text-stone-400 text-center">Draw</h5>
          <h5 className="text-stone-400 text-center">Prize per match</h5>
          <div className="flex justify-center items-center">
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 text-2xl font-semibold uppercase text-center">
            40%
          </div>
          <div className="flex justify-center items-center">
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
          </div>
          <div className="text-2xl flex items-center justify-center">31%</div>
          <div className="flex justify-center items-center">
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
          </div>
          <div className="text-2xl flex items-center justify-center">23%</div>
          <div className="flex justify-center items-center">
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
          </div>
          <div className="text-2xl flex items-center justify-center">11%</div>
          <div className="flex justify-center items-center">
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
          </div>
          <div className="text-2xl flex items-center justify-center">7%</div>
          <div className="flex justify-center items-center">
            <img src="assets/orange-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
            <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
          </div>
          <div className="text-2xl flex items-center justify-center">5%</div>
        </div>
        <p className="text-center text-stone-400 max-w-[50%]">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
          <br />
          <br />
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
      </div>
    </div>
  );
};

export default HowToPlay;
