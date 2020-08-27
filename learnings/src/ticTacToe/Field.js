import React from 'react';

const Field = function (props) {
  return (
    <div className='field' onClick={() => props.onClick(props.id)}>
      <span className='value'>{props.value}</span>
    </div>
  );
};

export default Field;
