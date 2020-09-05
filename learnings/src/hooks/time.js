import React, { useState, useEffect } from 'react';

const useTimer = function () {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds(seconds + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return seconds;
};

export default () => {
  const seconds = useTimer();
  return <p>{seconds}</p>;
};
