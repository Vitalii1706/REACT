import React from 'react';

const Spinner = ({ size }) => {
  const style = { height: size, with: size };
  return <span className="spinner" style={style}></span>;
};

export default Spinner;
