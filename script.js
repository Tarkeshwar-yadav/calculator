const input = document.getElementById("calc-display");
const buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (value === "AC") {
      string = "";
      input.value = string;
    } else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});
