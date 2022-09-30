import React, { useRef, useState } from "react";

const useStartStop = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef();

  const start = () => {
    if (ref.current) return;
    ref.current = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  return { counter, pause, start };
};

export default useStartStop;
