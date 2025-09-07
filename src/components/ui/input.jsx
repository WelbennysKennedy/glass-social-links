import React from 'react';

export const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 rounded-md border bg-transparent ${className}`}
      {...props}
    />
  );
};
export default Input;
