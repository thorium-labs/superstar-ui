export interface Winner {
  id: string;
  drawId: string;
  winner: string;
  prize: string;
}

export interface Purchase {
  id: string;
  drawId: string;
  tickets: number;
  buyer: string;
}
