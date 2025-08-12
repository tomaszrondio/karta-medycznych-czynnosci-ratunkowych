import React, { useState } from 'react';
import './JamaBrzuszna.css';
import { FormCheckbox } from '../ui';

const JamaBrzuszna: React.FC = () => {
  // Independent checkboxes (multiple can be selected)
  const [wNormie, setWNormie] = useState<boolean>(false);
  const [bolesnoscPalpacyjna, setBolesnoscPalpacyjna] = useState<boolean>(false);
  const [brakPerystaltyki, setBrakPerystaltyki] = useState<boolean>(false);
  const [objawyOtrzewnowe, setObjawyOtrzewnowe] = useState<boolean>(false);

  return (
    <div className="jama-brzuszna-container">
      <FormCheckbox
        className={`jama-w-normie ${wNormie ? 'row-selected' : ''}`}
        checked={wNormie}
        onChange={() => setWNormie(!wNormie)}
      />
      <FormCheckbox
        className={`jama-bolesnosc-palpacyjna ${bolesnoscPalpacyjna ? 'row-selected' : ''}`}
        checked={bolesnoscPalpacyjna}
        onChange={() => setBolesnoscPalpacyjna(!bolesnoscPalpacyjna)}
      />
      <FormCheckbox
        className={`jama-brak-perystaltyki ${brakPerystaltyki ? 'row-selected' : ''}`}
        checked={brakPerystaltyki}
        onChange={() => setBrakPerystaltyki(!brakPerystaltyki)}
      />
      <FormCheckbox
        className={`jama-objawy-otrzewnowe ${objawyOtrzewnowe ? 'row-selected' : ''}`}
        checked={objawyOtrzewnowe}
        onChange={() => setObjawyOtrzewnowe(!objawyOtrzewnowe)}
      />
    </div>
  );
};

export default JamaBrzuszna;