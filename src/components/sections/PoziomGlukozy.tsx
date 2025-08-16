import React from 'react';
import './PoziomGlukozy.css';
import { FormTextarea } from '../ui';

const PoziomGlukozy: React.FC = () => {

  return (
    <div className="poziom-glukozy-container">
      <FormTextarea
        className="glukoza-pierwszy"
      />
      <FormTextarea
        className="glukoza-drugi"
      />
    </div>
  );
};

export default PoziomGlukozy;