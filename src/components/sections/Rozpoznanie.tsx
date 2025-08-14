import React from 'react';
import './Rozpoznanie.css';
import { FormTextarea } from '../ui';

const Rozpoznanie: React.FC = () => {
  return (
    <div className="rozpoznanie-container">
      {/* Opis textarea */}
      <FormTextarea
        className="rozpoznanie-opis-textarea"
      />
      
      {/* Three small text inputs */}
      <FormTextarea
        className="rozpoznanie-input1"
      />
      <FormTextarea
        className="rozpoznanie-input2"
      />
      <FormTextarea
        className="rozpoznanie-input3"
      />
    </div>
  );
};

export default Rozpoznanie;