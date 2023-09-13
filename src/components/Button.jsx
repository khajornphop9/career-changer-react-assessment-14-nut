import React from 'react'

const Button = ({ handler, text }) => {
  return <button className='btn-section' onClick={handler}>{text}</button>;
};

export default Button

  