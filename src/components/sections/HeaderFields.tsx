import React, { useEffect, useState } from 'react';
import './HeaderFields.css';
import { FormTextarea } from '../ui';
import { store, CONFIG_KEYS } from '../../utils/store';

const HeaderFields: React.FC = () => {
  const [oznaczenieDysponenta, setOznaczenieDysponenta] = useState('');

  useEffect(() => {
    // Load the stored value on component mount
    const loadStoredValue = async () => {
      try {
        const storedValue = await store.get(CONFIG_KEYS.OZNACZENIE_DYSPONENTA, '');
        setOznaczenieDysponenta(storedValue);
      } catch (error) {
        console.warn('Error loading stored value:', error);
      }
    };
    
    loadStoredValue();
  }, []);

  return (
    <>
      {/* Oznaczenie dysponenta zespolu ratownictwa medycznego (ZRM) */}
      <FormTextarea 
        className="field-1"
        defaultValue={oznaczenieDysponenta}
        placeholder="po prawej na górze jest ikonka i to pole można ustawić na stałe"
        key={oznaczenieDysponenta} // Force re-render when value changes
      />
      
      {/* Kod ZRM realizującego zlecenie: */}
      <FormTextarea 
        className="field-2"
      />
      
      {/* Nr zlecenia wyjazdu: */}
      <FormTextarea 
        className="field-3"
      />
    </>
  );
};

export default HeaderFields;