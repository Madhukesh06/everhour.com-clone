import React, { useState } from "react";

const useTimeSheetHook = () => {
  const [time, setTime] = useState(new Date());
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  setInterval(() => {
    let curDate = new Date();
    setTime(curDate);
  }, 1000);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let date = time.getDate(d);
  let month = months[time.getMonth()];

  return { hours, minutes, seconds, date, month };
};

export default useTimeSheetHook;
