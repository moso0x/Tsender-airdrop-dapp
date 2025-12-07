'use client';

import React from 'react';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  type?: InputType;
  large?: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export function InputField({
  label,
  placeholder,
  value,
  type = 'text',
  large = false,
  onChange,
  disabled = false,
  required = false,
  className = '',
}: InputFieldProps) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  const inputStyles = `
    w-[30%] flex mx-auto px-4 py-3 
    border border-gray-300 rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition-all duration-200
    ${disabled ? 'bg-gray-50 cursor-not-allowed opacity-60' : 'bg-white hover:border-gray-400'}
    ${className}
  `;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className=" mt-8 block flex mx-auto justify-center text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {large ? (
        <textarea
          id={inputId}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={4}
          className={`${inputStyles} resize-vertical min-h-[100px]`}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputStyles}
        />
      )}
    </div>
  );
}