import React, { useEffect, useState } from 'react';

export default props => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => setSeconds(seconds => seconds + 1), 1000);
  }, []);

  return <p>{seconds} </p>;
};
