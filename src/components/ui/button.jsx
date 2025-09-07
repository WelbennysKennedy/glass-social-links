import React from 'react';

export const Button = ({ className = '', children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
