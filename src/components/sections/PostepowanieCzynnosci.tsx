import React, { useState } from 'react';
import './PostepowanieCzynnosci.css';
import { FormCheckbox, FormTextarea } from '../ui';

const PostepowanieCzynnosci: React.FC = () => {
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
  const [checkbox14, setCheckbox14] = useState<boolean>(false);
  const [checkbox15, setCheckbox15] = useState<boolean>(false);
  const [checkbox16, setCheckbox16] = useState<boolean>(false);
  const [checkbox17, setCheckbox17] = useState<boolean>(false);
  const [checkbox18, setCheckbox18] = useState<boolean>(false);
  const [checkbox19, setCheckbox19] = useState<boolean>(false);
  const [checkbox20, setCheckbox20] = useState<boolean>(false);
  const [checkbox21, setCheckbox21] = useState<boolean>(false);
  const [checkbox22, setCheckbox22] = useState<boolean>(false);

  return (
    <div className="postepowanie-czynnosci-container">
      {/* Column 1 */}
      <FormCheckbox className={`postepowanie-checkbox1 ${checkbox1 ? 'row-selected' : ''}`} checked={checkbox1} onChange={() => setCheckbox1(!checkbox1)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox2 ${checkbox2 ? 'row-selected' : ''}`} checked={checkbox2} onChange={() => setCheckbox2(!checkbox2)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox3 ${checkbox3 ? 'row-selected' : ''}`} checked={checkbox3} onChange={() => setCheckbox3(!checkbox3)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox4 ${checkbox4 ? 'row-selected' : ''}`} checked={checkbox4} onChange={() => setCheckbox4(!checkbox4)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox5 ${checkbox5 ? 'row-selected' : ''}`} checked={checkbox5} onChange={() => setCheckbox5(!checkbox5)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox21 ${checkbox21 ? 'row-selected' : ''}`} checked={checkbox21} onChange={() => setCheckbox21(!checkbox21)} isRequired={false} />

      {/* Column 2 */}
      <FormCheckbox className={`postepowanie-checkbox6 ${checkbox6 ? 'row-selected' : ''}`} checked={checkbox6} onChange={() => setCheckbox6(!checkbox6)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox7 ${checkbox7 ? 'row-selected' : ''}`} checked={checkbox7} onChange={() => setCheckbox7(!checkbox7)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox8 ${checkbox8 ? 'row-selected' : ''}`} checked={checkbox8} onChange={() => setCheckbox8(!checkbox8)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox9 ${checkbox9 ? 'row-selected' : ''}`} checked={checkbox9} onChange={() => setCheckbox9(!checkbox9)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox10 ${checkbox10 ? 'row-selected' : ''}`} checked={checkbox10} onChange={() => setCheckbox10(!checkbox10)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox22 ${checkbox22 ? 'row-selected' : ''}`} checked={checkbox22} onChange={() => setCheckbox22(!checkbox22)} isRequired={false} />

      {/* Column 3 */}
      <FormCheckbox className={`postepowanie-checkbox11 ${checkbox11 ? 'row-selected' : ''}`} checked={checkbox11} onChange={() => setCheckbox11(!checkbox11)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox12 ${checkbox12 ? 'row-selected' : ''}`} checked={checkbox12} onChange={() => setCheckbox12(!checkbox12)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox13 ${checkbox13 ? 'row-selected' : ''}`} checked={checkbox13} onChange={() => setCheckbox13(!checkbox13)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox14 ${checkbox14 ? 'row-selected' : ''}`} checked={checkbox14} onChange={() => setCheckbox14(!checkbox14)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox15 ${checkbox15 ? 'row-selected' : ''}`} checked={checkbox15} onChange={() => setCheckbox15(!checkbox15)} isRequired={false} />

      {/* Column 4 */}
      <FormCheckbox className={`postepowanie-checkbox16 ${checkbox16 ? 'row-selected' : ''}`} checked={checkbox16} onChange={() => setCheckbox16(!checkbox16)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox17 ${checkbox17 ? 'row-selected' : ''}`} checked={checkbox17} onChange={() => setCheckbox17(!checkbox17)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox18 ${checkbox18 ? 'row-selected' : ''}`} checked={checkbox18} onChange={() => setCheckbox18(!checkbox18)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox19 ${checkbox19 ? 'row-selected' : ''}`} checked={checkbox19} onChange={() => setCheckbox19(!checkbox19)} isRequired={false} />
      <FormCheckbox className={`postepowanie-checkbox20 ${checkbox20 ? 'row-selected' : ''}`} checked={checkbox20} onChange={() => setCheckbox20(!checkbox20)} isRequired={false} />

      {/* Inne textarea */}
      <FormTextarea className="postepowanie-inne-textarea" isRequired={false} />
    </div>
  );
};

export default PostepowanieCzynnosci;