import React from 'react';
import '/src/assets/css/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="mug">
        <div className="vapor vapor1"></div>
        <div className="vapor vapor2"></div>
        <div className="vapor vapor3"></div>
        <div className="leaf"></div>
      </div>
      <p className="loading-text">Preparando o café... ☕</p>
    </div>
  );
};

export default Loader;