import React, { useEffect, useState } from 'react';
import './MedicalForm.css';
import backgroundImage from '../assets/background.png';
import ConfirmationModal from './ui/ConfirmationModal';
import ConfigurationModal from './ui/ConfigurationModal';
import { store, CONFIG_KEYS } from '../utils/store';
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
import ObrazeniaCentrum from './sections/ObrazeniaCentrum';
import ObrazeniaRightColumn from './sections/ObrazeniaRightColumn';
import HumanDiagram from './sections/HumanDiagram';

const MedicalForm: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [showClearModal, setShowClearModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [configValue, setConfigValue] = useState('');

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

  useEffect(() => {
    // Load configuration value on mount
    const loadConfigValue = async () => {
      try {
        const storedValue = await store.get(CONFIG_KEYS.OZNACZENIE_DYSPONENTA, '');
        setConfigValue(storedValue);
      } catch (error) {
        console.warn('Error loading config value:', error);
      }
    };
    
    loadConfigValue();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleClearForm = () => {
    setShowClearModal(true);
  };

  const confirmClearForm = () => {
    window.location.reload();
  };

  const cancelClearForm = () => {
    setShowClearModal(false);
  };

  const handleConfigOpen = () => {
    setShowConfigModal(true);
  };

  const handleConfigSave = async (value: string) => {
    try {
      await store.set(CONFIG_KEYS.OZNACZENIE_DYSPONENTA, value);
      setConfigValue(value);
      setShowConfigModal(false);
      // Force refresh the form to update the HeaderFields component
      window.location.reload();
    } catch (error) {
      console.warn('Error saving config value:', error);
    }
  };

  const handleConfigCancel = () => {
    setShowConfigModal(false);
  };

  return (
    <>
      <div className="config-button-container no-print">
        <button onClick={handleConfigOpen} className="config-button" title="Konfiguracja">
          ⚙️
        </button>
      </div>
      
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
          <ObrazeniaCentrum />
          <ObrazeniaRightColumn />
          <HumanDiagram />
        </div>
      </div>
      
      <div className="print-button-container no-print">
        <button onClick={handleClearForm} className="clear-button">
          Wyczyść
        </button>
        <button onClick={handlePrint} className="print-button">
          Drukuj formularz
        </button>
      </div>
      
      <ConfirmationModal
        isOpen={showClearModal}
        title="Wyczyść formularz"
        message="Czy na pewno chcesz wyczyścić cały formularz? Wszystkie wprowadzone dane zostaną utracone."
        confirmText="Wyczyść"
        cancelText="Anuluj"
        onConfirm={confirmClearForm}
        onCancel={cancelClearForm}
      />
      
      <ConfigurationModal
        isOpen={showConfigModal}
        initialValue={configValue}
        onSave={handleConfigSave}
        onCancel={handleConfigCancel}
      />
    </>
  );
};

export default MedicalForm;