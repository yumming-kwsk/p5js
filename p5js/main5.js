/* =================================================== */

let sketch5;


//配列の個数
let num = 36;
let balls = [];
let angle = 0;


const palette = ['#7678ED', '#0DFFDF','#FF75EA', '#944BBB'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);


  for (let i = 0; i < num; i++) {
    if(i%5 === 0){
    balls[i] = new Pranet2();
    }else if(i%3 === 0){
    balls[i] = new Star();
    }else if(i%2 === 0){
    balls[i] = new Pranet();
    } else {
    balls[i] = new Ball();
    }
  }
}


function draw() {
    background(0,20,40);
   
    stroke(150,170,190);
    for (let i = 0; i < 500; i++) {
      const x = random(width);
      const y = random(height);
      point(x, y);
    }

  for (let i = 0; i < num; i++) {
    balls[i].update();
    balls[i].display();
  }

    angle+=0.5;


}

//クラスの記述
class Ball {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.sx = random(-3, 3);
    this.sy = random(-3, 3);
    this.d = random(12, 24);
    this.color = floor(random(palette.length))%palette.length;
  }
  //スピードや跳ね返りなどの数値計算
  update() {
    //xyにスピードを加算
    this.x = this.x + this.sx;
    this.y = this.y + this.sy;

    if (this.x > width) { //ｘが画面幅よりも大きいとき
      this.sx = this.sx * -1;
    }
    if (this.x < 0) { //ｘが画面幅よりも大きいとき
      this.sx = this.sx * -1;
    }
    if (this.y > height) { //ｘが画面幅よりも大きいとき
      this.sy = this.sy * -1;
    }
    if (this.y < 0) { //ｘが画面幅よりも大きいとき
      this.sy = this.sy * -1;
    }
  }
 
  display() {
    fill(palette[this.color]);
    noStroke();
    drawHeart(this.x,this.y,this.d/20);
  }

}

class Star extends Ball {
  constructor(){
    super();
  }
  update(){
    super.update();
  }
   display(){
    fill(255);
    drawStar(this.x,this.y,this.d/1.6,4); 
   }
}

class Pranet extends Ball {
  constructor(){
    super();
  }
  update(){
    super.update();
  }
   display(){
    drawPranet(this.x,this.y,this.d*1.8); 
   }
}

class Pranet2 extends Ball {
  constructor(){
    super();
  }
  update(){
    super.update();
  }
   display(){
    drawPranet2(this.x,this.y,this.d*1.5); 
   }
}



function drawStar(x, y, r, prickleNum) {
  let vertexNum = prickleNum * 2; // 頂点数(トゲの数*2)
  let R; // 中心点から頂点までの距離

  push();
  translate(x, y);
  rotate(angle);
  beginShape();
  for (let i = 0; i < vertexNum; i++) {
    R = i % 2 == 0 ? r*1.4 : r / 3.5;
    vertex(R * cos(360 * i / vertexNum), R * sin(360 * i / vertexNum));
  }
  endShape(CLOSE);
  pop();

}

function drawAstroid(ox, oy, r, vertexNum) {
  vertexNum -= 1;
  
  push();
  translate(ox, oy);
  // rotate(angle);
  beginShape();
  for (let theta = 0; theta < 360; theta++) {
    let x = r * (vertexNum * cos(theta) + cos(-vertexNum * theta));
    let y = r * (vertexNum * sin(theta) + sin(-vertexNum * theta));
    vertex(x, y);
  }
  endShape();
  pop();
  }
  

  function drawPranet(ox, oy, r) {
    push();
    translate(ox, oy);
    rotate(angle);

    noStroke();
    fill(palette[2]);
    circle(0,0,r);
    noFill();
    stroke(palette[1]);
    strokeWeight(2);
    arc(0,0,r/2.5,r*1.8,-110,110);
    pop();
    }


    //ダイヤモンド
	function drawDiamond(x, y, r) {
		let R;
	  
		push();
		translate(x, y);
	  
		beginShape();
		for (let i = 0; i < 4; i++) {
		  if (i % 2 == 0) {
			R = r / 5;
		  } else {
			R = r;
		  }
		  vertex(R * cos(90 * i), R * sin(90 * i));
		}
		endShape(CLOSE);
	  
		pop();
	  }

  function drawPranet2(ox, oy, r) {
    push();
    translate(ox, oy);
    rotate(angle);

    noFill();
    stroke(palette[0]);
    ellipse(0,0,r,r*2);
    rotate(90);
    stroke(palette[3]);
    ellipse(0,0,r,r*2);

    pop();
    }
    
    function drawHeart(ox, oy, size) {
      push();
      translate(ox, oy);
    
      // rotate(angle);
      beginShape();
      for (let theta = 0; theta < 360; theta++) {
      let x = size * (16 * sin(theta) * sin(theta) * sin(theta));
      let y = (-1) * size * (13 * cos(theta) - 5 * cos(2 * theta) -
        2 * cos(3 * theta) - cos(4 * theta));
    
      vertex(x, y);
      }
      endShape(CLOSE);
    
      pop();
    }
    
  
    

    new p5(sketch5, "container5");