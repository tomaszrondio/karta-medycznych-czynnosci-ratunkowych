import React from 'react';
import './Opis.css';
import { FormTextarea } from '../ui';

const Opis: React.FC = () => {
  return (
    <div className="opis-container">
      <FormTextarea
        className="opis-textarea"
      />
    </div>
  );
};

export default Opis;