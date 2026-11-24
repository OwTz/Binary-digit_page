import React from 'react';

interface DecimalDisplayViewProps {
  value: number;
  min: number;
  max: number;
}

export const DecimalDisplayView: React.FC<DecimalDisplayViewProps> = ({
  value,
  min,
  max
}) => {
  return (
    <div className="decimal-container">
      <div
        className="decimal-value"
        aria-live="polite"
        aria-label={`Valor decimal: ${value}`}
      >
        {value}
      </div>
      <div
        className="decimal-range"
        aria-label={`Intervalo de ${min} a ${max}`}
      >
        ({min} a {max})
      </div>
    </div>
  );
};
