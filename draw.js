
function setup() {
  createCanvas(600, 600);
  background(125);

  drawCircles();
}

function drawCircles() {
  push();
  translate(width/2, height/2);
  fill('green');
  var angle = 0.2;
  var xLength = 2;

  for (var i=0; i < 100; i++) {
    push();
    rotate(angle * i);
    ellipse(xLength * i, 0, 10); // optional fourth argument for elongation
    pop();
  }

  pop();
}
