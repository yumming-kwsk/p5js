/* =================================================== */

let sketch2;

function preload(){
  img = loadImage('texture928273_TP_V.jpg');
}

let angle = 0;
let lm;
let ceye = -20;
let goldX = -200;

let stars = [];

let palette = ['#d0a900', '#fff9e6', '#c39000'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(1);
  for (let i = 0; i < 45; i++) {
    stars[i] = new Star(random(width),random(height),random(0.05,0.2),random(0,5),4);
  }
}


function draw() {
  background(20);

  for (let i = 0; i < 45; i++) {
    stars[i].body();
    stars[i].move();
  }


  translate(width/2, height/2);


  let num = 48;
  let r = 160;
  for (let i = 0; i < num; i++) {
    let x = cos(360*i/num)*r;
    let y = sin(360*i/num)*r+10;
    stroke(255);
    if(i%4===0){
      line(0,0,x,y);
      noStroke();
      fill(255);
      circle(x,y,5);
    }else if(i%2 === 0){
      line(0,0,x*0.85,y*0.85);
      noStroke();
      fill(255);
      circle(x*0.85,y*0.85,5);
    }else{
      line(0,0,x*0.9,y*0.9);
      noStroke();
      fill(255);
      circle(x*0.9,y*0.9,5);
    }
  }




//eye
strokeWeight(5);
stroke(30);

fill(255);
beginShape();
vertex(-80, 0);
bezierVertex(-30, -50, 30, -50, 80, 0);
bezierVertex(30, 50, -30, 50, -80, 0);
endShape(CLOSE);

fill(30);
noStroke();
circle(0,0,73);
fill(255);
drawStar(0,0,30,32);
fill(20);
circle(0,0,30);
fill(255);
drawStar(0,0,8,24);
fill(255);
strokeWeight(1);
stroke(20);
circle(15,-12,15);

fill(20);
beginShape();
vertex(-80, 0);
bezierVertex(-30, -50, 30, -50, 80, 0);
bezierVertex(30, -20+ceye, -30, -20+ceye, -80, 0);
endShape(CLOSE);

fill(20);
noStroke();
triangle(-95,6,-50,-20,-75,5);
triangle(95,6,50,-20,75,5);
fill(255);
stroke(20);
drawDrop(0, 95, 40, 5);

ceye = map(sin(angle),-1,1,-5,70);
angle++;
// /eye

//moon
push();
noStroke();
fill(200);
circle(0,-240,100);
fill(20);
circle(0,-255,80);
fill(200);
drawStar(0,-260,20,8,angle);
pop();
// /moon

//Pramid
fill(200);
triangle(-120,height/2,0,height/2-120,120,height/2);
// /Pramid

//img 
push();
// tint(255,50);
blendMode(OVERLAY);
image(img,-width/2,-height/2,width,height);
pop();

//gra
push();
blendMode(MULTIPLY);
noStroke();

let gradientFill = drawingContext.createRadialGradient(
    -width/2,
    -height/2,
    width,
    height,
    width/2,
    height/2,
);

let gra = map(sin(frameCount),1,-1,0.1,0.9);

gradientFill.addColorStop(0, palette[0]);
gradientFill.addColorStop(gra, palette[1]);
gradientFill.addColorStop(0.5, palette[1]);
gradientFill.addColorStop(gra, palette[1]);
gradientFill.addColorStop(1, palette[0]);

drawingContext.fillStyle = gradientFill;
rect(0, 0, height);
pop();

}

// 星
function drawStar(x, y, r, prickleNum,ang) {
  let vertexNum = prickleNum * 2; // 頂点数(トゲの数*2)
  let R; // 中心点から頂点までの距離
  
  push();
  translate(x, y);
  rotate(ang);
  
  beginShape();
  for (let i = 0; i < vertexNum; i++) {
    R = i % 2 == 0 ? r : r / 4;
  
    vertex(R * cos(360 * i / vertexNum), R * sin(360 * i / vertexNum));
  }
  endShape(CLOSE);
  
  pop();
  }


  //雫
  function drawDrop(x, y, r, A) {
    push();
    translate(x, y);
    rotate(-90);
  
    beginShape();
    for (let theta = 0; theta < 360; theta++) {
      let R = r / (A * sin(theta / 2) + 1);
  
      vertex(R * cos(theta), R * sin(theta));
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
  drawStar(this.x,this.y,this.size,this.prick,90);
}

move(spd){
  this.size+=this.spd;
  if(this.size > this.spd*40){
    this.size = 0;
  }
}
}

new p5(sketch2, "container2");

