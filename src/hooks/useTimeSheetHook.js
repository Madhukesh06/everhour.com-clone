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
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let date = time.getDate();
  let day = days[time.getDay()];
  let month = months[time.getMonth()];

  return { hours, minutes, seconds, date, month, day };
};

export default useTimeSheetHook;
