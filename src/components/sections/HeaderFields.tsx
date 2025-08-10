import React from 'react';
import './HeaderFields.css';
import { FormTextarea } from '../ui';

const HeaderFields: React.FC = () => {
  return (
    <>
      {/* Oznaczenie dysponenta zespolu ratownictwa medycznego (ZRM) */}
      <FormTextarea 
        className="field-1"
      />
      
      {/* Kod ZRM realizującego zlecenie: */}
      <FormTextarea 
        className="field-2"
      />
      
      {/* Nr zlecenia wyjazdu: */}
      <FormTextarea 
        className="field-3"
      />
    </>
  );
};

export default HeaderFields;