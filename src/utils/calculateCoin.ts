export const amountToNormal = (amount: number | string): string => {
  if (!amount) return '0';
  return (Number(amount) / 1e6).toFixed(2);
};

export const amountToClumsy = (amount: number | string) => {
  return Math.ceil(Number(amount) * 1e6);
};
