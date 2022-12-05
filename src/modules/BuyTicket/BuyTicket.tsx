import React, { useEffect, useState } from 'react';
import { GradientButton } from '../../components/Buttons';
import { SimpleCounter } from '../../components/Counters';
import { Draw } from '../../interfaces/lottery.interface';
import { useCosmWasm } from '../../providers/CosmWasmProvider';
import { useWallet } from '../../providers/WalletProvider';
import { amountToNormal } from '../../utils/calculateCoin';
import BuyTicketContainer from './components/BuyTicketContainer';
import DrawContainer from './components/DrawContainer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate';

const generateRandomTicket = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 9)).join('');

const BuyTicket: React.FC = () => {
  const [ticketAmount, setTicketAmount] = useState<number>(1);
  const [tickets, setTickets] = useState<string[]>([generateRandomTicket()]);
  const [draw, setDraw] = useState<Draw>();
  const { address } = useWallet();
  const navigate = useNavigate();
  const { getCurrentDraw, buyTickets, balance } = useCosmWasm();

  console.log(tickets);
  const addTicket = (newTicketAmount: number) => {
    setTicketAmount(newTicketAmount);
    setTickets([...tickets, generateRandomTicket()]);
  };

  const removeTicket = (newTicketAmount: number) => {
    setTicketAmount(newTicketAmount);
    setTickets(tickets.slice(0, newTicketAmount));
  };

  const updateTicket = (ticketNumber: string, ticketPosition: number) => {
    tickets.splice(ticketPosition, 1, ticketNumber);
    setTickets([...tickets]);
  };

  const handlerSuccess = async (tx: ExecuteResult) => {
    window.open(`https://testnet.mintscan.io/juno-testnet/txs/${tx.transactionHash}`);
    toast.dismiss('tx.success');
  };

  const handlerBuyTickets = async () => {
    if (!draw) return;
    await toast.promise(
      buyTickets(draw.id, draw.ticket_price, tickets),
      {
        loading: 'Buying tickets...',
        success: (tx) => {
          toast.dismiss('tx.loading');
          return (
            <b>
              Tx Success{' '}
              <span className="cursor-pointer" onClick={() => handlerSuccess(tx as ExecuteResult)}>
                [_↗]
              </span>
            </b>
          );
        },
        error: 'Error'
      },
      { success: { id: 'tx.success' }, loading: { id: 'tx.loading' } }
    );
    console.log(tickets);
    navigate('/results?tickets');
  };

  useEffect(() => {
    getCurrentDraw().then(setDraw);
  }, [getCurrentDraw]);

  return (
    <div className="flex gap-4 flex-wrap relative">
      <DrawContainer draw={draw as Draw} />
      <h1 className="w-full text-5xl mb-8">Buy tickets</h1>
      <div className="max-w-[800px]">
        <div className="rounded-lg border border-stone-600/50 flex items-center justify-between p-2">
          <SimpleCounter addTicket={addTicket} removeTicket={removeTicket} maxNumber={25} initialValue={ticketAmount} minNumber={1} />
          <h4>ADD TICKETS</h4>
          <p className="text-stone-200">25 tickets max.</p>
        </div>
        <div className="flex flex-col w-full gap-6 my-7 px-4 items-center justify-center">
          {tickets.length
            ? Array.from({ length: ticketAmount }).map((e, i) => {
                return (
                  <BuyTicketContainer
                    key={`ticket_${i}`}
                    ticketNumber={tickets[i]}
                    setTicketNumber={updateTicket}
                    ticketPosition={i}
                    draw={draw as Draw}
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className="sticky top-[9rem] flex-1 h-fit">
        <div className="p-4 bg-stone-700/30 backdrop-blur rounded-xl h-fit flex flex-col gap-4 z-10 absolute w-full">
          <h2 className="text-3xl font-bold">Payment</h2>
          <span className="block bg-stone-500 w-full h-[2px] rounded-lg" />
          <div className="flex justify-between">
            <div>
              <p>Ticket price</p>
              <p className="text-stone-400 uppercase text-xs">Draw #{draw?.id}</p>
            </div>
            <div>
              <p className="uppercase">
                {amountToNormal(draw?.ticket_price.amount as string)} <span className="text-ss-orange-500">{balance?.denom.slice(1)}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p>Nº Tickets</p>
            </div>
            <p>x{ticketAmount}</p>
          </div>
          <span className="block bg-stone-500 w-full h-[2px] rounded-lg" />
          <div className="flex justify-between">
            <div>
              <p className="uppercase text-xl">Total</p>
            </div>
            <p className="uppercase">
              {ticketAmount * Number(amountToNormal(draw?.ticket_price.amount as string))}{' '}
              <span className="text-ss-orange-500">{balance?.denom.slice(1)}</span>
            </p>
          </div>
          <GradientButton onClick={handlerBuyTickets} disabled={!address || draw?.status === 'pending'}>
            Pay now
          </GradientButton>
        </div>
        <img src="assets/orange-ball.png" className="bubble animate-floating h-[6rem] w-[6rem] absolute top-[-4rem] right-[4rem]" />
        <img src="assets/ss-orange-ball.png" className="bubble h-[4rem] w-[4rem] rounded-full absolute top-[-2rem] right-[1rem] z-20" />
      </div>
    </div>
  );
};

export default BuyTicket;
