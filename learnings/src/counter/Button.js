import React from 'react';

const Button = function (props) {
  return <button onClick={props.onClick}>{props.name}</button>;
};

export default Button;
