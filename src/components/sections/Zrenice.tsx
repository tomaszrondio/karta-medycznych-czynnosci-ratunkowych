import React, { useState } from 'react';
import './Zrenice.css';
import { FormCheckbox } from '../ui';

const Zrenice: React.FC = () => {
  // First subsection - Reakcja na światło (3 options each for L and P)
  const [reakcjaLSelection, setReakcjaLSelection] = useState<string | null>(null);
  const [reakcjaPSelection, setReakcjaPSelection] = useState<string | null>(null);

  // Second subsection - Szerokość (3 options each for L and P) 
  const [szerokoscLSelection, setSzerokoscLSelection] = useState<string | null>(null);
  const [szerokoscPSelection, setSzerokoscPSelection] = useState<string | null>(null);

  // Handlers for first subsection (Reakcja na światło)
  const handleReakcjaLSelectionChange = (selection: string) => {
    setReakcjaLSelection(reakcjaLSelection === selection ? null : selection);
  };

  const handleReakcjaPSelectionChange = (selection: string) => {
    setReakcjaPSelection(reakcjaPSelection === selection ? null : selection);
  };

  // Handlers for second subsection (Szerokość)
  const handleSzerokoscLSelectionChange = (selection: string) => {
    setSzerokoscLSelection(szerokoscLSelection === selection ? null : selection);
  };

  const handleSzerokoscPSelectionChange = (selection: string) => {
    setSzerokoscPSelection(szerokoscPSelection === selection ? null : selection);
  };

  return (
    <div className="zrenice-container">
      {/* First subsection - Reakcja na światło */}
      <div className="zrenice-subsection reakcja-section">
        {/* L column */}
        <FormCheckbox
          className={`reakcja-prawidlowa-l ${reakcjaLSelection !== null ? 'row-selected' : ''}`}
          checked={reakcjaLSelection === 'prawidlowa'}
          onChange={() => handleReakcjaLSelectionChange('prawidlowa')}
        />
        <FormCheckbox
          className={`reakcja-powolna-l ${reakcjaLSelection !== null ? 'row-selected' : ''}`}
          checked={reakcjaLSelection === 'powolna'}
          onChange={() => handleReakcjaLSelectionChange('powolna')}
        />
        <FormCheckbox
          className={`reakcja-brak-l ${reakcjaLSelection !== null ? 'row-selected' : ''}`}
          checked={reakcjaLSelection === 'brak'}
          onChange={() => handleReakcjaLSelectionChange('brak')}
        />

        {/* P column */}
        <FormCheckbox
          className={`reakcja-prawidlowa-p ${reakcjaPSelection !== null ? 'row-selected' : ''}`}
          checked={reakcjaPSelection === 'prawidlowa'}
          onChange={() => handleReakcjaPSelectionChange('prawidlowa')}
        />
        <FormCheckbox
          className={`reakcja-powolna-p ${reakcjaPSelection !== null ? 'row-selected' : ''}`}
          checked={reakcjaPSelection === 'powolna'}
          onChange={() => handleReakcjaPSelectionChange('powolna')}
        />
        <FormCheckbox
          className={`reakcja-brak-p ${reakcjaPSelection !== null ? 'row-selected' : ''}`}
          checked={reakcjaPSelection === 'brak'}
          onChange={() => handleReakcjaPSelectionChange('brak')}
        />
      </div>

      {/* Second subsection - Szerokość */}
      <div className="zrenice-subsection szerokosc-section">
        {/* L column */}
        <FormCheckbox
          className={`szerokosc-normalna-l ${szerokoscLSelection !== null ? 'row-selected' : ''}`}
          checked={szerokoscLSelection === 'normalna'}
          onChange={() => handleSzerokoscLSelectionChange('normalna')}
        />
        <FormCheckbox
          className={`szerokosc-waska-l ${szerokoscLSelection !== null ? 'row-selected' : ''}`}
          checked={szerokoscLSelection === 'waska'}
          onChange={() => handleSzerokoscLSelectionChange('waska')}
        />
        <FormCheckbox
          className={`szerokosc-szeroka-l ${szerokoscLSelection !== null ? 'row-selected' : ''}`}
          checked={szerokoscLSelection === 'szeroka'}
          onChange={() => handleSzerokoscLSelectionChange('szeroka')}
        />

        {/* P column */}
        <FormCheckbox
          className={`szerokosc-normalna-p ${szerokoscPSelection !== null ? 'row-selected' : ''}`}
          checked={szerokoscPSelection === 'normalna'}
          onChange={() => handleSzerokoscPSelectionChange('normalna')}
        />
        <FormCheckbox
          className={`szerokosc-waska-p ${szerokoscPSelection !== null ? 'row-selected' : ''}`}
          checked={szerokoscPSelection === 'waska'}
          onChange={() => handleSzerokoscPSelectionChange('waska')}
        />
        <FormCheckbox
          className={`szerokosc-szeroka-p ${szerokoscPSelection !== null ? 'row-selected' : ''}`}
          checked={szerokoscPSelection === 'szeroka'}
          onChange={() => handleSzerokoscPSelectionChange('szeroka')}
        />
      </div>
    </div>
  );
};

export default Zrenice;