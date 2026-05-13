// Debouncing
let search = document.getElementById("searchText");
const getData = () => {
  console.log("Fetching data ..", search.value);
};

const debouncing = (fn, delay) => {
  let timer;
  return () => {
    let context = this,
      args = argumnents;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context);
    }, delay);
  };
};

const betterFunction = debouncing(getData, 300);

document
  .getElementById("searchText")
  .addEventListener("keyup", betterFunction());

// scroll event...
