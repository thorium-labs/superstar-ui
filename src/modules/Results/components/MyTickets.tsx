import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { GradientButton } from '../../../components/Buttons';
import { GoBack, GoForward, GoTotallyBack, GoTotallyForward } from '../../../components/Icons';
import { Draw, TicketResult } from '../../../interfaces/lottery.interface';
import { useCosmWasm } from '../../../providers/CosmWasmProvider';
import { useWallet } from '../../../providers/WalletProvider';

const MyTickets: React.FC = () => {
  const { getCurrentDraw, getDrawInfo, checkDrawWinner } = useCosmWasm();
  const { connectWallet, address } = useWallet();
  const [currentDraw, setCurrentDraw] = useState<Draw>();
  const [drawInfo, setDrawInfo] = useState<Draw>();
  const [drawUserTicket, setDrawUserTicket] = useState<any[]>();

  useEffect(() => {
    if (!address) return;
    const loadCurrentDraw = async () => {
      const draw = await getCurrentDraw();
      setCurrentDraw(draw);
      setDrawInfo(await getDrawInfo(draw.id - 1));
      setDrawUserTicket(await checkDrawWinner(draw.id - 1));
    };
    loadCurrentDraw();
  }, [getCurrentDraw, checkDrawWinner]);

  const goBack = async () => {
    if (!drawInfo?.id) return;
    if (drawInfo.id === 1) return;
    setDrawUserTicket(await checkDrawWinner(drawInfo?.id - 1));
    setDrawInfo(await getDrawInfo(drawInfo?.id - 1));
  };

  const goNext = async () => {
    if (!drawInfo?.id || !currentDraw?.id) return;
    if (drawInfo.id === currentDraw?.id - 1) return;
    setDrawUserTicket(await checkDrawWinner(drawInfo?.id + 1));
    setDrawInfo(await getDrawInfo(drawInfo?.id + 1));
  };

  const goFirst = async () => {
    if (!drawInfo?.id) return;
    setDrawUserTicket(await checkDrawWinner(1));
    setDrawInfo(await getDrawInfo(1));
  };

  const goLast = async () => {
    if (!drawInfo?.id || !currentDraw?.id) return;
    setDrawUserTicket(await checkDrawWinner(currentDraw?.id - 1));
    setDrawInfo(await getDrawInfo(currentDraw?.id - 1));
  };

  if (!address) {
    return (
      <div className="min-h-[10rem] w-full flex items-center justify-center flex-col gap-4">
        <p className="text-stone-400">Please, connect your wallet to see your information</p>
        <GradientButton className="text-2xl" onClick={connectWallet}>
          Connect
        </GradientButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-8 my-12 max-w-4xl mx-auto">
      <div>my tickets</div>
      {drawInfo && (
        <div>
          <div className=" flex justify-between items-center mb-4">
            <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 ">
              Draw #{drawInfo?.id}
            </p>
            <div className="flex gap-2 justify-center items-center text-xl text-stone-400">
              {format(new Date(+(drawInfo?.end_time as { at_time: string }).at_time / 1e6), 'LLL d, yyyy')}
            </div>
            <div className="flex gap-2 justify-end items-center">
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
          {drawUserTicket ? (
            <>
              <div className=" grid grid-cols-2 px-4 py-2 rounded-lg bg-gradient-to-tl from-ss-orange-500/80 to-orange-500/80 text-lg">
                <p className="text-center font-semibold">Nº Ticket</p>
                <p className="text-center font-semibold">Prize per ticket</p>
              </div>
              {drawUserTicket?.map((ticket, i) => {
                return (
                  <div
                    className="even:bg-stone-700/20 odd:backdrop-blur  grid grid-cols-2 px-4 py-2 rounded-lg"
                    key={`ticket-${i}-${ticket.ticket_number}`}
                  >
                    <div className="flex mt-2 gap-1 justify-center items-center relative">
                      {ticket.ticket_number.split('').map((num: string, i: number) => {
                        return (
                          <div className="relative" key={`ballTicket-${i}-${num}`}>
                            <p className="absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center font-bold text-lg">
                              {num}
                            </p>
                            {num === drawInfo.winner_number[i] ? (
                              <img src="assets/orange-ball.png" className="w-[2rem]" />
                            ) : (
                              <img src="assets/stone-ball.png" className="w-[2rem]" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-center">{ticket.matches}</p>
                  </div>
                );
              })}
              <div className=" bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 h-[2px] rounded-xl mb-[2rem]" />
              <div className=" grid grid-cols-3 px-4 py-2 rounded-lg  text-lg">
                <p className="text-center">Total ticket prize </p>
                <p className="text-center text-2xl font-bold">0.005 {drawInfo.total_prize.denom.slice(1)}</p>
                <GradientButton>Claim!</GradientButton>
              </div>
            </>
          ) : (
            <div className="bg-stone-700/20 backdrop-blur rounded-lg p-4 flex items-center justify-center ">
              You didn't buy tickets for this draw
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyTickets;
