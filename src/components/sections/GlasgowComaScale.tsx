import React, { useState, useEffect } from 'react';
import './GlasgowComaScale.css';
import { NumberCheckbox } from '../ui';

const GlasgowComaScale: React.FC = () => {
  const [eyeOpening, setEyeOpening] = useState<number | null>(null);
  const [verbalResponse, setVerbalResponse] = useState<number | null>(null);
  const [motorResponse, setMotorResponse] = useState<number | null>(null);
  const [totalSum, setTotalSum] = useState(0);

  // Calculate sum whenever any selection changes
  useEffect(() => {
    const sum = (eyeOpening || 0) + (verbalResponse || 0) + (motorResponse || 0);
    setTotalSum(sum);
  }, [eyeOpening, verbalResponse, motorResponse]);

  const handleEyeOpeningChange = (value: number) => {
    setEyeOpening(eyeOpening === value ? null : value);
  };

  const handleVerbalResponseChange = (value: number) => {
    setVerbalResponse(verbalResponse === value ? null : value);
  };

  const handleMotorResponseChange = (value: number) => {
    setMotorResponse(motorResponse === value ? null : value);
  };

  // Convert number to individual digits for display
  const getDigits = (num: number) => {
    if (num === 0) return ['0', '0'];
    const str = num.toString().padStart(2, '0');
    return [str[0], str[1]];
  };

  const digits = getDigits(totalSum);

  return (
    <div className="glasgow-container">
      {/* Eye Opening */}
      <div className="glasgow-section eye-opening">
        <NumberCheckbox 
          className="eye-4"
          value={4}
          checked={eyeOpening === 4}
          onChange={() => handleEyeOpeningChange(4)}
          sectionHasSelection={eyeOpening !== null}
        />
        <NumberCheckbox 
          className="eye-3"
          value={3}
          checked={eyeOpening === 3}
          onChange={() => handleEyeOpeningChange(3)}
          sectionHasSelection={eyeOpening !== null}
        />
        <NumberCheckbox 
          className="eye-2"
          value={2}
          checked={eyeOpening === 2}
          onChange={() => handleEyeOpeningChange(2)}
          sectionHasSelection={eyeOpening !== null}
        />
        <NumberCheckbox 
          className="eye-1"
          value={1}
          checked={eyeOpening === 1}
          onChange={() => handleEyeOpeningChange(1)}
          sectionHasSelection={eyeOpening !== null}
        />
      </div>

      {/* Verbal Response */}
      <div className="glasgow-section verbal-response">
        <NumberCheckbox 
          className="verbal-5"
          value={5}
          checked={verbalResponse === 5}
          onChange={() => handleVerbalResponseChange(5)}
          sectionHasSelection={verbalResponse !== null}
        />
        <NumberCheckbox 
          className="verbal-4"
          value={4}
          checked={verbalResponse === 4}
          onChange={() => handleVerbalResponseChange(4)}
          sectionHasSelection={verbalResponse !== null}
        />
        <NumberCheckbox 
          className="verbal-3"
          value={3}
          checked={verbalResponse === 3}
          onChange={() => handleVerbalResponseChange(3)}
          sectionHasSelection={verbalResponse !== null}
        />
        <NumberCheckbox 
          className="verbal-2"
          value={2}
          checked={verbalResponse === 2}
          onChange={() => handleVerbalResponseChange(2)}
          sectionHasSelection={verbalResponse !== null}
        />
        <NumberCheckbox 
          className="verbal-1"
          value={1}
          checked={verbalResponse === 1}
          onChange={() => handleVerbalResponseChange(1)}
          sectionHasSelection={verbalResponse !== null}
        />
      </div>

      {/* Motor Response */}
      <div className="glasgow-section motor-response">
        <NumberCheckbox 
          className="motor-6"
          value={6}
          checked={motorResponse === 6}
          onChange={() => handleMotorResponseChange(6)}
          sectionHasSelection={motorResponse !== null}
        />
        <NumberCheckbox 
          className="motor-5"
          value={5}
          checked={motorResponse === 5}
          onChange={() => handleMotorResponseChange(5)}
          sectionHasSelection={motorResponse !== null}
        />
        <NumberCheckbox 
          className="motor-4"
          value={4}
          checked={motorResponse === 4}
          onChange={() => handleMotorResponseChange(4)}
          sectionHasSelection={motorResponse !== null}
        />
        <NumberCheckbox 
          className="motor-3"
          value={3}
          checked={motorResponse === 3}
          onChange={() => handleMotorResponseChange(3)}
          sectionHasSelection={motorResponse !== null}
        />
        <NumberCheckbox 
          className="motor-2"
          value={2}
          checked={motorResponse === 2}
          onChange={() => handleMotorResponseChange(2)}
          sectionHasSelection={motorResponse !== null}
        />
        <NumberCheckbox 
          className="motor-1"
          value={1}
          checked={motorResponse === 1}
          onChange={() => handleMotorResponseChange(1)}
          sectionHasSelection={motorResponse !== null}
        />
      </div>

      {/* Sum Display */}
      <div className="sum-display">
        <div className="sum-digit digit-tens">{digits[0]}</div>
        <div className="sum-digit digit-ones">{digits[1]}</div>
      </div>
    </div>
  );
};

export default GlasgowComaScale;