import { useState, useCallback, useMemo } from 'react';
import {
  ByteState,
  INITIAL_BYTE,
  BYTE_RANGE,
  calculateDecimal,
  toggleBitAtIndex
} from '../models/ByteModel';

export function useByteController(initialState: ByteState = INITIAL_BYTE) {
  const [bits, setBits] = useState<ByteState>(initialState);

  const decimalValue = useMemo(() => calculateDecimal(bits), [bits]);

  const handleToggleBit = useCallback((index: number) => {
    setBits((prevBits) => toggleBitAtIndex(prevBits, index));
  }, []);

  return {
    bits,
    decimalValue,
    range: BYTE_RANGE,
    handleToggleBit
  };
}
