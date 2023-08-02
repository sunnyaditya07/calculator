let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
let decimalAdded = false;

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        if (string === "" || string === "0") {
          input.value = "0";
        } else {
          string = eval(string);
          input.value = string;
        }
      } else if (e.target.innerHTML == "AC") {
        string = "";
        input.value = string;
        decimalAdded = false;
        evaluationDone = false;
      } else if (e.target.innerHTML == "DEL") {
        string = string.slice(0, -1);
        input.value = string;
        decimalAdded = false;
        evaluationDone = false;
      } else if (e.target.innerHTML == "%") {
        string = (Number(string) / 100).toString();
        input.value = string;
        decimalAdded = false;
        evaluationDone = false;
      } else if (e.target.innerHTML == ".") {
        if (!decimalAdded) {
          string = string + e.target.innerHTML;
          input.value = string;
          decimalAdded = true;
        }
      } else {
        if (string === "0") {
          string = "";
        }
        string = string + e.target.innerHTML;
        input.value = string;
      }
    } catch (err) {
      console.log(err);
      input.value = "Undefined";
    }
  });
});
