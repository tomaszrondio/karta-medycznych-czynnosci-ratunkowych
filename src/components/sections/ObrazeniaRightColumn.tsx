import React, { useState } from 'react';
import './ObrazeniaRightColumn.css';
import { FormCheckbox, NumberInput, FormTextarea } from '../ui';

const ObrazeniaRightColumn: React.FC = () => {
  // Checkboxes
  const [brakObrazen, setBrakObrazen] = useState<boolean>(false);
  const [oparzenieWziewne, setOparzenieWziewne] = useState<boolean>(false);

  // Number inputs for percentages
  const [percent1, setPercent1] = useState<string>('');
  const [percent2, setPercent2] = useState<string>('');

  return (
    <div className="obrazenia-right-column-container">
      {/* Brak obrażeń checkbox */}
      <FormCheckbox
        className={`brak-obrazen-checkbox ${brakObrazen ? 'row-selected' : ''}`}
        checked={brakObrazen}
        onChange={() => setBrakObrazen(!brakObrazen)}
        isRequired={false}
      />

      {/* Stopnia text inputs */}
      <FormTextarea
        className="stopnia1-input"
        isRequired={false}
      />

      <FormTextarea
        className="stopnia2-input"
        isRequired={false}
      />

      {/* Oparzenie wziewne checkbox */}
      <FormCheckbox
        className={`oparzenie-wziewne-checkbox ${oparzenieWziewne ? 'row-selected' : ''}`}
        checked={oparzenieWziewne}
        onChange={() => setOparzenieWziewne(!oparzenieWziewne)}
        isRequired={false}
      />

      {/* Number inputs for percentages */}
      <NumberInput
        className="percent1-input"
        value={percent1}
        onChange={setPercent1}
        maxLength={3}
        isRequired={false}
      />

      <NumberInput
        className="percent2-input"
        value={percent2}
        onChange={setPercent2}
        maxLength={3}
        isRequired={false}
      />
    </div>
  );
};

export default ObrazeniaRightColumn;