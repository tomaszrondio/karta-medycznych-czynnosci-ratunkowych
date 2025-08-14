import React from 'react';
import './DanePacjenta.css';
import { FormTextarea } from '../ui';

const DanePacjenta: React.FC = () => {
  return (
    <div className="dane-pacjenta-container">
      {/* Imię */}
      <FormTextarea className="dane-imie" isRequired={true} />
      
      {/* Nazwisko */}
      <FormTextarea className="dane-nazwisko" isRequired={true} />
      
      {/* Adres zamieszkania */}
      <FormTextarea className="dane-adres" isRequired={true} />
      
      {/* ul. */}
      <FormTextarea className="dane-ulica" isRequired={true} />
      
      {/* nr. */}
      <FormTextarea className="dane-numer" isRequired={true} />
      
      {/* m. */}
      <FormTextarea className="dane-mieszkanie" isRequired={true} />
      
      {/* Rodz. i nr. dok. tożsamości */}
      <FormTextarea className="dane-dokument" isRequired={true} />
      
      {/* Additional input below */}
      <FormTextarea className="dane-additional" isRequired={true} />
    </div>
  );
};

export default DanePacjenta;