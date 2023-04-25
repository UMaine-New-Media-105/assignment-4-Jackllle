let stars = [];
let applyFilter = true;

function setup() {
  createCanvas(400, 400);
  
  // create some stars with different parameters
  stars.push({ x: 100, y: 100, radius: 50, points: 5, color: color(255, 0, 0) });
  stars.push({ x: 200, y: 200, radius: 100, points: 8, color: color(0, 255, 0) });
  stars.push({ x: 300, y: 320, radius: 75, points: 10, color: color(0, 0, 255) });
}

function drawStar(x, y, radius, points, color, jitter) {
  push();
  translate(x, y);
 
  
  // apply the filter if needed
  if (applyFilter) {
    filter(INVERT);
  }
  
  fill(color);
  beginShape();
  for (let i = 0; i < points * 2; i++) {
    let angle = TWO_PI * i / (points * 2);
    let r = i % 2 == 0 ? radius : radius * 0.5;
    let x = r * cos(angle) + random(-jitter, jitter);
    let y = r * sin(angle) + random(-jitter, jitter);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function draw() {
  background(220);
  
  // draw all the stars
  stars.forEach(star => {
    drawStar(star.x, star.y, star.radius, star.points, star.color, 0);
  });
}

function mousePressed() {
  // toggle the filter when pressed
  applyFilter = !applyFilter;
}
