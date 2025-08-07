import React from 'react';
import './HeaderFields.css';

const HeaderFields: React.FC = () => {
  return (
    <>
      {/* Oznaczenie dysponenta zespolu ratownictwa medycznego (ZRM) */}
      <textarea 
        className="header-field field-1"
      />
      
      {/* Kod ZRM realizującego zlecenie: */}
      <textarea 
        className="header-field field-2"
      />
      
      {/* Nr zlecenia wyjazdu: */}
      <textarea 
        className="header-field field-3"
      />
    </>
  );
};

export default HeaderFields;