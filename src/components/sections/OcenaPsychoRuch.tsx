import React, { useState } from 'react';
import './OcenaPsychoRuch.css';
import { FormCheckbox } from '../ui';

const OcenaPsychoRuch: React.FC = () => {
  // Radio-button behavior (only one can be selected)
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelectionChange = (selectedOption: string) => {
    setSelection(selection === selectedOption ? null : selectedOption);
  };

  return (
    <div className="ocena-psycho-ruch-container">
      <FormCheckbox
        className={`ocena-w-normie ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'w-normie'}
        onChange={() => handleSelectionChange('w-normie')}
      />
      <FormCheckbox
        className={`ocena-spowolnialy ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'spowolnialy'}
        onChange={() => handleSelectionChange('spowolnialy')}
      />
      <FormCheckbox
        className={`ocena-pobudzony ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'pobudzony'}
        onChange={() => handleSelectionChange('pobudzony')}
      />
      <FormCheckbox
        className={`ocena-agresywny ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'agresywny'}
        onChange={() => handleSelectionChange('agresywny')}
      />
    </div>
  );
};

export default OcenaPsychoRuch;