/* =================================================== */

let sketch4;


function preload(){
  img = loadImage('cropai20246130000020image.jpg');
}

let angle = 0;
let star = 0;

let palette = ['#0b2545', '#bcb4cc', '#ffffff'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}


function draw() {

  background(0);


  let sp = 60;
  rect(width/2,height/2,width-sp,height-sp);
  fill(0);
  rect(width/2,height/2,width-sp-2,height-sp-2);

  push();
  translate(width/2, height/2);

  push();
  let num = 60;
  let r = 150;
  for (let i = 0; i < num; i++) {
    let move = map(sin(frameCount*((i+num)/25)),-1,1,1,1.1);
    stroke(palette[2]);
    noFill();
    let x = cos(360*i/num)*r;
    let y = sin(360*i/num)*r;
    if(i%6===0){
      line(x*0.5,y*0.5,x*0.9*move,y*0.9*move);
    } else if(i%2===0){
      line(x*0.55,y*0.55,x*0.8*move,y*0.8*move);
    } else {
      line(x*0.5*move,y*0.5*move,x*0.7*move,y*0.7*move);
    }
   }

    let fixed_r = 170;
    for (let i = 0; i < 16; i++) {
      let sX = cos(star/i)*fixed_r;
      let sY = sin(star/i)*fixed_r;
      fill(palette[2]);
      noStroke();
      if(i%4===0){
        drawStar(sX,sY,18,8);
      }else if(i%3===0){
        circle(sX,sY,20);
      }else{
        circle(sX,sY,8);
      }
        circle(sX*-1.15,sY*1.15,2);
        circle(sX*1.15,sY*-1.15,2);
    }
    star+=2;
   stroke(palette[2]);
   noFill();
   circle(0,0,fixed_r*2);
   circle(0,0,fixed_r*1.1);

  rotate(angle);

pop();

fill(0);
noStroke();
circle(0,0,100);
let keyC = map(sin(frameCount),-1,1,120,255);
  fill(keyC,keyC-30,255);
  noStroke();
  circle(0,-30,45);
  triangle(-22, 45, 0, -50, 22, 45);
  pop();


  fill(0);
  noStroke();
  circle(sp/1.5,sp/1.5,sp*1.4);
  circle(width-sp/1.5,sp/1.5,sp*1.4);
  circle(width-sp/1.5,height-sp/1.5,sp*1.4);
  circle(sp/1.5,height-sp/1.5,sp*1.4);


  drawKey(sp/1.5,sp/1.5,32,-45);
  drawKey(width-sp/1.5,sp/1.5,32,45);
  drawKey(width-sp/1.5,height-sp/1.5,32,135);
  drawKey(sp/1.5,height-sp/1.5,32,-135);

  fill(palette[2]);
  noStroke();
  circle(sp/2,sp+sp/3,sp/8);
  circle(sp+sp/3,sp/2,sp/8);
  circle(width-sp/2,sp+sp/3,sp/8);
  circle(width-sp-sp/3,sp/2,sp/8);
  circle(sp/2,height-sp-sp/3,sp/8);
  circle(sp+sp/3,height-sp/2,sp/8);
  circle(width-sp/2,height-sp-sp/3,sp/8);
  circle(width-sp-sp/3,height-sp/2,sp/8);
  

push();
blendMode(DARKEST);
// blendMode(SCREEN);
image(img,0,0,width,height);
pop();


}

// 星
function drawStar(x, y, r, prickleNum) {
  let vertexNum = prickleNum * 2; // 頂点数(トゲの数*2)
  let R; // 中心点から頂点までの距離
  
  push();
  translate(x, y);
  rotate(angle);
  
  beginShape();
  for (let i = 0; i < vertexNum; i++) {
    R = i % 2 == 0 ? r : r / 4;
  
    vertex(R * cos(360 * i / vertexNum), R * sin(360 * i / vertexNum));
  }
  endShape(CLOSE);
  
  pop();
  }


//KEY
function drawKey(x,y,r,ang){
  push();
  translate(x,y);
  rotate(ang)
   noStroke();
   fill(palette[2]);
   circle(0,0,r);
   rect(0,0+r,r/10,r*2);
   rect(0-r/8,0+r*1.4,r/3,r/5);
   rect(0-r/10,0+r*1.6,r/8,r/5);
   rect(0-r/8,0+r*1.8,r/3,r/5);
   fill(0);
   circle(0,0,r*0.85);
   fill(palette[2]);
   drawStar(0,0,r/3,4);
   drawStar(0,r*3.3,r/2,4);
   stroke(palette[2]);
   noFill();
   strokeWeight(1.5);
   circle(0,0,r*1.5);
   
   pop();
}


new p5(sketch4, "container4");