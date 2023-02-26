import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { GoBack, GoForward, GoTotallyBack, GoTotallyForward } from '../../../components/Icons';
import { Draw } from '../../../interfaces/lottery.interface';
import { useCosmWasm } from '../../../providers/CosmWasmProvider';
import { amountToNormal } from '../../../utils/calculateCoin';

const BlackBall: React.FC<{ num: number }> = ({ num }) => {
  return (
    <div className="relative">
      <img src="assets/stone-ball.png" className="w-[3.5rem] h-[3.5rem]" />
      <p className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center text-2xl text-stone-50 font-bold">{num}</p>
    </div>
  );
};

const RecentDraws: React.FC = () => {
  const { queryService } = useCosmWasm();
  const [currentDraw, setCurrentDraw] = useState<Draw>();
  const [drawInfo, setDrawInfo] = useState<Draw>();

  useEffect(() => {
    const loadCurrentDraw = async () => {
      if (!queryService) return;
      const draw = await queryService.getCurrentDraw();
      setCurrentDraw(draw);
      setDrawInfo(await queryService.getDrawInfo(draw?.id - 1));
    };
    loadCurrentDraw();
  }, [queryService]);

  const goBack = async () => {
    if (!drawInfo?.id) return;
    if (drawInfo.id === 1) return;
    setDrawInfo(await queryService.getDrawInfo(drawInfo?.id - 1));
  };

  const goNext = async () => {
    if (!drawInfo?.id || !currentDraw?.id) return;
    if (drawInfo.id === currentDraw?.id - 1) return;
    setDrawInfo(await queryService.getDrawInfo(drawInfo?.id + 1));
  };

  const goFirst = async () => {
    if (!drawInfo?.id) return;
    setDrawInfo(await queryService.getDrawInfo(1));
  };

  const goLast = async () => {
    if (!drawInfo?.id || !currentDraw?.id) return;
    setDrawInfo(await queryService.getDrawInfo(currentDraw?.id - 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center w-full mb-4">
        <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80">
          Draw #{drawInfo?.id}
        </p>
        <div className="flex gap-2">
          <button>
            <GoTotallyBack className="w-[24px] h-[24px] hover:text-ss-orange-500" onClick={goFirst} />
          </button>
          <button>
            <GoBack className="w-[24px] h-[24px] hover:text-ss-orange-500" onClick={goBack} />
          </button>
          <button>
            <GoForward className="w-[24px] h-[24px] hover:text-ss-orange-500" onClick={goNext} />
          </button>
          <button>
            <GoTotallyForward className="w-[24px] h-[24px] hover:text-ss-orange-500" onClick={goLast} />
          </button>
        </div>
      </div>
      {drawInfo && (
        <>
          <div className="flex flex-col items-center p-4 justify-center rounded-t-lg bg-gradient-to-tl from-ss-orange-500/80 to-orange-500/80 px-2 relative">
            <div className="uppercase text-md font-bold text-stone-900 w-full flex justify-between px-2">
              <p>{drawInfo.status}</p>
              <p>{format(new Date(+(drawInfo?.end_time as { at_time: string }).at_time / 1e6), 'LLL d, yyyy')}</p>
            </div>
            <p className="uppercase text-xl font-bold ">Winner Number</p>
            <div className="flex gap-2 my-4">
              {[...(drawInfo?.winner_number as string)].map((num, i) => (
                <BlackBall key={drawInfo?.id + '_number_' + i} num={parseInt(num)} />
              ))}
            </div>
            <div className="flex gap-8">
              <div className="text-xl flex items-center flex-col justify-center">
                <p className="">Nº Winners</p>
                <p className="text-stone-900 font-bold">{drawInfo.winners_per_match?.reduce((acc, cur) => acc + cur, 0)}</p>
              </div>
              <div className="text-xl flex items-center flex-col justify-center">
                <p className="">Nº Tickets</p>
                <p className="text-stone-900 font-bold">{drawInfo.total_tickets}</p>
              </div>
            </div>
          </div>
          <div className="rounded-b-lg pt-4 pb-12 px-12 bg-stone-700/20 backdrop-blur w-full flex flex-col ">
            <div className="flex items-center justify-center gap-4">
              <h5 className="text-xl">POT</h5>
              <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 text-center">
                {amountToNormal(drawInfo.total_prize.amount)}
              </h3>
              <h5 className="text-xl">{drawInfo.total_prize.denom.slice(1)}</h5>
            </div>
            <div className="w-full grid grid-cols-3 mt-4 gap-x-4 gap-y-12">
              {Array.from({ length: 6 }).map((_, i) => {
                const matchPrize = amountToNormal(drawInfo?.prize_per_match?.[i] as string);
                const winningTickets = (drawInfo.winners_per_match as number[])[i];
                const eachTicketPrize = !(Number(matchPrize) * winningTickets) ? matchPrize : Number(matchPrize) * winningTickets;
                const denom = drawInfo.total_prize?.denom.slice(1);
                return (
                  <div className="flex items-center justify-center flex-col max-w-fit mx-auto" key={`matchContainer${i}`}>
                    <h6 className="text-stone-400 text-sm uppercase">Mach in {i + 1}</h6>
                    <div className="flex mt-2 gap-1">
                      {Array.from({ length: 6 }).map((_, indexBall) => {
                        return (
                          <React.Fragment key={'balls_' + indexBall}>
                            {indexBall <= i ? (
                              <img src="assets/orange-ball.png" className="w-[1.5rem]" />
                            ) : (
                              <img src="assets/stone-ball.png" className="w-[1.5rem]" />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <p className="text-xl font-semibold">
                      {matchPrize} {denom}
                    </p>
                    <p className="text-stone-400 text-xs flex justify-between w-full font-bold">
                      <span>Winnings tickets</span> {winningTickets}
                    </p>
                    <p className="text-stone-400 text-xs flex justify-between w-full  font-bold">
                      <span>Prize per ticket</span> {eachTicketPrize} {denom}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecentDraws;
