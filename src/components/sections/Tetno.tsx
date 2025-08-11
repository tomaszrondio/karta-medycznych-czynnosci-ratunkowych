import React, { useState } from 'react';
import './Tetno.css';
import { FormCheckbox } from '../ui';
import NumberInput from '../ui/NumberInput';

const Tetno: React.FC = () => {
  // Pulse rate number input (3 digits max for values like 120 bpm)
  const [tetnoValue, setTetnoValue] = useState('');
  
  // Radio group for miarowe/niemiarowe (regular/irregular)
  const [rytmSelection, setRytmSelection] = useState<string | null>(null);

  const handleRytmSelectionChange = (selection: string) => {
    setRytmSelection(rytmSelection === selection ? null : selection);
  };

  return (
    <div className="tetno-container">
      {/* Pulse rate number input */}
      <NumberInput
        className="tetno-input"
        inputClassName="tetno-normal-spacing"
        value={tetnoValue}
        onChange={setTetnoValue}
        maxLength={3}
      />

      {/* Rhythm checkboxes - radio group behavior */}
      <div className="rytm-section">
        <FormCheckbox
          className={`rytm-miarowe ${rytmSelection !== null ? 'row-selected' : ''}`}
          checked={rytmSelection === 'miarowe'}
          onChange={() => handleRytmSelectionChange('miarowe')}
        />
        <FormCheckbox
          className={`rytm-niemiarowe ${rytmSelection !== null ? 'row-selected' : ''}`}
          checked={rytmSelection === 'niemiarowe'}
          onChange={() => handleRytmSelectionChange('niemiarowe')}
        />
      </div>
    </div>
  );
};

export default Tetno;