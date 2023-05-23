let x, y;
let angle = 0;
let canvas;
function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('myCanvas');
  angleMode(DEGREES);
  background(10);
 
}

function draw() 
{ 
  frameRate(150);
  x = mouseX -15;
  y = mouseY;
  translate(x, y);
  rotate(angle)
  noFill()
  stroke(100,100,255, 150);
  arc(0,0, 30, 50, 0, 160);
  arc(30, 0, 30, 50,160, 0);
  
  angle = angle + 2;
}
 
function keyPressed()
{
  save("img.png");  
}