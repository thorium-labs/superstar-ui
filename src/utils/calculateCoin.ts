export const amountToNormal = (amount: number | string): number => {
  return Number(amount) / 1e6;
};

export const amountToClumsy = (amount: number | string) => {
  return Math.ceil(Number(amount) * 1e6);
};
