import { OfflineSigner } from "@cosmjs/proto-signing";
import { chainsConfig } from "../utils/chainsConfig";

export const loadKeplr = async (chainId: string) => {
  if (!window || !window.keplr) return;
  try {
    await window.keplr.enable(chainId);
  } catch (err) {
    await addChain(chainId);
    await window.keplr.enable(chainId);
  }
};

export const getSigner = (chainId: string) =>
  window?.keplr?.getOfflineSignerAuto(chainId) as Promise<OfflineSigner>;

const addChain = async (chainId: string) => {
  const chainInfo = Object.values(chainsConfig).find(
    (chainInfo) => chainInfo.chainId === chainId
  );
  const config = configKeplr(chainInfo);
  await window?.keplr?.experimentalSuggestChain(config);
};

export const configKeplr = (config: any) => {
  return {
    chainId: config.chainId,
    chainName: config.chainName,
    rpc: config.rpcUrl,
    rest: config.restUrl,
    bech32Config: {
      bech32PrefixAccAddr: `${config.bech32Prefix}`,
      bech32PrefixAccPub: `${config.bech32Prefix}pub`,
      bech32PrefixValAddr: `${config.bech32Prefix}valoper`,
      bech32PrefixValPub: `${config.bech32Prefix}valoperpub`,
      bech32PrefixConsAddr: `${config.bech32Prefix}valcons`,
      bech32PrefixConsPub: `${config.bech32Prefix}valconspub`,
    },
    currencies: [
      {
        coinDenom: config.coinMap[config.feeToken].denom,
        coinMinimalDenom: config.feeToken,
        coinDecimals: config.coinMap[config.feeToken].coinDecimals,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: config.coinMap[config.feeToken].denom,
        coinMinimalDenom: config.feeToken,
        coinDecimals: config.coinMap[config.feeToken].coinDecimals,
      },
    ],
    stakeCurrency: {
      coinDenom: config.coinMap[config.stakingToken].denom,
      coinMinimalDenom: config.stakingToken,
      coinDecimals: config.coinMap[config.stakingToken].coinDecimals,
    },
    gasPriceStep: {
      low: config.gasPriceStep.low,
      average: config.gasPriceStep.average,
      high: config.gasPriceStep.high,
    },
    bip44: { coinType: 118 },
    coinType: 118,
  };
};
