
var angle = 0.2;
var counter = 0; // to slow down frame rate

function setup() {
  createCanvas(600, 600);
  background(125);

  drawCircles();
}

function drawCircles() {
  $('#holder').text(angle.toFixed(3));
  push();
  translate(width/2, height/2);
  fill('green');
  // angle = 0.2;
  var xLength = 2;

  for (var i=0; i < 100; i++) {
    push();
    rotate(angle * i);
    ellipse(xLength * i, 0, 10); // optional fourth argument for elongation
    pop();
  }

  pop();
}

function draw() {
  counter ++;
  if (counter % 3 === 0) {
    background(125);
    angle += 0.002;
    drawCircles();
  }
}
