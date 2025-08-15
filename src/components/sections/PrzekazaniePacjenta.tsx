import React, { useState } from 'react';
import './PrzekazaniePacjenta.css';
import { FormTextarea } from '../ui';

const PrzekazaniePacjenta: React.FC = () => {
  const [ipsorSelection, setIpsorSelection] = useState<string | null>(null);

  const handleIpsorSelectionChange = (selectedOption: string) => {
    setIpsorSelection(ipsorSelection === selectedOption ? null : selectedOption);
  };

  return (
    <div className="przekazanie-pacjenta-container">
      {/* IP/SOR / innym choice */}
      <div className="ipsor-choice">
        <span 
          className={`ipsor-text ${ipsorSelection === 'ipsor' ? 'selected' : ipsorSelection === 'innym' ? 'strikethrough' : ''}`}
          onClick={() => handleIpsorSelectionChange('ipsor')}
        >
          IP/SOR
        </span>
        
        <span className="slash-text"> / </span>
        
        <span 
          className={`innym-text ${ipsorSelection === 'innym' ? 'selected' : ipsorSelection === 'ipsor' ? 'strikethrough' : ''}`}
          onClick={() => handleIpsorSelectionChange('innym')}
        >
          innym:
        </span>
      </div>

      {/* First row - Przekazanie pacjenta w IP/SOR / innym */}
      {/* data */}
      <FormTextarea
        className="data1-input"
        isRequired={false}
      />
      
      {/* godz */}
      <FormTextarea
        className="godz1-input"
        isRequired={false}
      />
      
      {/* min */}
      <FormTextarea
        className="min1-input"
        isRequired={false}
      />

      {/* Second row - Stwierdzenie zgonu / odstąpienie od med. czynności rat. */}
      {/* data */}
      <FormTextarea
        className="data2-input"
        isRequired={false}
      />
      
      {/* godz */}
      <FormTextarea
        className="godz2-input"
        isRequired={false}
      />
      
      {/* min */}
      <FormTextarea
        className="min2-input"
        isRequired={false}
      />
    </div>
  );
};

export default PrzekazaniePacjenta;