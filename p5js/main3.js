/* =================================================== */

let sketch3;

let r = 23;
let n = 20;

let oc = 110;
let ic = 60;

let maxDist;
let move = 0;

const palette = ['#912102', '#0A69B1', '#FFBA0B', '#fefef9'];//r,b,y,w

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  maxDist = dist(0, 0, width / 2, height / 2);
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  push();
  let v = createVector(mouseX - width / 2, mouseY - height/2);
  v.setMag(min(v.mag(), oc - ic));

  fill(palette[3]);
  drawWEye(0,0,oc * 2.2);
  // ellipse(0, 0, oc * 2);

  drawEye(v.x, v.y);
  pop();

  drawEyeOut(0, 0);



  let cSize = 35;
  let cols = width / cSize*2;
  let rows = height / cSize*2;
  noStroke();
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = r * cSize;
      let y = c * cSize;
      let d = dist(x, y, mouseX, mouseY);
      let nd = map(d, 0, maxDist, 0, 4);
      fill(palette[0]);
      // drawStar(-width / 2 + x, 280, nd, 6);
      // drawStar(-width / 2 + x, -280, nd, 6);
      drawStar(-width/2 + x, -height/2+40, nd, 6);
      drawStar(-width / 2 + x, height/2-40, nd, 6);
      fill(palette[2]);
      circle(x - width / 2, y - height / 2, 1);
    }
  }

  fill(palette[2]);
  drawStar(mouseX - width / 2, mouseY - height / 2, 18, 10);
  stroke(palette[1]);
  noFill();
  circle(mouseX - width / 2, mouseY - height / 2, 70);


}

function drawEye(x, y) {
  noStroke();
  fill(0);
  circle(x, y, ic * 2);

  translate(x, y);
  beginShape();
  for (let i = 0; i < 360; i += 5) {
    let sx = cos(i) * r;
    let sy = sin(i) * r;
    fill(palette[0]);
    noStroke();
    if (i % 2 === 0) {
      sx *= 2;
      sy *= 2;
    }
    vertex(sx, sy);

  }
  endShape(CLOSE);

  fill(0);
  circle(0, 0, ic / 2);
  fill(palette[3]);
  circle(0, 0, ic / 5);
 


}

function drawEyeOut(x, y) {
  translate(x, y);

  stroke(0);
  strokeWeight(60);
  noFill();
  circle(0, 0 - 55, height / 2.3);
  circle(0, 0 + 55, height / 2.3);

  stroke(palette[0]);
  strokeWeight(1);
  arc(0, -58, 245, 245, 28, 152);
  arc(0, 58, 245, 245, 208, -29);

  strokeWeight(1);
  stroke(palette[0]);
  circle(0, 0, height / 2.77);
  stroke(palette[1]);
  circle(0, 0, height / 1.9);


  for (let i = 0; i < 360; i += 9) {
    let sx = cos(i) * r * 3.2;
    let sy = sin(i) * r * 3.2;

    stroke(palette[2]);
    strokeWeight(1);
    if (i % 2 === 0) {
      sx *= 1.1;
      sy *= 1.1;
    }
    line(sx * 1.6, sy * 1.6, sx * move, sy * move);
  }
  move = map(sin(frameCount), -1, 1, 2, 2.7);
  noStroke();
  fill(palette[0]);
  circle(0, -85, 20);
  circle(0, 85, 20);

}


// 星
function drawStar(x, y, r, prickleNum) {
  let vertexNum = prickleNum * 2; // 頂点数(トゲの数*2)
  let R; // 中心点から頂点までの距離

  push();
  translate(x, y);
  rotate(-90);

  beginShape();
  for (let i = 0; i < vertexNum; i++) {
    R = i % 2 == 0 ? r : r / 2;

    vertex(R * cos(360 * i / vertexNum), R * sin(360 * i / vertexNum));
  }
  endShape(CLOSE);

  pop();
}

function drawWEye(x,y,r){
  // noFill();
  stroke(255,0,0);
  arc(x,y-r/4,r,r,30,150);
  arc(x,y+r/4,r,r,210,330);
  }




new p5(sketch3, "container3");
