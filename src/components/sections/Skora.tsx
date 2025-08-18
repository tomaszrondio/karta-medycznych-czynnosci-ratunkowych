import React, { useState } from 'react';
import './Skora.css';
import { FormCheckbox } from '../ui';

const Skora: React.FC = () => {
  // Wyglad subsection - independent checkboxes (multiple can be selected)
  const [wygladWNormie, setWygladWNormie] = useState<boolean>(false);
  const [wygladBlada, setWygladBlada] = useState<boolean>(false);
  const [wygladRumien, setWygladRumien] = useState<boolean>(false);
  const [wygladZazolcenie, setWygladZazolcenie] = useState<boolean>(false);
  const [wygladSinicaObw, setWygladSinicaObw] = useState<boolean>(false);
  const [wygladSinicaCentr, setWygladSinicaCentr] = useState<boolean>(false);
  
  // Wilgotnosc subsection - radio-button behavior (only one can be selected)
  const [wilgotnoscSelection, setWilgotnoscSelection] = useState<string | null>(null);
  
  // Temperatura subsection - radio-button behavior (only one can be selected)
  const [temperaturaSelection, setTemperaturaSelection] = useState<string | null>(null);

  const handleWilgotnoscSelectionChange = (selection: string) => {
    setWilgotnoscSelection(wilgotnoscSelection === selection ? null : selection);
  };

  const handleTemperaturaSelectionChange = (selection: string) => {
    setTemperaturaSelection(temperaturaSelection === selection ? null : selection);
  };

  return (
    <div className="skora-container">
      {/* Wyglad subsection - independent checkboxes */}
      <div className="wyglad-section">
        <FormCheckbox
          className="wyglad-w-normie"
          checked={wygladWNormie}
          onChange={() => setWygladWNormie(!wygladWNormie)}
        />
        <FormCheckbox
          className="wyglad-blada"
          checked={wygladBlada}
          onChange={() => setWygladBlada(!wygladBlada)}
        />
        <FormCheckbox
          className="wyglad-rumien"
          checked={wygladRumien}
          onChange={() => setWygladRumien(!wygladRumien)}
        />
        <FormCheckbox
          className="wyglad-zazolcenie"
          checked={wygladZazolcenie}
          onChange={() => setWygladZazolcenie(!wygladZazolcenie)}
        />
        <FormCheckbox
          className="wyglad-sinica-obw"
          checked={wygladSinicaObw}
          onChange={() => setWygladSinicaObw(!wygladSinicaObw)}
        />
        <FormCheckbox
          className="wyglad-sinica-centr"
          checked={wygladSinicaCentr}
          onChange={() => setWygladSinicaCentr(!wygladSinicaCentr)}
        />
      </div>

      {/* Wilgotnosc subsection - radio button behavior */}
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

      {/* Temperatura subsection - radio button behavior */}
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