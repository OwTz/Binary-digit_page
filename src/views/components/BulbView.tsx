import React from 'react';
import { Bit } from '../../models/ByteModel';

interface BulbViewProps {
  state: Bit;
  index: number;
  onToggle: (index: number) => void;
}

export const BulbView: React.FC<BulbViewProps> = ({ state, index, onToggle }) => {
  const isOn = state === 1;

  const handleClick = () => {
    onToggle(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(index);
    }
  };

  return (
    <button
      type="button"
      className={`bulb-button ${isOn ? 'bulb-on' : 'bulb-off'}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Bit ${7 - index}, estado: ${isOn ? 'ligado' : 'desligado'}`}
      aria-pressed={isOn}
    >
      <svg
        viewBox="0 0 100 130"
        className="bulb-svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id={`bulbGlow-${index}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fff8db" stopOpacity="1" />
            <stop offset="60%" stopColor="#ffb703" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fb8500" stopOpacity="0.9" />
          </radialGradient>
          <filter id={`glowFilter-${index}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Cúpula de vidro da lâmpada */}
        <path
          className="bulb-glass"
          d="M 50 15 
             C 28 15, 18 35, 22 55 
             C 25 68, 35 78, 38 90 
             L 62 90 
             C 65 78, 75 68, 78 55 
             C 82 35, 72 15, 50 15 Z"
          fill={isOn ? `url(#bulbGlow-${index})` : '#2b2d42'}
          stroke={isOn ? '#ffea00' : '#4a4e69'}
          strokeWidth="3.5"
          filter={isOn ? `url(#glowFilter-${index})` : undefined}
        />

        {/* Filamento interno */}
        <path
          className="bulb-filament"
          d="M 42 75 L 45 48 L 50 54 L 55 48 L 58 75"
          fill="none"
          stroke={isOn ? '#ffffff' : '#6c757d'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Base metálica / Rosca */}
        <path
          className="bulb-socket"
          d="M 38 92 L 62 92
             M 39 99 L 61 99
             M 41 106 L 59 106"
          fill="none"
          stroke="#8d99ae"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Contato elétrico inferior */}
        <ellipse
          cx="50"
          cy="112"
          rx="6"
          ry="3"
          fill="#6c757d"
        />
      </svg>
    </button>
  );
};
