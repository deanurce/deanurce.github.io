function setup() {
  // put setup code here

	createCanvas(600,400);
}

function draw() {
  // put drawing code here
	background('blue');	
	ellipse(mouseX,mouseY,40,40);
	textSize(32);
	text("Happy UN", 200, 200);

}
