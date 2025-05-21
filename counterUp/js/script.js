let counter = document.querySelectorAll(".counterUp");
// console.log(counter.dataset.number);

let arr = Array.from(counter);
arr.map((item) => {
  // console.log(item.dataset.number);
  let count = 0;
  function counterRun() {
    count++;
    item.innerHTML = count;
    if (count == item.dataset.number) {
      clearInterval(stopCount);
    }
  }

  let stopCount = setInterval(() => {
    counterRun();
  }, 1000/item.dataset.number);
});
