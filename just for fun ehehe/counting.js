const opr = document.querySelectorAll(".opr-button");
const num = document.getElementById("num");

opr.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    let number = parseFloat(num.innerText);
    let oprStat = e.target.innerText;
    if (oprStat === "-" && number === 0) return;
    else if (oprStat === "-") {
      num.innerText = number - 1;
      console.log("ngurang");
    } else if (oprStat === "+") {
      num.innerText = number + 1;
      console.log("nambah");
    }
  });
});
