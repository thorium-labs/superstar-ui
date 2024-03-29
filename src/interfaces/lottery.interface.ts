export type Duration =
  | {
      height: number;
    }
  | {
      time: number;
    };
export type Uint128 = string;
export interface InstantiateMsg {
  draw_interval: Duration;
  max_tickets_per_user: number;
  nois_proxy: string;
  percentage_per_match: [number, number, number, number, number, number];
  ticket_price: Coin;
  treasury_fee: number;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg =
  | {
      buy_ticket: {
        draw_id: number;
        tickets: string[];
      };
    }
  | {
      claim_prize: {
        draw_id: number;
      };
    }
  | {
      execute_draw: {
        id: number;
      };
    }
  | {
      receive: {
        callback: NoisCallback;
      };
    }
  | {
      update_config: {
        new_config: UpdateConfigMsg;
      };
    };
export type HexBinary = string;
export interface NoisCallback {
  job_id: string;
  randomness: HexBinary;
}
export interface UpdateConfigMsg {
  interval?: Duration | null;
  max_tickets_per_user?: number | null;
  nois_proxy?: string | null;
  percentage_per_match?:
    | [number, number, number, number, number, number]
    | null;
  ticket_price?: Coin | null;
  treasury_fee?: number | null;
}
export type QueryMsg =
  | {
      get_draw: {
        id: number;
      };
    }
  | {
      get_current_draw: {};
    }
  | {
      check_winner: {
        addr: string;
        draw_id: number;
      };
    }
  | {
      get_tickets: {
        addr: string;
        draw_id: number;
      };
    }
  | {
      get_config: {};
    };
export type ArrayOfTicketResult = TicketResult[];
export interface TicketResult {
  matches: number;
  ticket_number: string;
}
export type Addr = string;
export type CanonicalAddr = Binary;
export type Binary = string;
export interface Config {
  interval: Duration;
  max_tickets_per_user: number;
  nois_proxy: Addr;
  owner: CanonicalAddr;
  percentage_per_match: [number, number, number, number, number, number];
  ticket_price: Coin;
  treasury_fee: number;
}
export type Expiration =
  | {
      at_height: number;
    }
  | {
      at_time: Timestamp;
    }
  | {
      never: {};
    };
export type Timestamp = Uint64;
export type Uint64 = string;
export type Status = "open" | "pending" | "claimable";
export interface Draw {
  end_time: Expiration;
  id: number;
  prize_per_match?:
    | [Uint128, Uint128, Uint128, Uint128, Uint128, Uint128]
    | null;
  status: Status;
  ticket_price: Coin;
  total_prize: Coin;
  total_tickets: number;
  winner_number?: string | null;
  winners_per_match?: [number, number, number, number, number, number] | null;
}
export type NullableDraw = Draw | null;
export type ArrayOfString = string[];
