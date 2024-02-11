export function IntlAddress(address: string, size: number = 8): string {
  return address.slice(0, size * 2).concat('...') + address.substring(address.length - size);
}
