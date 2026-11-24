export type Bit = 0 | 1;

export type ByteState = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

export const BIT_WEIGHTS: readonly [number, number, number, number, number, number, number, number] = [
  128, 64, 32, 16, 8, 4, 2, 1
] as const;

export const INITIAL_BYTE: ByteState = [0, 0, 0, 0, 0, 0, 0, 0];

export const BYTE_RANGE = {
  min: 0,
  max: 255
} as const;

export function calculateDecimal(bits: ByteState): number {
  let total = 0;
  for (let i = 0; i < bits.length; i++) {
    total += bits[i] * BIT_WEIGHTS[i];
  }
  return total;
}

export function toggleBitAtIndex(bits: ByteState, index: number): ByteState {
  if (index < 0 || index > 7) return bits;
  const newBits = [...bits] as ByteState;
  newBits[index] = newBits[index] === 0 ? 1 : 0;
  return newBits;
}
