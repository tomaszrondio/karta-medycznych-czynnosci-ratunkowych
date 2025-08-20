import React, { useState } from 'react';
import './ObrazeniaRightColumn.css';
import { FormCheckbox, NumberInput, FormTextarea } from '../ui';
import { useObrazeniaContext } from './ObrazeniaWrapper';

const ObrazeniaRightColumn: React.FC = () => {
  // Get shared state from context
  const { brakObrazen, setBrakObrazen, setRightInputs } = useObrazeniaContext();
  const [oparzenieWziewne, setOparzenieWziewne] = useState<boolean>(false);

  // Number inputs for percentages
  const [percent1, setPercent1] = useState<string>('');
  const [percent2, setPercent2] = useState<string>('');

  // Update setRightInputs whenever any input in this component changes
  React.useEffect(() => {
    const hasInputs = oparzenieWziewne || percent1.trim() !== '' || percent2.trim() !== '';
    setRightInputs?.(hasInputs);
  }, [oparzenieWziewne, percent1, percent2, setRightInputs]);

  return (
    <div className={`obrazenia-right-column-container ${brakObrazen ? 'brak-obrazen-selected' : ''}`}>
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