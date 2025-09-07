import React from 'react';

export const Badge = ({ className = '', children }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${className}`}>
      {children}
    </span>
  );
};
export default Badge;
