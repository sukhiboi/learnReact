import React from 'react';

const Base = ({ value, base, onChange }) => {
  const convertedValue = value ? value.toString(base) : '';
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '10px 0' }}>
      <span style={{ padding: 10 }}>Base {base}</span>
      <input value={convertedValue} onChange={e => onChange(e, base)} />
    </div>
  );
};

export default Base;
