import React, { useState, useEffect } from 'react';
import './RTS.css';
import { NumberCheckbox } from '../ui';

const RTS: React.FC = () => {
  const [respiratoryRate, setRespiratoryRate] = useState<number | null>(null);
  const [systolicBP, setSystolicBP] = useState<number | null>(null);
  const [glasgowComaScale, setGlasgowComaScale] = useState<number | null>(null);
  const [totalSum, setTotalSum] = useState(0);

  // Calculate sum whenever any selection changes
  useEffect(() => {
    const sum = (respiratoryRate || 0) + (systolicBP || 0) + (glasgowComaScale || 0);
    setTotalSum(sum);
  }, [respiratoryRate, systolicBP, glasgowComaScale]);

  const handleRespiratoryRateChange = (value: number) => {
    setRespiratoryRate(respiratoryRate === value ? null : value);
  };

  const handleSystolicBPChange = (value: number) => {
    setSystolicBP(systolicBP === value ? null : value);
  };

  const handleGlasgowComaScaleChange = (value: number) => {
    setGlasgowComaScale(glasgowComaScale === value ? null : value);
  };

  // Convert number to individual digits for display
  const getDigits = (num: number) => {
    if (num === 0) return ['0', '0'];
    const str = num.toString().padStart(2, '0');
    return [str[0], str[1]];
  };

  const digits = getDigits(totalSum);

  return (
    <div className="rts-container">
      {/* Respiratory Rate */}
      <div className="rts-section respiratory-rate">
        <NumberCheckbox 
          className="resp-4"
          value={4}
          checked={respiratoryRate === 4}
          onChange={() => handleRespiratoryRateChange(4)}
          sectionHasSelection={respiratoryRate !== null}
        />
        <NumberCheckbox 
          className="resp-3"
          value={3}
          checked={respiratoryRate === 3}
          onChange={() => handleRespiratoryRateChange(3)}
          sectionHasSelection={respiratoryRate !== null}
        />
        <NumberCheckbox 
          className="resp-2"
          value={2}
          checked={respiratoryRate === 2}
          onChange={() => handleRespiratoryRateChange(2)}
          sectionHasSelection={respiratoryRate !== null}
        />
        <NumberCheckbox 
          className="resp-1"
          value={1}
          checked={respiratoryRate === 1}
          onChange={() => handleRespiratoryRateChange(1)}
          sectionHasSelection={respiratoryRate !== null}
        />
        <NumberCheckbox 
          className="resp-0"
          value={0}
          checked={respiratoryRate === 0}
          onChange={() => handleRespiratoryRateChange(0)}
          sectionHasSelection={respiratoryRate !== null}
        />
      </div>

      {/* Systolic Blood Pressure */}
      <div className="rts-section systolic-bp">
        <NumberCheckbox 
          className="bp-4"
          value={4}
          checked={systolicBP === 4}
          onChange={() => handleSystolicBPChange(4)}
          sectionHasSelection={systolicBP !== null}
        />
        <NumberCheckbox 
          className="bp-3"
          value={3}
          checked={systolicBP === 3}
          onChange={() => handleSystolicBPChange(3)}
          sectionHasSelection={systolicBP !== null}
        />
        <NumberCheckbox 
          className="bp-2"
          value={2}
          checked={systolicBP === 2}
          onChange={() => handleSystolicBPChange(2)}
          sectionHasSelection={systolicBP !== null}
        />
        <NumberCheckbox 
          className="bp-1"
          value={1}
          checked={systolicBP === 1}
          onChange={() => handleSystolicBPChange(1)}
          sectionHasSelection={systolicBP !== null}
        />
        <NumberCheckbox 
          className="bp-0"
          value={0}
          checked={systolicBP === 0}
          onChange={() => handleSystolicBPChange(0)}
          sectionHasSelection={systolicBP !== null}
        />
      </div>

      {/* Glasgow Coma Scale */}
      <div className="rts-section gcs">
        <NumberCheckbox 
          className="gcs-4"
          value={4}
          checked={glasgowComaScale === 4}
          onChange={() => handleGlasgowComaScaleChange(4)}
          sectionHasSelection={glasgowComaScale !== null}
        />
        <NumberCheckbox 
          className="gcs-3"
          value={3}
          checked={glasgowComaScale === 3}
          onChange={() => handleGlasgowComaScaleChange(3)}
          sectionHasSelection={glasgowComaScale !== null}
        />
        <NumberCheckbox 
          className="gcs-2"
          value={2}
          checked={glasgowComaScale === 2}
          onChange={() => handleGlasgowComaScaleChange(2)}
          sectionHasSelection={glasgowComaScale !== null}
        />
        <NumberCheckbox 
          className="gcs-1"
          value={1}
          checked={glasgowComaScale === 1}
          onChange={() => handleGlasgowComaScaleChange(1)}
          sectionHasSelection={glasgowComaScale !== null}
        />
        <NumberCheckbox 
          className="gcs-0"
          value={0}
          checked={glasgowComaScale === 0}
          onChange={() => handleGlasgowComaScaleChange(0)}
          sectionHasSelection={glasgowComaScale !== null}
        />
      </div>

      {/* Sum Display */}
      <div className="rts-sum-display">
        <div className="rts-sum-digit digit-tens">{digits[0]}</div>
        <div className="rts-sum-digit digit-ones">{digits[1]}</div>
      </div>
    </div>
  );
};

export default RTS;