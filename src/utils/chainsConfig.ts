const juno_testnet = {
  chainId: "uni-6",
  chainName: "Juno Testnet",
  bech32Prefix: "juno",
  rpcUrl: "https://rpc.uni.junonetwork.io/",
  restUrl: "https://api.uni.junonetwork.io/",
  bip44: {
    coinType: 118,
  },
  feeToken: "ujunox",
  coinMap: {
    ujunox: {
      denom: "JUNOX",
      coinDecimals: 6,
    },
  },
  stakingToken: "ujunox",
  defaultGasPrice: 0.04,
  gasPriceStep: {
    low: 0.03,
    average: 0.04,
    high: 0.05,
  },
};

const osmosis_testnet = {
  chainId: "osmo-test-4",
  chainName: "Osmosis Testnet",
  bech32Prefix: "osmo",
  rpcUrl: "https://rpc-v13-devnet.osmosis.zone/",
  restUrl: "https://testnet-rest.osmosis.zone/",
  bip44: {
    coinType: 118,
  },
  feeToken: "uosmo",
  coinMap: {
    uosmo: {
      denom: "OSMO",
      coinDecimals: 6,
    },
  },
  stakingToken: "uosmo",
  defaultGasPrice: 0.025,
  gasPriceStep: {
    low: 0,
    average: 0.025,
    high: 0.04,
  },
};

export const chainsConfig = { osmosis_testnet, juno_testnet };
export type Chain = typeof chainsConfig[keyof typeof chainsConfig];
export type Chains = keyof typeof chainsConfig;
