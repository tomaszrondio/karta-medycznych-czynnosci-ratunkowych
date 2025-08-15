import React, { useState } from 'react';
import './DecyzjaPodmiotu.css';
import { FormCheckbox, FormTextarea } from '../ui';

const DecyzjaPodmiotu: React.FC = () => {
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelectionChange = (selectedOption: string) => {
    setSelection(selection === selectedOption ? null : selectedOption);
  };

  return (
    <div className="decyzja-podmiotu-container">
      {/* Przyjęcie pacjenta checkbox */}
      <FormCheckbox
        className={`przyjecie-checkbox ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'przyjecie'}
        onChange={() => handleSelectionChange('przyjecie')}
        isRequired={false}
      />

      {/* Odmowa przyjęcia checkbox */}
      <FormCheckbox
        className={`odmowa-checkbox ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'odmowa'}
        onChange={() => handleSelectionChange('odmowa')}
        isRequired={false}
      />

      {/* Oznaczenie IP/SOR textarea */}
      <FormTextarea
        className="oznaczenie-ipsor-textarea"
        isRequired={false}
      />

      {/* Oznaczenie osoby przyjmującej textarea */}
      <FormTextarea
        className="oznaczenie-osoby-textarea"
        isRequired={false}
      />
    </div>
  );
};

export default DecyzjaPodmiotu;