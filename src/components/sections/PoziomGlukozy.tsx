import React, { useState } from 'react';
import './PoziomGlukozy.css';
import { FormTextarea } from '../ui';

const PoziomGlukozy: React.FC = () => {
  const [pierwszyValue, setPierwszyValue] = useState('');
  const [drugiValue, setDrugiValue] = useState('');

  // If either field has content, the other becomes not required (yellow)
  const isPierwszyRequired = drugiValue.trim() === '';
  const isDrugiRequired = pierwszyValue.trim() === '';

  const handlePierwszyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPierwszyValue(e.target.value);
  };

  const handleDrugiChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDrugiValue(e.target.value);
  };

  return (
    <div className="poziom-glukozy-container">
      <FormTextarea
        className="glukoza-pierwszy"
        value={pierwszyValue}
        onChange={handlePierwszyChange}
        isRequired={isPierwszyRequired}
      />
      <FormTextarea
        className="glukoza-drugi"
        value={drugiValue}
        onChange={handleDrugiChange}
        isRequired={isDrugiRequired}
      />
    </div>
  );
};

export default PoziomGlukozy;