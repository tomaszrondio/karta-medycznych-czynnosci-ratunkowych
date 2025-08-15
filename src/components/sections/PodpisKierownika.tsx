import React from 'react';
import './PodpisKierownika.css';
import { FormTextarea } from '../ui';

const PodpisKierownika: React.FC = () => {
  // Get current date in yyyy-mm-dd format immediately
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="podpis-kierownika-container">
      {/* Zespół (S/P) input */}
      <FormTextarea
        className="zespol-input"
        isRequired={true}
      />

      {/* Data udzielenia pomocy input */}
      <FormTextarea
        className="data-pomocy-input"
        defaultValue={getCurrentDate()}
        isRequired={true}
      />
    </div>
  );
};

export default PodpisKierownika;