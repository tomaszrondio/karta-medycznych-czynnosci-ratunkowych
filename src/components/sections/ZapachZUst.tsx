import React, { useState } from 'react';
import './ZapachZUst.css';
import { FormCheckbox, FormTextarea } from '../ui';

const ZapachZUst: React.FC = () => {
  // Independent checkboxes
  const [brakZapachu, setBrakZapachu] = useState<boolean>(false);
  const [alkohol, setAlkohol] = useState<boolean>(false);
  const [inne, setInne] = useState<boolean>(false);

  return (
    <div className="zapach-z-ust-container">
      <FormCheckbox
        className={`zapach-brak ${brakZapachu ? 'row-selected' : ''}`}
        checked={brakZapachu}
        onChange={() => setBrakZapachu(!brakZapachu)}
      />
      <FormCheckbox
        className={`zapach-alkohol ${alkohol ? 'row-selected' : ''}`}
        checked={alkohol}
        onChange={() => setAlkohol(!alkohol)}
      />
      <FormCheckbox
        className={`zapach-inne ${inne ? 'row-selected' : ''}`}
        checked={inne}
        onChange={() => setInne(!inne)}
      />

      {/* Textarea for inne */}
      <FormTextarea
        className={`zapach-textarea ${
          inne ? 'inne-selected' : 'hide-border'
        }`}
        placeholder=""
      />
    </div>
  );
};

export default ZapachZUst;