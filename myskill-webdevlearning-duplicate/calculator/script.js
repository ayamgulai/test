const displayHistory = document.querySelector(".display-history");
const displayInput = document.querySelector(".display-input");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearEntity = document.querySelector(".clear-entity");

let num1 = "";
let num2 = "";
let res = "";
let opr = "";
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) haveDot = true;
    else if (e.target.innerText === "." && haveDot) return;
    num2 += e.target.innerText;
    displayInput.innerText = num2;
    console.log("gas");
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!num2) return;
    haveDot = false;
    const oprName = e.target.innerText;
    if (num1 && num2 && opr) {
      mathOperation();
    } else {
      result = parseFloat(num2);
    }
    tempResult.innerText = num2;
    clearVar(oprName);
    opr = oprName;
  });
});

function clearVar(name = "") {
  num1 += num2 + " " + name + " ";
  displayHistory.innerText = num1;
  displayInput.innerText = "";
  num2 = "";
}

function mathOperation() {
  if (opr === "*") res = parseFloat(num1) * parseFloat(num2);
  else if (opr === "/") res = parseFloat(num1) / parseFloat(num2);
  else if (opr === "+") res = parseFloat(num1) + parseFloat(num2);
  else if (opr === "-") res = parseFloat(num1) - parseFloat(num2);
  else if (opr === "%") res = parseFloat(num1) % parseFloat(num2);
  console.log(res);
}

equal.addEventListener("click", () => {
  if (!num2 || !num1) return;
  haveDot = false;
  mathOperation();
  clearVar();
  displayInput.innerText = res;
  tempResult.innerText = "";
  num2 = res;
  num1 = "";
});

clearAll.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  displayHistory.innerText = "";
  displayInput.innerText = "";
  res = "";
  tempResult.innerText = "";
});

clearEntity.addEventListener("click", () => {
  num2 = "";
  displayInput.innerText = "";
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  )
    clickNum(e.key);
  else if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "%"
  )
    clickOpr(e.key);
  else if (e.key === "Enter" || e.key === "=") clickEq();
});

function clickNum(key) {
  numbers.forEach((number) => {
    if (number.innerText === key) number.click();
  });
}

function clickOpr(key) {
  operations.forEach((operation) => {
    if (operation.innerText === key) operation.click();
  });
}

function clickEq() {
  equal.click();
}
