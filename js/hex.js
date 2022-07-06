/* 
Random Hex Generator

Following the provided mockup, use HTML, CSS, and vanilla JS to create a project that generates a random background color when a button is clicked.

- Must contain the elements in the mock design and reflect said design
  - title (nav) bar
  - randomly generated hexadecmial color value
  - the background color of the content should reflect the random hex color
  - current hexadecimal value must be shown in plain text
  - at least 1 transition / psuedo effect
*/

const clickMeBtn = document.getElementById("click-me");
const hexText = document.getElementById("random-hex");

function randomHex() {
  const values = "0123456789ABCDEF";
  let hexString = "";

  for (let i = 0; i < 6; i++) {
    hexString += values[Math.floor(Math.random() * values.length)];
  }

  let hexColor = `#${hexString}`;

  document.body.style.background = hexColor;
  hexText.innerText = hexColor;
}

clickMeBtn.addEventListener("click", randomHex);
console.log(hexText);
