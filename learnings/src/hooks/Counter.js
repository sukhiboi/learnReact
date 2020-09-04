import React, { useState } from 'react';

export default props => {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCounter(count - 1)}>-</button>
    </div>
  );
};
