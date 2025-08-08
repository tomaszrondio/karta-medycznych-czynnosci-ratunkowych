import React, { useEffect, useState } from 'react';
import './MedicalForm.css';
import backgroundImage from '../assets/background.png';
import HeaderFields from './HeaderFields';
import Wywiad from './Wywiad';
import MiejsceZdarzenia from './MiejsceZdarzenia';

const MedicalForm: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      // 204mm converted to pixels (assuming 96dpi: 204mm = 773px)
      const formWidthPx = 773;
      const viewportWidth = window.innerWidth;
      const padding = 40; // 20px on each side
      const availableWidth = viewportWidth - padding;
      const calculatedScale = availableWidth / formWidthPx;
      
      // Minimum scale of 0.5, maximum of 3
      const clampedScale = Math.max(0.5, Math.min(3, calculatedScale));
      setScale(clampedScale);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="form-container">
        <div 
          className="wrapper" 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `scale(${scale})`,
            marginBottom: `${294 * 3.78 * (scale - 1)}px` // 294mm * 3.78px/mm * (scale - 1)
          }}
        >
          <HeaderFields />
          <Wywiad />
          <MiejsceZdarzenia />
        </div>
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