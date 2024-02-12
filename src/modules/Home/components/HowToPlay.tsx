import React, { useEffect } from 'react';
import { Config } from '../../../interfaces/lottery.interface';
import { useCosmWasm } from '../../../providers/CosmWasmProvider';

const HowToPlay: React.FC = () => {
  const { queryService } = useCosmWasm();
  const [config, setConfig] = React.useState<Config>();

  useEffect(() => {
    if (!queryService) return;
    queryService.getConfig().then(setConfig);
  }, [queryService]);

  return (
    <div className=" flex items-center justify-center flex-col gap-4">
      <h2 className="col-span-4 text-6xl">How to play?</h2>
      <p className="text-stone-400 mb-6">The digits on your ticket must match in the correct order to win.</p>
      <div className="flex-1 w-full flex items-center justify-between flex-col gap-4 md:flex-row">
        <div className="flex-1 text-stone-400 md:max-w-[50%]">
          <h4 className="text-3xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400/80 to-ss-orange-500/80 font-semibold">
            Prize Funds
          </h4>
          <p>The prizes for each lottery round come from three sources: </p>
          <h5 className="text-xl text-white leading-[2.5rem]">Ticket Purchases</h5>
          <p>100% of the {config?.ticket_price.denom.slice(1)} paid by people buying tickets that round goes back into the prize pools</p>
          <h5 className="text-xl text-white leading-[2.5rem]">Rollover Prizes</h5>
          <p>
            After every round, if nobody wins in one of the prize brackets, the unclaimed {config?.ticket_price.denom.slice(1)} for that bracket
            rolls over into the next round and are redistributed among the prize pools.
          </p>
          <h5 className="text-xl text-white leading-[2.5rem]">Staking Injections</h5>
          <p>Staking rewards from the treasury is added to lottery draws over the course of a week.</p>
        </div>
        <div className="w-full grid grid-cols-2 flex-1 gap-4 md:max-w-[40%] border-[2px] border-stone-400 rounded-lg px-8 py-4">
          <h5 className="text-white text-center">Draw</h5>
          <h5 className="text-white text-center">Prize per match</h5>
          {config?.percentage_per_match.map((_, index) => (
            <React.Fragment key={'how_to_play_' + index}>
              <div className="flex justify-center items-center">
                {Array.from({ length: 6 - index }, (_, i) => (
                  <img
                    key={'how_to_play_orange_ball_' + index + i}
                    src="assets/orange-ball.png"
                    className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]"
                  />
                ))}
                {Array.from({ length: index }, (_, i) => (
                  <img
                    key={'how_to_play_orange_ball_' + index + i}
                    src="assets/stone-ball.png"
                    className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]"
                  />
                ))}
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 text-2xl font-semibold uppercase text-center">
                {config?.percentage_per_match[5 - index]}%
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
