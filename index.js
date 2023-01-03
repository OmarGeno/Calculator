let divs = Array.from(document.getElementsByClassName("box"));
let dispaly = document.getElementById("display");

const clickHandler = (e) => {
  switch (e.target.innerText) {
    case "C":
      dispaly.innerText = "";
      break;
    case "←":
      if (dispaly.innerText) {
        dispaly.innerText = dispaly.innerText.slice(0, -1);
      }
      break;
    case "=":
      dispaly.innerText = eval(dispaly.innerText);
      break;
    default:
      dispaly.innerText += e.target.innerText;
  }
};

divs.map((div) => {
  div.addEventListener("click", clickHandler);
});

// const sum = (a, b) => {
//   return a + b;
// };
// const divide = (a, b) => {
//   return a / b;
// };
// const multiple = (a, b) => {
//   return a * b;
// };
// const difference = (a, b) => {
//   return a - b;
// };

// const calculate = (x, y, functionName) => {
//   return functionName(x, y);
// };

// console.log(calculate(50, 20, sum))
