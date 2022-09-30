const setTime = (count) => {
  if (count < 10) {
    return `0${count}`;
  }
  return `${count}`;
};

const ActionTimer = (count) => {
  const sec = count % 60;
  const min = Math.floor(count / 60) % 60;
  const hr = Math.floor(count / 3600) % 60;
  return `${setTime(hr)} : ${setTime(min)} : ${setTime(sec)}`;
};

export default ActionTimer;
