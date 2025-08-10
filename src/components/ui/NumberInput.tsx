import React from 'react';
import './NumberInput.css';

interface NumberInputProps {
  className: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ className, value, onChange, maxLength = 2 }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    if (newValue.length <= maxLength) {
      onChange(newValue);
    }
  };

  return (
    <div className={`number-input-container ${className}`}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={`number-input ${value ? 'filled' : ''}`}
        maxLength={maxLength}
      />
    </div>
  );
};

export default NumberInput;