import React from 'react';
import './FormCheckbox.css';

interface FormCheckboxProps {
  className: string;
  checked: boolean;
  onChange: () => void;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ className, checked, onChange }) => {
  return (
    <input 
      type="checkbox" 
      className={`form-checkbox ${className}`}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default FormCheckbox;