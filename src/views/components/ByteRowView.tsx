import React from 'react';
import { ByteState } from '../../models/ByteModel';
import { BulbView } from './BulbView';

interface ByteRowViewProps {
  bits: ByteState;
  onToggleBit: (index: number) => void;
}

export const ByteRowView: React.FC<ByteRowViewProps> = ({ bits, onToggleBit }) => {
  return (
    <div
      className="byte-row"
      role="group"
      aria-label="8 lâmpadas representando 1 byte de memória"
    >
      {bits.map((bit, index) => (
        <BulbView
          key={index}
          state={bit}
          index={index}
          onToggle={onToggleBit}
        />
      ))}
    </div>
  );
};
