import React from 'react';

const Field = function (props) {
  return (
    <div className='field' onClick={() => props.onClick(props.id)}>
      <span className='symbol'>{props.symbol}</span>
    </div>
  );
};

export default Field;
