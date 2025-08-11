import React, { useState } from 'react';
import './CisnienieTetnicze.css';
import NumberInput from '../ui/NumberInput';

const CisnienieTetnicze: React.FC = () => {
  // Two number inputs - 3 digits max each
  const [pierwszeOdczyt, setPierwszeOdczyt] = useState('');
  const [drugieOdczyt, setDrugieOdczyt] = useState('');

  return (
    <div className="cisnienie-tetnicze-container">
      {/* First blood pressure reading */}
      <div className="cisnienie-reading">
        <NumberInput
          className="cisnienie-input-1"
          value={pierwszeOdczyt}
          onChange={setPierwszeOdczyt}
          maxLength={3}
        />
      </div>

      {/* Second blood pressure reading */}
      <div className="cisnienie-reading">
        <NumberInput
          className="cisnienie-input-2"
          value={drugieOdczyt}
          onChange={setDrugieOdczyt}
          maxLength={3}
        />
      </div>
    </div>
  );
};

export default CisnienieTetnicze;