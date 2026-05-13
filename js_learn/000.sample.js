let counter = 0;
const getData = () => {
  console.log("Fetch APi...", counter++);
};

const controlTiming = (fn, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const betterFunction = controlTiming(getData, 300);
