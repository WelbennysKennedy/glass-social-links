import React from 'react';

export const Card = ({ className = '', children }) => {
  return (
    <div className={`rounded-xl border border-white/10 bg-white/5 ${className}`}>
      {children}
    </div>
  );
};
export default Card;
