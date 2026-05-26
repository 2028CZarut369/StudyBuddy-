// components/Button.jsx
import React from 'react';

const variants = {
  primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600',
  secondary: 'bg-white/80 text-gray-700 border-2 border-gray-200 hover:bg-white',
  success: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
  danger: 'bg-gradient-to-r from-red-400 to-rose-500 text-white',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = "",
  ...props
}) {
  return (
    <button
      className={`cute-button ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
