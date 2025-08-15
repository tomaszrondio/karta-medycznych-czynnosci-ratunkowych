import React, { useState } from 'react';
import './IPSORChoice.css';

const IPSORChoice: React.FC = () => {
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelectionChange = (selectedOption: string) => {
    setSelection(selection === selectedOption ? null : selectedOption);
  };

  return (
    <div className="ipsor-choice-container">
      <span 
        className={`ipsor-text ${selection === 'ipsor' ? 'selected' : selection === 'innym' ? 'strikethrough' : ''}`}
        onClick={() => handleSelectionChange('ipsor')}
      >
        IP/SOR
      </span>
      
      <span className="slash-text"> / </span>
      
      <span 
        className={`innym-text ${selection === 'innym' ? 'selected' : selection === 'ipsor' ? 'strikethrough' : ''}`}
        onClick={() => handleSelectionChange('innym')}
      >
        innym:
      </span>
    </div>
  );
};

export default IPSORChoice;