let angle = 0;
let radius = 100;
let sides = 5;
let points = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  // Calculate the points of the star
  for (let i = 0; i < sides * 2; i++) {
    let r = (i % 2 === 0) ? radius : radius / 2;
    let x = r * cos(angle);
    let y = r * sin(angle);
    points.push(createVector(x, y));
    angle += 360 / (sides * 2);
  }
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(frameCount);
  fill("red");
  stroke(0);
  beginShape();
  // Draw the star using the calculated points
  for (let i = 0; i < sides * 2; i++) {
    let p = points[i];
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
}
