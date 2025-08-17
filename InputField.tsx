import React, { useState } from 'react';
import { InputFieldProps } from './InputField.types';

const sizeClasses = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-3 py-2',
  lg: 'text-lg px-4 py-3'
};

const variantClasses = {
  filled: 'bg-gray-100 dark:bg-gray-800 border border-transparent',
  outlined: 'border border-gray-300 dark:border-gray-600',
  ghost: 'bg-transparent border border-transparent'
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  clearable = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={`w-full rounded-md focus:outline-none focus:ring-2 
            ${sizeClasses[size]} ${variantClasses[variant]} 
            ${invalid ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'} 
            ${disabled ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed' : ''}
          `}
        />
        {clearable && value && (
          <button
            type="button"
            onClick={() => onChange?.({ target: { value: '' } } as any)}
            className="absolute right-10 text-gray-500 hover:text-gray-700"
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-gray-500 hover:text-gray-700"
            aria-label="Toggle password visibility"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
        {loading && (
          <div className="absolute right-2 animate-spin text-gray-500">
            ⏳
          </div>
        )}
      </div>
      {helperText && !errorMessage && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {errorMessage && (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
