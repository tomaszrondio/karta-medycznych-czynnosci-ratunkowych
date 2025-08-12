import React, { useState } from 'react';
import './NiedowladPorazenie.css';
import { FormCheckbox } from '../ui';

const NiedowladPorazenie: React.FC = () => {
  // Single checkbox at top
  const [wNormie, setWNormie] = useState<boolean>(false);
  
  // L/P checkboxes - independent checkboxes
  const [lRow1, setLRow1] = useState<boolean>(false);
  const [pRow1, setPRow1] = useState<boolean>(false);
  const [lRow2, setLRow2] = useState<boolean>(false);
  const [pRow2, setPRow2] = useState<boolean>(false);

  return (
    <div className="niedowlad-porazenie-container">
      {/* Single checkbox at top */}
      <FormCheckbox
        className={`niedowlad-w-normie ${wNormie ? 'row-selected' : ''}`}
        checked={wNormie}
        onChange={() => setWNormie(!wNormie)}
      />

      {/* L/P checkboxes - Row 1 */}
      <FormCheckbox
        className={`niedowlad-row1-l ${lRow1 ? 'row-selected' : ''}`}
        checked={lRow1}
        onChange={() => setLRow1(!lRow1)}
      />
      <FormCheckbox
        className={`niedowlad-row1-p ${pRow1 ? 'row-selected' : ''}`}
        checked={pRow1}
        onChange={() => setPRow1(!pRow1)}
      />

      {/* L/P checkboxes - Row 2 */}
      <FormCheckbox
        className={`niedowlad-row2-l ${lRow2 ? 'row-selected' : ''}`}
        checked={lRow2}
        onChange={() => setLRow2(!lRow2)}
      />
      <FormCheckbox
        className={`niedowlad-row2-p ${pRow2 ? 'row-selected' : ''}`}
        checked={pRow2}
        onChange={() => setPRow2(!pRow2)}
      />

    </div>
  );
};

export default NiedowladPorazenie;