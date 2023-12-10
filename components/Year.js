import React from 'react';

const Year = () => {
  const currentYear = new Date().getFullYear();

  return <span>{currentYear}</span>;
};

export default Year;
