import React, { useState } from 'react';
import './Inne.css';
import { FormCheckbox } from '../ui';

const Inne: React.FC = () => {
  // First row: Coaza (T/N checkboxes)
  const [coaza, setCoaza] = useState<boolean | null>(null);
  
  // Second row: Only T checkbox
  const [inne2, setInne2] = useState<boolean>(false);
  
  // Third row: Only T checkbox
  const [inne3, setInne3] = useState<boolean>(false);

  const handleCoazaChange = (value: boolean) => {
    setCoaza(coaza === value ? null : value);
  };

  const handleInne2Change = () => {
    setInne2(!inne2);
  };

  const handleInne3Change = () => {
    setInne3(!inne3);
  };

  return (
    <div className="inne-container">
      {/* Row 1: Coaza - T/N */}
      <div className="tn-row coaza-row">
        <FormCheckbox
          className={`coaza-t ${coaza !== null ? 'row-selected' : ''}`}
          checked={coaza === true}
          onChange={() => handleCoazaChange(true)}
        />
        <FormCheckbox
          className={`coaza-n ${coaza !== null ? 'row-selected' : ''}`}
          checked={coaza === false}
          onChange={() => handleCoazaChange(false)}
        />
      </div>

      {/* Row 2: Only T checkbox */}
      <div className="tn-row inne2-row">
        <FormCheckbox
          className={`inne2-t ${inne2 ? 'row-selected' : ''}`}
          checked={inne2}
          onChange={handleInne2Change}
        />
      </div>

      {/* Row 3: Only T checkbox */}
      <div className="tn-row inne3-row">
        <FormCheckbox
          className={`inne3-t ${inne3 ? 'row-selected' : ''}`}
          checked={inne3}
          onChange={handleInne3Change}
        />
      </div>
    </div>
  );
};

export default Inne;