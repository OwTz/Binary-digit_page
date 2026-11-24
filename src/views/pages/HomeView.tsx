import React from 'react';
import { useByteController } from '../../controllers/useByteController';
import { ByteRowView } from '../components/ByteRowView';
import { DecimalDisplayView } from '../components/DecimalDisplayView';
import './HomeView.css';

export const HomeView: React.FC = () => {
  const { bits, decimalValue, range, handleToggleBit } = useByteController();

  return (
    <main className="home-container">
      <div className="home-content">
        <ByteRowView bits={bits} onToggleBit={handleToggleBit} />
        <DecimalDisplayView
          value={decimalValue}
          min={range.min}
          max={range.max}
        />
      </div>
    </main>
  );
};
