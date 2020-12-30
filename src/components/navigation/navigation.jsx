import React from 'react';
import './navigation.css';
import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

const Navigation = (props) => {
  const { previousSlide, nextSlide } = props;
  return (
    <nav className="navigation">
      <button type="button" className="previousSlide" onClick={previousSlide}>
        <img src={arrowLeft} alt="Left"/>
      </button>
      <button type="button" className="nextSlide" onClick={nextSlide}>
        <img src={arrowRight} alt="Right"/>
      </button>
    </nav>
  );
};

export default Navigation;
