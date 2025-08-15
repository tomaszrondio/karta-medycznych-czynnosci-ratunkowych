import React, { useState } from 'react';
import './ObrazeniaCentrum.css';
import { FormCheckbox } from '../ui';

const ObrazeniaCentrum: React.FC = () => {
  // Left column checkboxes
  const [checkbox1, setCheckbox1] = useState<boolean>(false);
  const [checkbox2, setCheckbox2] = useState<boolean>(false);
  const [checkbox3, setCheckbox3] = useState<boolean>(false);

  // Right column checkboxes
  const [checkbox4, setCheckbox4] = useState<boolean>(false);
  const [checkbox5, setCheckbox5] = useState<boolean>(false);
  const [checkbox6, setCheckbox6] = useState<boolean>(false);

  return (
    <div className="obrazenia-centrum-container">
      {/* Left column */}
      <FormCheckbox
        className={`obrazenia-checkbox1 ${checkbox1 ? 'row-selected' : ''}`}
        checked={checkbox1}
        onChange={() => setCheckbox1(!checkbox1)}
        isRequired={false}
      />
      
      <FormCheckbox
        className={`obrazenia-checkbox2 ${checkbox2 ? 'row-selected' : ''}`}
        checked={checkbox2}
        onChange={() => setCheckbox2(!checkbox2)}
        isRequired={false}
      />
      
      <FormCheckbox
        className={`obrazenia-checkbox3 ${checkbox3 ? 'row-selected' : ''}`}
        checked={checkbox3}
        onChange={() => setCheckbox3(!checkbox3)}
        isRequired={false}
      />

      {/* Right column */}
      <FormCheckbox
        className={`obrazenia-checkbox4 ${checkbox4 ? 'row-selected' : ''}`}
        checked={checkbox4}
        onChange={() => setCheckbox4(!checkbox4)}
        isRequired={false}
      />
      
      <FormCheckbox
        className={`obrazenia-checkbox5 ${checkbox5 ? 'row-selected' : ''}`}
        checked={checkbox5}
        onChange={() => setCheckbox5(!checkbox5)}
        isRequired={false}
      />
      
      <FormCheckbox
        className={`obrazenia-checkbox6 ${checkbox6 ? 'row-selected' : ''}`}
        checked={checkbox6}
        onChange={() => setCheckbox6(!checkbox6)}
        isRequired={false}
      />
    </div>
  );
};

export default ObrazeniaCentrum;