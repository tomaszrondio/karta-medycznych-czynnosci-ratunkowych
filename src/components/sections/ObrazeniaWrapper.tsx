import React, { useState, createContext, useContext } from 'react';
import './ObrazeniaWrapper.css';
import ObrazeniaRightColumn from './ObrazeniaRightColumn';
import ObrazeniaCentrum from './ObrazeniaCentrum';
import HumanDiagram from '../HumanDiagram';

interface ObrazeniaContextType {
  brakObrazen: boolean;
  setBrakObrazen: (value: boolean) => void;
  hasOtherInputs: boolean;
  setHasOtherInputs: (value: boolean) => void;
  setCenterCheckboxes?: (value: boolean) => void;
  setRightInputs?: (value: boolean) => void;
  setHumanDiagramLetters?: (value: boolean) => void;
}

const ObrazeniaContext = createContext<ObrazeniaContextType | undefined>(undefined);

export const useObrazeniaContext = () => {
  const context = useContext(ObrazeniaContext);
  if (!context) {
    throw new Error('useObrazeniaContext must be used within ObrazeniaWrapper');
  }
  return context;
};

const ObrazeniaWrapper: React.FC = () => {
  const [brakObrazen, setBrakObrazen] = useState<boolean>(false);
  const [centerCheckboxes, setCenterCheckboxes] = useState<boolean>(false);
  const [rightInputs, setRightInputs] = useState<boolean>(false);
  const [humanDiagramLetters, setHumanDiagramLetters] = useState<boolean>(false);

  const hasOtherInputs = centerCheckboxes || rightInputs || humanDiagramLetters;

  const setHasOtherInputs = (value: boolean) => {
    // This is a dummy function to maintain interface compatibility
    // Individual components will use their specific setters
  };

  return (
    <ObrazeniaContext.Provider value={{ 
      brakObrazen, 
      setBrakObrazen, 
      hasOtherInputs, 
      setHasOtherInputs,
      setCenterCheckboxes,
      setRightInputs,
      setHumanDiagramLetters
    }}>
      <div className={hasOtherInputs ? 'has-other-inputs' : ''}>
        <ObrazeniaCentrum />
        <ObrazeniaRightColumn />
        <HumanDiagram />
      </div>
    </ObrazeniaContext.Provider>
  );
};

export default ObrazeniaWrapper;