import { setupWasmExtension, SigningCosmWasmClient, WasmExtension } from '@cosmjs/cosmwasm-stargate';
import { coin, Coin, OfflineSigner } from '@cosmjs/proto-signing';
import {
  BankExtension,
  DistributionExtension,
  GasPrice,
  QueryClient,
  setupBankExtension,
  setupDistributionExtension,
  setupStakingExtension,
  setupTxExtension,
  StakingExtension,
  TxExtension
} from '@cosmjs/stargate';
import { HttpBatchClient, Tendermint34Client } from '@cosmjs/tendermint-rpc';

const lotteryAddr = import.meta.env.VITE_CONTRACT_ADDR;

export class SuperStarQueryService {
  client: QueryClient & StakingExtension & BankExtension & TxExtension & DistributionExtension & WasmExtension;
  constructor(readonly tmClient: Tendermint34Client) {
    this.client = QueryClient.withExtensions(
      this.tmClient,
      setupStakingExtension,
      setupBankExtension,
      setupTxExtension,
      setupWasmExtension,
      setupDistributionExtension
    );
  }

  static async getTmClient(chainName: string): Promise<Tendermint34Client> {
    const rpcUrl = chainName.includes('testnet')
      ? `https://rpc.testcosmos.directory/${chainName}`
      : `https://rpc.cosmos.directory/${chainName}`;
    const httpClient = new HttpBatchClient(rpcUrl, { batchSizeLimit: 10 });
    return await Tendermint34Client.create(httpClient);
  }

  static async connect(chain: { chain_name: string }): Promise<SuperStarQueryService> {
    const tmClient = await this.getTmClient(chain.chain_name);
    return new SuperStarQueryService(tmClient);
  }

  async getBalances(address: string): Promise<Coin[]> {
    const balances = await this.client.bank.allBalances(address);
    return balances;
  }

  async getBalance(address: string, denom: string): Promise<Coin> {
    const balance = await this.client.bank.balance(address, denom);
    return balance;
  }

  async getLastDraws(lastDraw: number, limit: number) {
    return await Promise.all(
      Array.from({ length: limit }, (_, i) =>
        this.client.wasm.queryContractSmart(lotteryAddr, {
          get_draw: { id: lastDraw - i }
        })
      )
    );
  }

  async getConfig() {
    return await this.client.wasm.queryContractSmart(lotteryAddr, {
      get_config: {}
    });
  }

  async getCurrentDraw() {
    const value = await this.client.wasm.queryContractSmart(lotteryAddr, {
      get_current_draw: {}
    });
    return value;
  }

  async getDrawInfo(drawId: number) {
    return await this.client.wasm.queryContractSmart(lotteryAddr, {
      get_draw: { id: drawId }
    });
  }

  async checkDrawWinner(drawId: number, address: string) {
    return await this.client.wasm.queryContractSmart(lotteryAddr, {
      check_winner: { addr: address, draw_id: drawId }
    });
  }

  async getDrawUserTickets(drawId: number, address: string) {
    return await this.client.wasm.queryContractSmart(lotteryAddr, {
      get_tickets: { addr: address, draw_id: drawId }
    });
  }
}

export class SuperStartExecuteService extends SuperStarQueryService {
  constructor(readonly tmClient: Tendermint34Client, readonly signingClient: SigningCosmWasmClient, readonly userAddr: string) {
    super(tmClient);
  }
  static async connectWithSigner(signer: OfflineSigner, chain: any): Promise<SuperStartExecuteService> {
    const rpcUrl = chain.chain_name.includes('testnet')
      ? `https://rpc.testcosmos.directory/${chain.chain_name}`
      : `https://rpc.cosmos.directory/${chain.chain_name}`;
    const [{ denom, average_gas_price }] = chain.fees?.fee_tokens || [];
    const tmClient = await this.getTmClient(chain.chain_name);
    const [{ address }] = await signer.getAccounts();
    const signingClient = await SigningCosmWasmClient.connectWithSigner(rpcUrl, signer, {
      prefix: chain.bech32_prefix,
      gasPrice: GasPrice.fromString(`${average_gas_price || 0.025}${denom}`)
    });
    return new SuperStartExecuteService(tmClient, signingClient, address);
  }

  async claimPrize(drawId: number) {
    return await this.signingClient.execute(
      this.userAddr,
      lotteryAddr,
      {
        claim_prize: { draw_id: drawId }
      },
      'auto'
    );
  }

  async buyTickets(drawId: number, ticketPrice: Coin, tickets: string[]) {
    const amount = Math.ceil(tickets.length * Number(ticketPrice.amount));
    return await this.signingClient.execute(this.userAddr, lotteryAddr, { buy_tickets: { draw_id: drawId, tickets } }, 'auto', undefined, [
      coin(amount, ticketPrice.denom)
    ]);
  }
}
