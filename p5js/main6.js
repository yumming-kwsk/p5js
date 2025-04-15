/* =================================================== */

let sketch6;

let tx, ty;
let circles;
let angle = 0;
palette = ['#0068B7','#E60012'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  circles = [];
  for (let i = 0; i < 14; i++) {
    const x = random(width);
    const y = random(height);
    const r = random(35,65);
    circles.push({ x, y, r });
  }
}

function draw() {
  background(225,225,235);
  tx = mouseX;
  ty = mouseY;
  circles.forEach((c) => {
    drawCircle(c);
  });
  drawTarget();
}

function drawCircle(c) {
  noStroke();
  fill(palette[1]);
  circle(c.x, c.y, c.r * 2);
  const rad = atan2(ty - c.y, tx - c.x);
  if(floor(c.x)%2===0){
    fill(255);
    circle(c.x + cos(rad) * (c.r*0.4), c.y + sin(rad) * (c.r*0.4), c.r);
    fill(palette[0]);
    circle(c.x + cos(rad) * (c.r*0.65), c.y + sin(rad) * (c.r*0.65), c.r*0.45);
  }
  c.r += map(sin(angle),-50,50,-10,10);
  angle+=0.002;
}

function drawTarget() {
  strokeWeight(3);
  stroke(palette[0]);
  line(tx - 15, ty, tx + 15, ty);
  line(tx, ty - 15, tx, ty + 15);
}
    

    new p5(sketch6, "container6");