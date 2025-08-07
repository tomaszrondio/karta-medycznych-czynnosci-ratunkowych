import React from 'react';
import './MedicalForm.css';
import backgroundImage from '../assets/background.png';
import HeaderFields from './HeaderFields';
import Wywiad from './Wywiad';
import MiejsceZdarzenia from './MiejsceZdarzenia';

const MedicalForm: React.FC = () => {
  return (
    <div className="wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
      <HeaderFields />
      <Wywiad />
      <MiejsceZdarzenia />
    </div>
  );
};

export default MedicalForm;