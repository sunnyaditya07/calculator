let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
let decimalAdded = false;

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        input.value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        input.value = string;
        decimalAdded = false;
      } else if (e.target.innerHTML == "DEL") {
        string = string.slice(0, -1);
        input.value = string;
        decimalAdded = false;
      } else if (e.target.innerHTML == "%") {
        string = (Number(string) / 100).toString();
        input.value = string;
        decimalAdded = false;
      } else if (e.target.innerHTML == ".") {
        if (!decimalAdded) {
          string = string + e.target.innerHTML;
          input.value = string;
          decimalAdded = true;
        }
      } else {
        string = string + e.target.innerHTML;
        input.value = string;
        console.log(e.target);
      }
    } catch (err) {
      console.log(err);
      input.value = "Undefined";
    }
  });
});
