import {BigNumber} from 'ethers';

export function flipBit(index: number, num: BigNumber): BigNumber {
  const mask = BigNumber.from(1).shl(index & 0xff);
  return num.xor(mask);
}

export function getBit(index: number, num: BigNumber): boolean {
  const mask = BigNumber.from(1).shl(index & 0xff);
  // test if the bit is set
  return !num.and(mask).eq(0);
}
