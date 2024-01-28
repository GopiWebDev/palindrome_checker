const checkBtn = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");
const resultText = document.createElement("p");

checkBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  }

  check(textInput.value);
});

function check(str) {
  const regex = /[^a-z0-9]/g;
  const processedString = str.toLowerCase().replace(regex, "");
  const revStr = processedString.split("").reverse().join("");
  if (revStr === processedString && str !== "") {
    resultText.textContent = `${str} is a palindrome`;
    result.appendChild(resultText);
  } else {
    if (str !== "") {
      resultText.textContent = `${str} is not a palindrome`;
      result.appendChild(resultText);
    }
  }
}
