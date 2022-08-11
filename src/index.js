const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
const bg = document.body;
const btn = document.querySelector("button");

btn.addEventListener("click", handleClickBtn);

function handleClickBtn(event) {
  event.preventDefault();
  const left = colors[Math.floor(colors.length * Math.random())];
  const right = colors[Math.floor(colors.length * Math.random())];

  bg.style.background = "linear-gradient(90deg," + left + "," + right + ")";
}
