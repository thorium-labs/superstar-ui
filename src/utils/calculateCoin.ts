export const amountToNormal = (amount: number | string): string => {
  return (Number(amount) / 1e6).toFixed(3);
};

export const amountToClumsy = (amount: number | string) => {
  return Math.ceil(Number(amount) * 1e6);
};
