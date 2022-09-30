import React, { useState } from "react";

const useTimeSheetHook = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    let curDate = new Date();
    setTime(curDate);
  }, 1000);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  return { hours, minutes, seconds };
};

export default useTimeSheetHook;
