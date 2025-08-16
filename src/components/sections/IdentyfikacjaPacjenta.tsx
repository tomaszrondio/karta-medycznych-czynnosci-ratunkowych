import React, { useState } from 'react';
import './IdentyfikacjaPacjenta.css';
// import { NumberInput } from '../ui';
import LargeNumberInput from '../ui/LargeNumberInput';

const IdentyfikacjaPacjenta: React.FC = () => {
  // Ident. NFZ (3 digits)
  const [identNfz, setIdentNfz] = useState<string>('');
  
  // Data urodzenia (4-2-2 digits: year-month-day)
  const [dataYear, setDataYear] = useState<string>('');
  const [dataMonth, setDataMonth] = useState<string>('');
  const [dataDay, setDataDay] = useState<string>('');
  
  // Numer PESEL (11 digits)
  const [pesel, setPesel] = useState<string>('');

  return (
    <div className="identyfikacja-pacjenta-container">
      {/* Ident. NFZ (3 digits) */}
      <LargeNumberInput
        className="ident-nfz-input"
        value={identNfz}
        onChange={setIdentNfz}
        maxLength={3}
        isRequired={true}
      />
      
      {/* Year (4 digits) */}
      <LargeNumberInput
        className="data-year-input"
        value={dataYear}
        onChange={setDataYear}
        maxLength={4}
        isRequired={true}
      />
      
      {/* Month (2 digits) */}
      <LargeNumberInput
        className="data-month-input"
        value={dataMonth}
        onChange={setDataMonth}
        maxLength={2}
        isRequired={true}
      />
      
      {/* Day (2 digits) */}
      <LargeNumberInput
        className="data-day-input"
        value={dataDay}
        onChange={setDataDay}
        maxLength={2}
        isRequired={true}
      />

      {/* PESEL (11 digits) */}
      <LargeNumberInput
        className="pesel-input"
        value={pesel}
        onChange={setPesel}
        maxLength={11}
        isRequired={true}
      />
    </div>
  );
};

export default IdentyfikacjaPacjenta;