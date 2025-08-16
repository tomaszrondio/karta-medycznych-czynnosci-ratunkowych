import React, { useState } from 'react';
import './ConfigurationModal.css';

interface ConfigurationModalProps {
  isOpen: boolean;
  initialValue: string;
  onSave: (value: string) => void;
  onCancel: () => void;
}

const ConfigurationModal: React.FC<ConfigurationModalProps> = ({
  isOpen,
  initialValue,
  onSave,
  onCancel
}) => {
  const [value, setValue] = useState(initialValue);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="config-modal-overlay">
      <div className="config-modal-content">
        <h3>Konfiguracja</h3>
        <p>Oznaczenie dysponenta zespołu ratownictwa medycznego:</p>
        <textarea
          value={value}
          onChange={handleChange}
          placeholder="Wprowadź oznaczenie dysponenta..."
          rows={3}
        />
        <div className="config-modal-buttons">
          <button onClick={handleSave} className="config-save-btn">
            Zapisz
          </button>
          <button onClick={onCancel} className="config-cancel-btn">
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationModal;