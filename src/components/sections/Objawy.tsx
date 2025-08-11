import React, { useState } from 'react';
import './Objawy.css';
import { FormCheckbox } from '../ui';

const Objawy: React.FC = () => {
  // 10 rows of T/N (Tak/Nie) checkboxes
  const [objaw1, setObjaw1] = useState<boolean | null>(null);
  const [objaw2, setObjaw2] = useState<boolean | null>(null);
  const [objaw3, setObjaw3] = useState<boolean | null>(null);
  const [objaw4, setObjaw4] = useState<boolean | null>(null);
  const [objaw5, setObjaw5] = useState<boolean | null>(null);
  const [objaw6, setObjaw6] = useState<boolean | null>(null);
  const [objaw7, setObjaw7] = useState<boolean | null>(null);
  const [objaw8, setObjaw8] = useState<boolean | null>(null);
  const [objaw9, setObjaw9] = useState<boolean | null>(null);
  const [objaw10, setObjaw10] = useState<boolean | null>(null);

  const handleObjawChange = (objawNumber: number, value: boolean) => {
    const setters = [
      setObjaw1, setObjaw2, setObjaw3, setObjaw4, setObjaw5,
      setObjaw6, setObjaw7, setObjaw8, setObjaw9, setObjaw10
    ];
    const currentValues = [
      objaw1, objaw2, objaw3, objaw4, objaw5,
      objaw6, objaw7, objaw8, objaw9, objaw10
    ];

    const setter = setters[objawNumber - 1];
    const currentValue = currentValues[objawNumber - 1];
    
    setter(currentValue === value ? null : value);
  };

  return (
    <div className="objawy-container">
      {/* Row 1 */}
      <div className="tn-row objaw1-row">
        <FormCheckbox
          className={`objaw1-t ${objaw1 !== null ? 'row-selected' : ''}`}
          checked={objaw1 === true}
          onChange={() => handleObjawChange(1, true)}
        />
        <FormCheckbox
          className={`objaw1-n ${objaw1 !== null ? 'row-selected' : ''}`}
          checked={objaw1 === false}
          onChange={() => handleObjawChange(1, false)}
        />
      </div>

      {/* Row 2 */}
      <div className="tn-row objaw2-row">
        <FormCheckbox
          className={`objaw2-t ${objaw2 !== null ? 'row-selected' : ''}`}
          checked={objaw2 === true}
          onChange={() => handleObjawChange(2, true)}
        />
        <FormCheckbox
          className={`objaw2-n ${objaw2 !== null ? 'row-selected' : ''}`}
          checked={objaw2 === false}
          onChange={() => handleObjawChange(2, false)}
        />
      </div>

      {/* Row 3 */}
      <div className="tn-row objaw3-row">
        <FormCheckbox
          className={`objaw3-t ${objaw3 !== null ? 'row-selected' : ''}`}
          checked={objaw3 === true}
          onChange={() => handleObjawChange(3, true)}
        />
        <FormCheckbox
          className={`objaw3-n ${objaw3 !== null ? 'row-selected' : ''}`}
          checked={objaw3 === false}
          onChange={() => handleObjawChange(3, false)}
        />
      </div>

      {/* Row 4 */}
      <div className="tn-row objaw4-row">
        <FormCheckbox
          className={`objaw4-t ${objaw4 !== null ? 'row-selected' : ''}`}
          checked={objaw4 === true}
          onChange={() => handleObjawChange(4, true)}
        />
        <FormCheckbox
          className={`objaw4-n ${objaw4 !== null ? 'row-selected' : ''}`}
          checked={objaw4 === false}
          onChange={() => handleObjawChange(4, false)}
        />
      </div>

      {/* Row 5 */}
      <div className="tn-row objaw5-row">
        <FormCheckbox
          className={`objaw5-t ${objaw5 !== null ? 'row-selected' : ''}`}
          checked={objaw5 === true}
          onChange={() => handleObjawChange(5, true)}
        />
        <FormCheckbox
          className={`objaw5-n ${objaw5 !== null ? 'row-selected' : ''}`}
          checked={objaw5 === false}
          onChange={() => handleObjawChange(5, false)}
        />
      </div>

      {/* Row 6 */}
      <div className="tn-row objaw6-row">
        <FormCheckbox
          className={`objaw6-t ${objaw6 !== null ? 'row-selected' : ''}`}
          checked={objaw6 === true}
          onChange={() => handleObjawChange(6, true)}
        />
        <FormCheckbox
          className={`objaw6-n ${objaw6 !== null ? 'row-selected' : ''}`}
          checked={objaw6 === false}
          onChange={() => handleObjawChange(6, false)}
        />
      </div>

      {/* Row 7 */}
      <div className="tn-row objaw7-row">
        <FormCheckbox
          className={`objaw7-t ${objaw7 !== null ? 'row-selected' : ''}`}
          checked={objaw7 === true}
          onChange={() => handleObjawChange(7, true)}
        />
        <FormCheckbox
          className={`objaw7-n ${objaw7 !== null ? 'row-selected' : ''}`}
          checked={objaw7 === false}
          onChange={() => handleObjawChange(7, false)}
        />
      </div>

      {/* Row 8 */}
      <div className="tn-row objaw8-row">
        <FormCheckbox
          className={`objaw8-t ${objaw8 !== null ? 'row-selected' : ''}`}
          checked={objaw8 === true}
          onChange={() => handleObjawChange(8, true)}
        />
        <FormCheckbox
          className={`objaw8-n ${objaw8 !== null ? 'row-selected' : ''}`}
          checked={objaw8 === false}
          onChange={() => handleObjawChange(8, false)}
        />
      </div>

      {/* Row 9 */}
      <div className="tn-row objaw9-row">
        <FormCheckbox
          className={`objaw9-t ${objaw9 !== null ? 'row-selected' : ''}`}
          checked={objaw9 === true}
          onChange={() => handleObjawChange(9, true)}
        />
        <FormCheckbox
          className={`objaw9-n ${objaw9 !== null ? 'row-selected' : ''}`}
          checked={objaw9 === false}
          onChange={() => handleObjawChange(9, false)}
        />
      </div>

      {/* Row 10 */}
      <div className="tn-row objaw10-row">
        <FormCheckbox
          className={`objaw10-t ${objaw10 !== null ? 'row-selected' : ''}`}
          checked={objaw10 === true}
          onChange={() => handleObjawChange(10, true)}
        />
        <FormCheckbox
          className={`objaw10-n ${objaw10 !== null ? 'row-selected' : ''}`}
          checked={objaw10 === false}
          onChange={() => handleObjawChange(10, false)}
        />
      </div>
    </div>
  );
};

export default Objawy;