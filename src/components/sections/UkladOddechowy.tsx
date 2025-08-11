import React, { useState, useRef, useEffect } from 'react';
import './UkladOddechowy.css';
import { FormCheckbox, FormTextarea } from '../ui';
import NumberInput from '../ui/NumberInput';

const UkladOddechowy: React.FC = () => {
  // Czestosc oddechow (respiratory rate) - two digits
  const [czestoscOddechow, setCzestoscOddechow] = useState('');

  // T/N (Tak/Nie) checkboxes - three rows
  const [regularny, setRegularny] = useState<boolean | null>(null);
  const [nieregularny, setNieregularny] = useState<boolean | null>(null);
  const [bezdech, setBezdech] = useState<boolean | null>(null);

  // L/P column-based selection (independent columns)
  const [lSelection, setLSelection] = useState<string | null>(null);
  const [pSelection, setPSelection] = useState<string | null>(null);
  const [inneText, setInneText] = useState('');
  const [fontSize, setFontSize] = useState(8);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Saturacja - two digits
  const [saturacja, setSaturacja] = useState('');

  const handleRegularnyChange = (value: boolean) => {
    setRegularny(regularny === value ? null : value);
  };

  const handleNieregularnyChange = (value: boolean) => {
    setNieregularny(nieregularny === value ? null : value);
  };

  const handleBezdechChange = (value: boolean) => {
    setBezdech(bezdech === value ? null : value);
  };

  const handleLSelectionChange = (selection: string) => {
    setLSelection(lSelection === selection ? null : selection);
  };

  const handlePSelectionChange = (selection: string) => {
    setPSelection(pSelection === selection ? null : selection);
  };

  const adjustFontSize = () => {
    const textarea = textareaRef.current;
    if (!textarea || !inneText.trim()) {
      setFontSize(8); // Use fixed 8px font size
      return;
    }

    // Use fixed 8px font size instead of dynamic sizing
    const fixedFontSize = 8;
    textarea.style.fontSize = `${fixedFontSize}px`;
    setFontSize(fixedFontSize);
  };

  useEffect(() => {
    adjustFontSize();
  }, [inneText]);

  return (
    <div className="uklad-oddechowy-container">
      {/* Czestosc oddechow - single two-digit input */}
      <div className="czestosc-oddechow">
        <NumberInput
          className="czestosc-input"
          value={czestoscOddechow}
          onChange={setCzestoscOddechow}
          maxLength={2}
        />
      </div>

      {/* T/N Checkboxes - three rows */}
      <div className="tn-section">
        {/* Regularny */}
        <div className="tn-row regularny-row">
          <FormCheckbox
            className={`regularny-t ${regularny !== null ? 'row-selected' : ''}`}
            checked={regularny === true}
            onChange={() => handleRegularnyChange(true)}
          />
          <FormCheckbox
            className={`regularny-n ${regularny !== null ? 'row-selected' : ''}`}
            checked={regularny === false}
            onChange={() => handleRegularnyChange(false)}
          />
        </div>

        {/* Nieregularny */}
        <div className="tn-row nieregularny-row">
          <FormCheckbox
            className={`nieregularny-t ${nieregularny !== null ? 'row-selected' : ''}`}
            checked={nieregularny === true}
            onChange={() => handleNieregularnyChange(true)}
          />
          <FormCheckbox
            className={`nieregularny-n ${nieregularny !== null ? 'row-selected' : ''}`}
            checked={nieregularny === false}
            onChange={() => handleNieregularnyChange(false)}
          />
        </div>

        {/* Bezdech */}
        <div className="tn-row bezdech-row">
          <FormCheckbox
            className={`bezdech-t ${bezdech !== null ? 'row-selected' : ''}`}
            checked={bezdech === true}
            onChange={() => handleBezdechChange(true)}
          />
          <FormCheckbox
            className={`bezdech-n ${bezdech !== null ? 'row-selected' : ''}`}
            checked={bezdech === false}
            onChange={() => handleBezdechChange(false)}
          />
        </div>
      </div>

      {/* L/P Section */}
      <div className="lp-section">
        {/* L column */}
        <FormCheckbox
          className={`lp-symetryczny-l ${lSelection !== null ? 'row-selected' : ''}`}
          checked={lSelection === 'symetryczny'}
          onChange={() => handleLSelectionChange('symetryczny')}
        />
        <FormCheckbox
          className={`lp-furczenie-l ${lSelection !== null ? 'row-selected' : ''}`}
          checked={lSelection === 'furczenie'}
          onChange={() => handleLSelectionChange('furczenie')}
        />
        <FormCheckbox
          className={`lp-swisty-l ${lSelection !== null ? 'row-selected' : ''}`}
          checked={lSelection === 'swisty'}
          onChange={() => handleLSelectionChange('swisty')}
        />
        <FormCheckbox
          className={`lp-trzeszczenie-l ${lSelection !== null ? 'row-selected' : ''}`}
          checked={lSelection === 'trzeszczenie'}
          onChange={() => handleLSelectionChange('trzeszczenie')}
        />
        <FormCheckbox
          className={`lp-rzezenie-l ${lSelection !== null ? 'row-selected' : ''}`}
          checked={lSelection === 'rzezenie'}
          onChange={() => handleLSelectionChange('rzezenie')}
        />
        <FormCheckbox
          className={`lp-brak-l ${lSelection !== null ? 'row-selected' : ''}`}
          checked={lSelection === 'brak'}
          onChange={() => handleLSelectionChange('brak')}
        />
        <FormCheckbox
          className={`lp-inne-l ${lSelection !== null ? 'row-selected' : ''}`}
          checked={lSelection === 'inne'}
          onChange={() => handleLSelectionChange('inne')}
        />
        
        {/* P column */}
        <FormCheckbox
          className={`lp-symetryczny-p ${pSelection !== null ? 'row-selected' : ''}`}
          checked={pSelection === 'symetryczny'}
          onChange={() => handlePSelectionChange('symetryczny')}
        />
        <FormCheckbox
          className={`lp-furczenie-p ${pSelection !== null ? 'row-selected' : ''}`}
          checked={pSelection === 'furczenie'}
          onChange={() => handlePSelectionChange('furczenie')}
        />
        <FormCheckbox
          className={`lp-swisty-p ${pSelection !== null ? 'row-selected' : ''}`}
          checked={pSelection === 'swisty'}
          onChange={() => handlePSelectionChange('swisty')}
        />
        <FormCheckbox
          className={`lp-trzeszczenie-p ${pSelection !== null ? 'row-selected' : ''}`}
          checked={pSelection === 'trzeszczenie'}
          onChange={() => handlePSelectionChange('trzeszczenie')}
        />
        <FormCheckbox
          className={`lp-rzezenie-p ${pSelection !== null ? 'row-selected' : ''}`}
          checked={pSelection === 'rzezenie'}
          onChange={() => handlePSelectionChange('rzezenie')}
        />
        <FormCheckbox
          className={`lp-brak-p ${pSelection !== null ? 'row-selected' : ''}`}
          checked={pSelection === 'brak'}
          onChange={() => handlePSelectionChange('brak')}
        />
        <FormCheckbox
          className={`lp-inne-p ${pSelection !== null ? 'row-selected' : ''}`}
          checked={pSelection === 'inne'}
          onChange={() => handlePSelectionChange('inne')}
        />
        
        {/* Text input next to "inne" */}
        <textarea
          ref={textareaRef}
          className={`inne-text-input ${(lSelection === 'inne' || pSelection === 'inne') && !inneText.trim() ? 'inne-selected' : ''}`}
          value={inneText}
          onChange={(e) => setInneText(e.target.value)}
          placeholder=""
          style={{ fontSize: `${fontSize}px` }}
        />
      </div>

      {/* Saturacja - single two-digit input */}
      <div className="saturacja">
        <NumberInput
          className="saturacja-input"
          value={saturacja}
          onChange={setSaturacja}
          maxLength={2}
        />
      </div>
    </div>
  );
};

export default UkladOddechowy;