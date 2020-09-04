import React, { useEffect, useState } from 'react';

export default props => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds(seconds => seconds + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <p>{seconds} </p>;
};
