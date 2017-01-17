const TIME = 10;

function generateColors() {
  const colors = {};
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  for (let i = 0; i < TIME; i++) {
    let color = randomColor();
    while (color in colors) {
      color = randomColor();
    }
    colors[color] = true;
  }
  return Object.keys(colors);
}

function changeBackground(colors) {
  const changeBackgroundInterval = setInterval(() => {
    if (colors.length === 0) {
      clearInterval(changeBackgroundInterval);
    }
    document.body.style.backgroundColor = colors.pop();
  },1000);
}

changeBackground(generateColors());
