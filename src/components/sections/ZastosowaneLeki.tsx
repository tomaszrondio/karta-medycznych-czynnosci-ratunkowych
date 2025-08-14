import React from 'react';
import './ZastosowaneLeki.css';
import { FormTextarea } from '../ui';

const ZastosowaneLeki: React.FC = () => {
  return (
    <div className="zastosowane-leki-container">
      <FormTextarea
        className="zastosowane-leki-textarea"
        isRequired={false}
      />
    </div>
  );
};

export default ZastosowaneLeki;