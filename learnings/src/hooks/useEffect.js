import React, { useEffect, useState } from 'react';

export default props => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    document.title = `${seconds} seconds passed`;
  });

  useEffect(() => {
    const id = setInterval(() => setSeconds(seconds => seconds + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <p>{seconds} </p>;
};
