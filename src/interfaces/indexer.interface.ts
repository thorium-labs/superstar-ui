export interface Winner {
  id: string;
  drawId: string;
  prize: string;
}

export interface Purchase {
  id: string;
  drawId: string;
  tickets: number;
  buyer: string;
}
