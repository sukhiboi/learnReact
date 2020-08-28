import React from 'react';

const BaseConvertor = props => {
  const value = props.value ? Number(props.value).toString(props.base) : '';
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '10px 0' }}>
      <span style={{ padding: 10 }}>Base {props.base}</span>
      <input value={value} onChange={e => props.onChange(e, props.base)} />
    </div>
  );
};

export default BaseConvertor;
