const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const height = myCanvas.height;
const width = myCanvas.width;

const center = {
  x: width / 2,
  y: height / 2,
};

function renderColor(hue) {
  return {
    darkest: `hsl(${hue}, 100%, 15%)`,
    dark: `hsl(${hue}, 100%, 30%)`,
    normal: `hsl(${hue}, 100%, 50%)`,
    light: `hsl(${hue}, 100%, 70%)`,
    lightest: `hsl(${hue}, 100%, 85%)`,
  };
}

drawBall(center.x, center.y, 100);

function drawBall(cx, cy, radius) {
  const hue = Math.random() * 360;
  const color = renderColor(hue);
  const grad = ctx.createRadialGradient(
    cx - radius * 0.3,
    cy - radius * 0.3,
    radius * 0.1,
    cx,
    cy,
    radius
  );

  grad.addColorStop(0, color.lightest);
  grad.addColorStop(0.3, color.dark);
  grad.addColorStop(1, color.darkest);

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy - radius * 0.95, radius * 0.2, Math.PI, 2 * Math.PI);
  ctx.strokeStyle = grad;
  ctx.lineWidth = 10;
  ctx.stroke();
}
