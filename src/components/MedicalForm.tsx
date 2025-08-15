import React, { useEffect, useState } from 'react';
import './MedicalForm.css';
import backgroundImage from '../assets/background.png';
import HeaderFields from './sections/HeaderFields';
import Wywiad from './sections/Wywiad';
import MiejsceZdarzenia from './sections/MiejsceZdarzenia';
import GlasgowComaScale from './sections/GlasgowComaScale';
import RTS from './sections/RTS';
import UkladOddechowy from './sections/UkladOddechowy';
import Zrenice from './sections/Zrenice';
import CisnienieTetnicze from './sections/CisnienieTetnicze';
import Tetno from './sections/Tetno';
import Objawy from './sections/Objawy';
import Inne from './sections/Inne';
import Skora from './sections/Skora';
import JamaBrzuszna from './sections/JamaBrzuszna';
import OcenaPsychoRuch from './sections/OcenaPsychoRuch';
import TonySerca from './sections/TonySerca';
import NiedowladPorazenie from './sections/NiedowladPorazenie';
import ZapachZUst from './sections/ZapachZUst';
import PoziomGlukozy from './sections/PoziomGlukozy';
import EkG from './sections/EkG';
import Opis from './sections/Opis';
import Rozpoznanie from './sections/Rozpoznanie';
import PostepowanieCzynnosci from './sections/PostepowanieCzynnosci';
import ZastosowaneLeki from './sections/ZastosowaneLeki';
import ZaleceniaUwagi from './sections/ZaleceniaUwagi';
import DanePacjenta from './sections/DanePacjenta';
import IdentyfikacjaPacjenta from './sections/IdentyfikacjaPacjenta';
import PodpisKierownika from './sections/PodpisKierownika';
import DecyzjaPodmiotu from './sections/DecyzjaPodmiotu';
import PrzekazaniePacjenta from './sections/PrzekazaniePacjenta';

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
          <GlasgowComaScale />
          <RTS />
          <UkladOddechowy />
          <Zrenice />
          <CisnienieTetnicze />
          <Tetno />
          <Objawy />
          <Inne />
          <Skora />
          <JamaBrzuszna />
          <OcenaPsychoRuch />
          <TonySerca />
          <NiedowladPorazenie />
          <ZapachZUst />
          <PoziomGlukozy />
          <EkG />
          <Opis />
          <Rozpoznanie />
          <PostepowanieCzynnosci />
          <ZastosowaneLeki />
          <ZaleceniaUwagi />
          <DanePacjenta />
          <IdentyfikacjaPacjenta />
          <PodpisKierownika />
          <DecyzjaPodmiotu />
          <PrzekazaniePacjenta />
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