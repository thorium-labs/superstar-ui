import { ExecuteResult, setupWasmExtension, SigningCosmWasmClient, WasmExtension } from "@cosmjs/cosmwasm-stargate";
import { GasPrice, coin, QueryClient } from "@cosmjs/stargate";
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Coin, Draw, TicketResult } from "../interfaces/lottery.interface";
import { useWallet } from "./WalletProvider";
import { HttpBatchClient, Tendermint34Client } from "@cosmjs/tendermint-rpc";

interface CosmWasmState {
  cosmWasmClient: SigningCosmWasmClient;
  queryClient: QueryClient & WasmExtension;
  getCurrentDraw: () => Promise<Draw>;
  getDrawInfo: (drawId: number) => Promise<Draw | undefined>;
  checkDrawWinner: (drawId: number) => Promise<TicketResult[]>;
  getDrawUserTickets: (drawId: number) => Promise<string[]>;
  buyTickets: (drawId: number, ticketPrice: Coin, tickets: string[]) => Promise<ExecuteResult | undefined>;
  claimPrize: (drawId: number) => Promise<ExecuteResult | undefined>;
  getLastDraws: (lastDraw: number, limit: number) => Promise<Draw[]>;
}

export const CosmWasmContext = React.createContext<CosmWasmState | null>(null);
const lotteryAddr = "juno1t4u7f5ad8ez0uc05xx4qlx0sfyc2u7rxqp37vrfxnymuj2thva3s5w7f0s";

const CosmWasmProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { signer, address, chainInfo } = useWallet();
  const [cosmWasmClient, setCosmWasmClient] = useState<SigningCosmWasmClient>();
  const [queryClient, setQueryClient] = useState<QueryClient & WasmExtension>();

  const getLastDraws = useCallback(
    async (lastDraw: number, limit: number) => {
      return await Promise.all(
        Array.from({ length: limit }, (_, i) =>
          queryClient?.wasm.queryContractSmart(lotteryAddr, {
            get_draw: { id: lastDraw - i },
          })
        )
      );
    },
    [queryClient]
  );

  const getCurrentDraw = useCallback(async () => {
    const value = await cosmWasmClient?.queryContractSmart(lotteryAddr, {
      get_current_draw: {},
    });
    return value;
  }, [cosmWasmClient]);

  const getDrawInfo = useCallback(
    async (drawId: number) => {
      return await cosmWasmClient?.queryContractSmart(lotteryAddr, {
        get_draw: { id: drawId },
      });
    },
    [cosmWasmClient]
  );

  const checkDrawWinner = useCallback(
    async (drawId: number) => {
      return await cosmWasmClient?.queryContractSmart(lotteryAddr, {
        check_winner: { addr: address, draw_id: drawId },
      });
    },
    [cosmWasmClient, address]
  );

  const getDrawUserTickets = useCallback(
    async (drawId: number) => {
      return await cosmWasmClient?.queryContractSmart(lotteryAddr, {
        get_tickets: { addr: address, draw_id: drawId },
      });
    },
    [cosmWasmClient, address]
  );

  const buyTickets = useCallback(
    async (drawId: number, ticketPrice: Coin, tickets: string[]) => {
      const amount = Math.ceil(tickets.length * Number(ticketPrice.amount));
      return await cosmWasmClient?.execute(address as string, lotteryAddr, { buy_ticket: { draw_id: drawId, tickets } }, "auto", undefined, [
        coin(amount, ticketPrice.denom),
      ]);
    },
    [cosmWasmClient]
  );

  const claimPrize = useCallback(
    async (drawId: number) => {
      return await cosmWasmClient?.execute(
        address as string,
        lotteryAddr,
        {
          claim_prize: { draw_id: drawId },
        },
        "auto"
      );
    },
    [cosmWasmClient]
  );

  useEffect(() => {
    if (!signer || !address) return;
    const loadClient = async () => {
      const client = await SigningCosmWasmClient.connectWithSigner(chainInfo.rpcUrl, signer, {
        prefix: chainInfo.bech32Prefix,
        gasPrice: GasPrice.fromString(chainInfo.defaultGasPrice + chainInfo.feeToken),
      });
      const httpClient = new HttpBatchClient(chainInfo.rpcUrl, { batchSizeLimit: 10 });

      const queryClient = QueryClient.withExtensions(await Tendermint34Client.create(httpClient), setupWasmExtension);
      setCosmWasmClient(client);
      setQueryClient(queryClient);
    };
    loadClient();
  }, [signer, address]);

  return (
    <CosmWasmContext.Provider
      value={
        {
          cosmWasmClient,
          queryClient,
          getCurrentDraw,
          getDrawInfo,
          checkDrawWinner,
          getDrawUserTickets,
          buyTickets,
          claimPrize,
          getLastDraws,
        } as CosmWasmState
      }
    >
      {children}
    </CosmWasmContext.Provider>
  );
};

export const useCosmWasm = () => {
  const context = React.useContext(CosmWasmContext);
  if (!context) throw new Error("CosmWasm Context Provider is not instanced");
  return context;
};

export default CosmWasmProvider;
