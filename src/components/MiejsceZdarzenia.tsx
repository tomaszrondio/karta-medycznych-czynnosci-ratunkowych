import React, { useState } from 'react';
import './MiejsceZdarzenia.css';

const MiejsceZdarzenia: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<string>('');

  const handlePlaceChange = (place: string) => {
    setSelectedPlace(place);
  };

  return (
    <div className="miejsce-container">
      {/* w domu */}
      <input 
        type="checkbox" 
        className="miejsce-checkbox checkbox-1"
        checked={selectedPlace === 'domu'}
        onChange={() => handlePlaceChange('domu')}
      />
      
      {/* w miejscu publicznym */}
      <input 
        type="checkbox" 
        className="miejsce-checkbox checkbox-2"
        checked={selectedPlace === 'publicznym'}
        onChange={() => handlePlaceChange('publicznym')}
      />
      
      {/* w ruchu uliczno-drog. */}
      <input 
        type="checkbox" 
        className="miejsce-checkbox checkbox-3"
        checked={selectedPlace === 'ruchu'}
        onChange={() => handlePlaceChange('ruchu')}
      />
      
      {/* w pracy */}
      <input 
        type="checkbox" 
        className="miejsce-checkbox checkbox-4"
        checked={selectedPlace === 'pracy'}
        onChange={() => handlePlaceChange('pracy')}
      />
      
      {/* w szkole */}
      <input 
        type="checkbox" 
        className="miejsce-checkbox checkbox-5"
        checked={selectedPlace === 'szkole'}
        onChange={() => handlePlaceChange('szkole')}
      />
      
      {/* w rolnictwie */}
      <input 
        type="checkbox" 
        className="miejsce-checkbox checkbox-6"
        checked={selectedPlace === 'rolnictwie'}
        onChange={() => handlePlaceChange('rolnictwie')}
      />
    </div>
  );
};

export default MiejsceZdarzenia;