import React from 'react';
import './FormCheckbox.css';

interface FormCheckboxProps {
  className: string;
  checked: boolean;
  onChange: () => void;
  isRequired?: boolean;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ className, checked, onChange, isRequired = true }) => {
  return (
    <input 
      type="checkbox" 
      className={`form-checkbox ${className} ${isRequired ? 'required' : 'not-required'}`}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default FormCheckbox;