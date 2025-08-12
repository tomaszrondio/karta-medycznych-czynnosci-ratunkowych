import React, { useState } from 'react';
import './Skora.css';
import { FormCheckbox } from '../ui';

const Skora: React.FC = () => {
  // Wyglad subsection - radio-button behavior (only one can be selected)
  const [wygladSelection, setWygladSelection] = useState<string | null>(null);
  
  // Wilgotnosc subsection - radio-button behavior (only one can be selected)
  const [wilgotnoscSelection, setWilgotnoscSelection] = useState<string | null>(null);
  
  // Temperatura subsection - radio-button behavior (only one can be selected)
  const [temperaturaSelection, setTemperaturaSelection] = useState<string | null>(null);

  const handleWygladSelectionChange = (selection: string) => {
    setWygladSelection(wygladSelection === selection ? null : selection);
  };

  const handleWilgotnoscSelectionChange = (selection: string) => {
    setWilgotnoscSelection(wilgotnoscSelection === selection ? null : selection);
  };

  const handleTemperaturaSelectionChange = (selection: string) => {
    setTemperaturaSelection(temperaturaSelection === selection ? null : selection);
  };

  return (
    <div className="skora-container">
      {/* Wyglad subsection */}
      <div className="wyglad-section">
        <FormCheckbox
          className={`wyglad-w-normie ${wygladSelection !== null ? 'row-selected' : ''}`}
          checked={wygladSelection === 'w-normie'}
          onChange={() => handleWygladSelectionChange('w-normie')}
        />
        <FormCheckbox
          className={`wyglad-blada ${wygladSelection !== null ? 'row-selected' : ''}`}
          checked={wygladSelection === 'blada'}
          onChange={() => handleWygladSelectionChange('blada')}
        />
        <FormCheckbox
          className={`wyglad-rumien ${wygladSelection !== null ? 'row-selected' : ''}`}
          checked={wygladSelection === 'rumien'}
          onChange={() => handleWygladSelectionChange('rumien')}
        />
        <FormCheckbox
          className={`wyglad-zazolcenie ${wygladSelection !== null ? 'row-selected' : ''}`}
          checked={wygladSelection === 'zazolcenie'}
          onChange={() => handleWygladSelectionChange('zazolcenie')}
        />
        <FormCheckbox
          className={`wyglad-sinica-obw ${wygladSelection !== null ? 'row-selected' : ''}`}
          checked={wygladSelection === 'sinica-obw'}
          onChange={() => handleWygladSelectionChange('sinica-obw')}
        />
        <FormCheckbox
          className={`wyglad-sinica-centr ${wygladSelection !== null ? 'row-selected' : ''}`}
          checked={wygladSelection === 'sinica-centr'}
          onChange={() => handleWygladSelectionChange('sinica-centr')}
        />
      </div>

      {/* Wilgotnosc subsection */}
      <div className="wilgotnosc-section">
        <FormCheckbox
          className={`wilgotnosc-w-normie ${wilgotnoscSelection !== null ? 'row-selected' : ''}`}
          checked={wilgotnoscSelection === 'w-normie'}
          onChange={() => handleWilgotnoscSelectionChange('w-normie')}
        />
        <FormCheckbox
          className={`wilgotnosc-wilgotna ${wilgotnoscSelection !== null ? 'row-selected' : ''}`}
          checked={wilgotnoscSelection === 'wilgotna'}
          onChange={() => handleWilgotnoscSelectionChange('wilgotna')}
        />
        <FormCheckbox
          className={`wilgotnosc-sucha ${wilgotnoscSelection !== null ? 'row-selected' : ''}`}
          checked={wilgotnoscSelection === 'sucha'}
          onChange={() => handleWilgotnoscSelectionChange('sucha')}
        />
      </div>

      {/* Temperatura subsection */}
      <div className="temperatura-section">
        <FormCheckbox
          className={`temperatura-w-normie ${temperaturaSelection !== null ? 'row-selected' : ''}`}
          checked={temperaturaSelection === 'w-normie'}
          onChange={() => handleTemperaturaSelectionChange('w-normie')}
        />
        <FormCheckbox
          className={`temperatura-chlodna ${temperaturaSelection !== null ? 'row-selected' : ''}`}
          checked={temperaturaSelection === 'chlodna'}
          onChange={() => handleTemperaturaSelectionChange('chlodna')}
        />
        <FormCheckbox
          className={`temperatura-ciepla ${temperaturaSelection !== null ? 'row-selected' : ''}`}
          checked={temperaturaSelection === 'ciepla'}
          onChange={() => handleTemperaturaSelectionChange('ciepla')}
        />
      </div>
    </div>
  );
};

export default Skora;