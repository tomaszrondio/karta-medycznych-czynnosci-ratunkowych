import React, { useState, useRef, useEffect } from 'react';
import './FormTextarea.css';

interface FormTextareaProps {
  className: string;
  placeholder?: string;
  defaultValue?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ className, placeholder, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || '');
  const [fontSize, setFontSize] = useState(16);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustFontSize = () => {
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
  };

  useEffect(() => {
    adjustFontSize();
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      className={`form-textarea ${className} ${value.trim() ? 'has-content' : ''}`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ fontSize: `${fontSize}px` }}
    />
  );
};

export default FormTextarea;