import React from 'react';
import NumberInput from './NumberInput';
import './LargeNumberInput.css';

interface LargeNumberInputProps {
  className: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  isRequired?: boolean;
}

const LargeNumberInput: React.FC<LargeNumberInputProps> = ({ 
  className, 
  value, 
  onChange, 
  maxLength = 2, 
  isRequired = true 
}) => {
  return (
    <NumberInput
      className={className}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      isRequired={isRequired}
      inputClassName="large-number-input"
    />
  );
};

export default LargeNumberInput;