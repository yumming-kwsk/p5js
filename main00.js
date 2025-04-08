let sketch0;

let r = 80;
let angle = 0;
let cSize = 1;

let palette = ['#7ae582','#ff006e','#8338ec','#3a86ff'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  textFont("Raleway Dots");
  frameRate(16);
}


function draw() {

background(0);
push();
// background(255);
translate(width/2, height/2-50);
let bs = map(sin(angle),-1,1,0.85,1.1);
scale(bs,bs);
for (let i = 0; i < 4; i++) {
  fill(palette[i]);
  drawSippo(0,0);
  rotate(80);
}
angle+=2;
pop();
fill(255);
textAlign(CENTER);
textSize(22);
let fc = floor(random(4));
fill(palette[fc]);
text('G e n e r a t i v e  A r t', width/2,height-120);

}

function drawSippo(x,y){
  push();
translate(x, y);
noStroke();
blendMode(ADD);
drawingContext.filter = 'blur(10px)';
  for (let i = 0; i < 180; i+=180/10) {
    let k = 6;
    let x = cos(angle+i)*r*cos(i*k);
    let y = sin(angle+i)*r;
    circle(x,y,(i));
  }
  
  pop();
}


/* =================================================== */

new p5(sketch0, "container0");
