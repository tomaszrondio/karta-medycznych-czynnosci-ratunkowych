import React from 'react';
import './ZaleceniaUwagi.css';
import { FormTextarea } from '../ui';

const ZaleceniaUwagi: React.FC = () => {
  return (
    <div className="zalecenia-uwagi-container">
      <FormTextarea
        className="zalecenia-uwagi-textarea"
        isRequired={true}
      />
    </div>
  );
};

export default ZaleceniaUwagi;