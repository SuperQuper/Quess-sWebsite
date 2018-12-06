var x;
var y;
var slider;


function setup() {
 var canvas= createCanvas(600, 600);
 canvas.parent('header')
x = width / 2;
y= height; 


}

function draw() {
  background(57, 178, 52);
 
var g1 = map(mouseX,0,width,0,255)
	

//	
fill(20,17,17)
rect(x-20,0,40,600) 
	
fill(218, 212, 54)
rect(x-3.5, 6, 7,40)

fill(218, 212, 54)
rect(x-3.5, 105, 7,40)
	
fill(218, 212, 54)
rect(x-3.5, 205, 7,40)	
	
fill(218, 212, 54)
rect(x-3.5, 305, 7,40)	
	
fill(218, 212, 54)
rect(x-3.5, 405, 7,40)	
		
fill(218, 212, 54)
rect(x-3.5, 505, 7,40)	
	
	
//
stroke(100);
fill( g1,0 ,255);
	
	console.log();
ellipse(x,y,27,45)
y=y+6
if (y<0) {
y= height;}
if (y>height){
y=0
} 
}