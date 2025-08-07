import React from 'react';
import './MedicalForm.css';
import backgroundImage from '../assets/background.png';

const MedicalForm: React.FC = () => {
  return (
    <div className="wrapper">
      <img src={backgroundImage} alt="Medical Form" />
    </div>
  );
};

export default MedicalForm;