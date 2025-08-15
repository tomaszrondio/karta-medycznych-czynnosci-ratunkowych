import React, { useState } from 'react';
import './EkG.css';
import { FormCheckbox, FormTextarea } from '../ui';

const EkG: React.FC = () => {
  // 13 independent checkboxes
  const [checkbox1, setCheckbox1] = useState<boolean>(false);
  const [checkbox2, setCheckbox2] = useState<boolean>(false);
  const [checkbox3, setCheckbox3] = useState<boolean>(false);
  const [checkbox4, setCheckbox4] = useState<boolean>(false);
  const [checkbox5, setCheckbox5] = useState<boolean>(false);
  const [checkbox6, setCheckbox6] = useState<boolean>(false);
  const [checkbox7, setCheckbox7] = useState<boolean>(false);
  const [checkbox8, setCheckbox8] = useState<boolean>(false);
  const [checkbox9, setCheckbox9] = useState<boolean>(false);
  const [checkbox10, setCheckbox10] = useState<boolean>(false);
  const [checkbox11, setCheckbox11] = useState<boolean>(false);
  const [checkbox12, setCheckbox12] = useState<boolean>(false);
  const [checkbox13, setCheckbox13] = useState<boolean>(false);

  return (
    <div className="ekg-container">
      <FormCheckbox
        className={`ekg-checkbox1 ${checkbox1 ? 'row-selected' : ''}`}
        checked={checkbox1}
        onChange={() => setCheckbox1(!checkbox1)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox2 ${checkbox2 ? 'row-selected' : ''}`}
        checked={checkbox2}
        onChange={() => setCheckbox2(!checkbox2)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox3 ${checkbox3 ? 'row-selected' : ''}`}
        checked={checkbox3}
        onChange={() => setCheckbox3(!checkbox3)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox4 ${checkbox4 ? 'row-selected' : ''}`}
        checked={checkbox4}
        onChange={() => setCheckbox4(!checkbox4)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox5 ${checkbox5 ? 'row-selected' : ''}`}
        checked={checkbox5}
        onChange={() => setCheckbox5(!checkbox5)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox6 ${checkbox6 ? 'row-selected' : ''}`}
        checked={checkbox6}
        onChange={() => setCheckbox6(!checkbox6)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox7 ${checkbox7 ? 'row-selected' : ''}`}
        checked={checkbox7}
        onChange={() => setCheckbox7(!checkbox7)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox8 ${checkbox8 ? 'row-selected' : ''}`}
        checked={checkbox8}
        onChange={() => setCheckbox8(!checkbox8)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox9 ${checkbox9 ? 'row-selected' : ''}`}
        checked={checkbox9}
        onChange={() => setCheckbox9(!checkbox9)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox10 ${checkbox10 ? 'row-selected' : ''}`}
        checked={checkbox10}
        onChange={() => setCheckbox10(!checkbox10)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox11 ${checkbox11 ? 'row-selected' : ''}`}
        checked={checkbox11}
        onChange={() => setCheckbox11(!checkbox11)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox12 ${checkbox12 ? 'row-selected' : ''}`}
        checked={checkbox12}
        onChange={() => setCheckbox12(!checkbox12)}
        isRequired={false}
      />
      <FormCheckbox
        className={`ekg-checkbox13 ${checkbox13 ? 'row-selected' : ''}`}
        checked={checkbox13}
        onChange={() => setCheckbox13(!checkbox13)}
        isRequired={false}
      />

      {/* Inne text input */}
      <FormTextarea
        className="ekg-inne-textarea"
        isRequired={false}
      />
    </div>
  );
};

export default EkG;