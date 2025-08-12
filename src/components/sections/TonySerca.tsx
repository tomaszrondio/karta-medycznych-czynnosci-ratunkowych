import React, { useState } from 'react';
import './TonySerca.css';
import { FormCheckbox, FormTextarea } from '../ui';

const TonySerca: React.FC = () => {
  // Radio-button behavior (only one can be selected)
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelectionChange = (selectedOption: string) => {
    setSelection(selection === selectedOption ? null : selectedOption);
  };

  return (
    <div className="tony-serca-container">
      <FormCheckbox
        className={`tony-czyste ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'czyste'}
        onChange={() => handleSelectionChange('czyste')}
      />
      
      <FormCheckbox
        className={`tony-arytmia ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'stlumione'}
        onChange={() => handleSelectionChange('stlumione')}
      />
      <FormCheckbox
        className={`tony-inne ${selection !== null ? 'row-selected' : ''}`}
        checked={selection === 'inne'}
        onChange={() => handleSelectionChange('inne')}
      />
      
      {/* Textarea to the left of checkboxes */}
      <FormTextarea
        className={`tony-serca-textarea ${
          selection !== null && selection !== 'inne' ? 'hide-border' : 
          selection === 'inne' ? 'inne-selected' : ''
        }`}
        placeholder=""
      />
    </div>
  );
};

export default TonySerca;