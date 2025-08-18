import React, { useState, useRef, useEffect, useCallback } from 'react';
import './FormTextarea.css';

interface FormTextareaProps {
  className: string;
  placeholder?: string;
  defaultValue?: string;
  isRequired?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ className, placeholder, defaultValue, isRequired = true, value: controlledValue, onChange }) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [fontSize, setFontSize] = useState(16);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const adjustFontSize = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea || !value.trim()) return;

    let currentFontSize = 16;
    textarea.style.fontSize = `${currentFontSize}px`;

    // Check if content overflows
    while (textarea.scrollHeight > textarea.clientHeight && currentFontSize > 8) {
      currentFontSize -= 1;
      textarea.style.fontSize = `${currentFontSize}px`;
    }

    setFontSize(currentFontSize);
  }, [value]);

  useEffect(() => {
    adjustFontSize();
  }, [value, adjustFontSize]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e); // Call parent's onChange if provided
    } else {
      setInternalValue(e.target.value); // Use internal state if uncontrolled
    }
  };

  return (
    <textarea
      ref={textareaRef}
      className={`form-textarea ${className} ${value.trim() ? 'has-content' : ''} ${isRequired ? 'required' : 'not-required'}`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ fontSize: `${fontSize}px` }}
    />
  );
};

export default FormTextarea;