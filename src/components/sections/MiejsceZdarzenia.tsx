import React, { useState } from 'react';
import './MiejsceZdarzenia.css';
import { FormCheckbox } from '../ui';

const MiejsceZdarzenia: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<string>('');

  const handlePlaceChange = (place: string) => {
    setSelectedPlace(place);
  };

  return (
    <div className={`miejsce-container ${selectedPlace ? 'has-selection' : ''}`}>
      {/* w domu */}
      <FormCheckbox 
        className="checkbox-1"
        checked={selectedPlace === 'domu'}
        onChange={() => handlePlaceChange('domu')}
      />
      
      {/* w miejscu publicznym */}
      <FormCheckbox 
        className="checkbox-2"
        checked={selectedPlace === 'publicznym'}
        onChange={() => handlePlaceChange('publicznym')}
      />
      
      {/* w ruchu uliczno-drog. */}
      <FormCheckbox 
        className="checkbox-3"
        checked={selectedPlace === 'ruchu'}
        onChange={() => handlePlaceChange('ruchu')}
      />
      
      {/* w pracy */}
      <FormCheckbox 
        className="checkbox-4"
        checked={selectedPlace === 'pracy'}
        onChange={() => handlePlaceChange('pracy')}
      />
      
      {/* w szkole */}
      <FormCheckbox 
        className="checkbox-5"
        checked={selectedPlace === 'szkole'}
        onChange={() => handlePlaceChange('szkole')}
      />
      
      {/* w rolnictwie */}
      <FormCheckbox 
        className="checkbox-6"
        checked={selectedPlace === 'rolnictwie'}
        onChange={() => handlePlaceChange('rolnictwie')}
      />
    </div>
  );
};

export default MiejsceZdarzenia;