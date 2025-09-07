import React from 'react';

export const Label = ({ className = '', children, ...props }) => {
  return (
    <label className={`block mb-1 ${className}`} {...props}>
      {children}
    </label>
  );
};
export default Label;
