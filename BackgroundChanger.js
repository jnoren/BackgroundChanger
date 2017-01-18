const TOTAL_APP_RUN_TIME = 10;
const SPEED_COLORS_CHANGE = 1;

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function generateColors() {
  const colors = {};
  const colorCount = Math.round(
    TOTAL_APP_RUN_TIME / SPEED_COLORS_CHANGE
  );

  for (let i = 0; i < colorCount; i++) {
    let color = randomColor();
    while (color in colors) {
      color = randomColor();
    }
    colors[color] = true;
  }
  return Object.keys(colors);
}

function changeBackground(colors) {
  const speedColorsChange = SPEED_COLORS_CHANGE * 1000;
  const changeBackgroundInterval = setInterval(() => {
    if (colors.length === 0) {
      clearInterval(changeBackgroundInterval);
    }
    document.body.style.backgroundColor = colors.pop();
  }, speedColorsChange);
}

(function run() {
  const colors = generateColors();
  changeBackground(colors);
})();
