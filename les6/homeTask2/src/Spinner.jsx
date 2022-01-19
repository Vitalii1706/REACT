import React from 'react';


const Spinner = ({ size }) => {
   const style = { height: size, with: size, }
   return <span class="spinner" style={style} ></span>;
};

export default Spinner;