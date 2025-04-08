let sketch1;

let result = document.getElementById('result');

function preload(){
  img = loadImage('4020198_m.jpg');
}

let angle = 0;
let lm;

let stars = [];

let palette = ['#0E0622', '#623FBD', '#EAFF80', '#D3FF32'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  for (let i = 0; i < 45; i++) {
    stars[i] = new Star(random(width),random(height),random(0.05,0.2),random(0,5),4);
  }
}


function draw() {
  background(palette[0]);

  for (let i = 0; i < 45; i++) {
    stars[i].body();
    stars[i].move();
  }


  translate(width/2, height/2);

  // line(0,-height/2,0,height/2);

  fill(palette[0]);
  push();
  drawingContext.filter = 'blur(6px)';
  noStroke();
  circle(0,0,290);
  pop();
  
  push();
  rotate(-angle/2);
  let sR = 110;
  let sNum = 32;
  for (let i = 0; i < sNum; i++) {
    let x = cos(360*i/sNum)*sR;
    let y = sin(360*i/sNum)*sR;
    fill(255);
    noStroke();
    circle(x*0.45,y*0.45,1);
   
    if(i%2===0){
      noFill();
      stroke(255);
      line(x*0.55, y*0.55, x*0.65, y*0.65);
      line(x*0.7, y*0.7, x*0.75, y*0.75);
      // line(x*1.1, y*1.1,x*1.2, y*1.2);
    }else{
      noFill();
      stroke(255);
      line(x*0.5, y*0.5, x*lm, y*lm);
      fill(255);
      noStroke();
      circle(x*(lm+0.2), y*(lm+0.2),2); 
    }
    if(i%6 === 0){
      fill(255);
      noStroke();
      drawStar(x*2.6,y*2.6,6,6);
    }else{
      circle(x*2.6,y*2.6,1);
    }
  }

  lm = map(sin(angle*3),-1,1,0.6,0.7);

  noFill();
  stroke(255);
  circle(0,0,80);

  // rect(0,0,300);
  rotate(angle);
  circle(0,0,280);
  fill(255);
  noStroke();
  circle(0,140,40);
  circle(0,-140,24);
  circle(0,0,65);
  pop();

  fill(255);
  noStroke();
  drawStar(0,195,14,8);
  drawStar(0,-205,14,8);
  circle(0,500,500);
  drawStar(0,-285,20,2);
  fill(palette[0]);
  drawStar(0,290,24,2);
  noFill();
  stroke(255);
  circle(0,500,520);
  // circle(0,-275,50);
  angle+=0.5;

  push();
  translate(-width/2,-height/2);
  blendMode(MULTIPLY);
  image(img,0,0,width,height);
  pop();

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
    R = i % 2 == 0 ? r : r / 3;
  
    vertex(R * cos(360 * i / vertexNum), R * sin(360 * i / vertexNum));
  }
  endShape(CLOSE);
  
  pop();
  }


class Star {
 constructor(x,y,spd,size,prick){
  this.x = x;
  this.y = y;
  this.spd = spd;
  this.size = size;
  this.prick = prick;
}
body(){
  stroke(255);
  drawStar(this.x,this.y,this.size,this.prick);
}

move(spd){
  this.size+=this.spd;
  if(this.size > this.spd*40){
    this.size = 0;
  }
}
}


/* =================================================== */

new p5(sketch1, "container1");
// new p5(sketch2, "container2");




