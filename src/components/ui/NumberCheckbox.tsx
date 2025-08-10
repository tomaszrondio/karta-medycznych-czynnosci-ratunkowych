import React from 'react';
import './NumberCheckbox.css';

interface NumberCheckboxProps {
  className: string;
  value: number;
  checked: boolean;
  onChange: () => void;
  sectionHasSelection?: boolean;
}

const NumberCheckbox: React.FC<NumberCheckboxProps> = ({ className, value, checked, onChange, sectionHasSelection = false }) => {
  return (
    <div className={`number-checkbox-container ${className}`}>
      <input 
        type="checkbox" 
        className={`number-checkbox ${checked ? 'checked' : ''}`}
        checked={checked}
        onChange={onChange}
        style={{ display: 'none' }} // Hide the actual checkbox
      />
      <div 
        className={`number-display ${checked ? 'selected' : ''} ${!sectionHasSelection ? 'section-empty' : ''}`}
        onClick={onChange}
      >
{checked ? value : (!sectionHasSelection ? value : '')}
      </div>
    </div>
  );
};

export default NumberCheckbox;