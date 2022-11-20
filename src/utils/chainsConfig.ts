export const malaga_testnet = {
  chainId: "malaga-420",
  chainName: "Wasm (malaga-420)",
  addressPrefix: "wasm",
  rpcUrl: "https://rpc.malaga-420.cosmwasm.com:443",
  httpUrl: "https://api.malaga-420.cosmwasm.com",
  feeToken: "umlg",
  stakingToken: "uand",
  coinMap: {
    umlg: { denom: "MLG", fractionalDigits: 6 },
    uand: { denom: "AND", fractionalDigits: 6 },
  },
  gasPrice: 0.04,
};

const juno_prod = {
  chainId: "juno-1",
  chainName: "Juno",
  addressPrefix: "juno",
  rpcUrl: "https://rpc-juno.itastakers.com/",
  httpUrl: "https://lcd-juno.itastakers.com/",
  feeToken: "ujuno",
  stakingToken: "ujuno",
  coinMap: {
    ujunox: { denom: "JUNO", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const juno_testnet = {
  chainId: "uni-5",
  chainName: "Juno Testnet",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.uni.juno.deuslabs.fi:443",
  httpUrl: "https://lcd.uni.juno.deuslabs.fi",
  feeToken: "ujunox",
  stakingToken: "ujunox",
  coinMap: {
    ujunox: { denom: "JUNOX", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const juno_local = {
  chainId: "testing",
  chainName: "Juno Local",
  addressPrefix: "juno",
  rpcUrl: "http://localhost:26657",
  httpUrl: "http://localhost:1317",
  feeToken: "ujunox",
  stakingToken: "ujunox",
  coinMap: {
    ujunox: { denom: "JUNOX", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

export const chainsConfig = {
  malaga_testnet,
  juno_prod,
  juno_testnet,
  juno_local,
};
