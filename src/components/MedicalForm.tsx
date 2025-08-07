import React from 'react';
import './MedicalForm.css';
import backgroundImage from '../assets/background.png';
import HeaderFields from './HeaderFields';
import Wywiad from './Wywiad';
import MiejsceZdarzenia from './MiejsceZdarzenia';

const MedicalForm: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
        <HeaderFields />
        <Wywiad />
        <MiejsceZdarzenia />
      </div>
      
      <div className="print-button-container no-print">
        <button onClick={handlePrint} className="print-button">
          Drukuj formularz
        </button>
      </div>
    </>
  );
};

export default MedicalForm;