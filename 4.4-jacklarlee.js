// Set up the canvas and tiles
let xTiles = 5;
let yTiles = 5;
let tileSize = 100;
let rects = [];
let stars = [];

function setup() {
  createCanvas(xTiles * tileSize, yTiles * tileSize);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background("rgb(197,117,117)");

  // Loop through each tile and draw it
  for (let i = 0; i < xTiles; i++) {
    for (let g = 0; g < yTiles; g++) {
      push();
      translate(i * tileSize, g * tileSize);
      drawTile();
      pop();
    }
  }
}

// Function to draw a single tile
function drawTile() {
  // Add gold star
  noFill()
  stars.push({
    starX: 20,
    starY: 40,
    starScale: 3,
    starPoints: 7,
    startAngle: 20,
    starFill: "#607D8B",
  });

  // Add starleft
  stars.push({
    starX: 40,
    starY: 15,
    starScale: 3,
    starPoints: 5,
    startAngle: 20,
    starFill: random(0, 100),
  });

  // Add startop
  stars.push({
    starX: 20,
    starY: 60,
    starScale: 3,
    starPoints: 5,
    startAngle: 20,
    starFill: "white",
  });

  // Add shine
  stars.push({
    starX: 60,
    starY: 15,
    starScale: 3,
    starPoints: 4,
    startAngle: 1,
    starFill: random(0, 250),
  });

  // Add stars to tile
  for (let star of stars) {
    addStar(star);
  }

  // Add rectangles to tile
  rects.push({
    x: 30,
    y: 30,
    w: 40,
    h: 40,
    c: random(255),
  });

  rects.push({
    x: random(40, 45),
    y: 45,
    w: 20,
    h: 20,
    c: random(0, 350),
  });

  rects.push({
    x: random(45, 50),
    y: 50,
    w: 10,
    h: 10,
    c: random(0, 350),
  });

  rects.push({
    x: 13,
    y: 13,
    w: 15,
    h: 15,
    c: random(0, 350),
  });

  rects.push({
    x: 80,
    y: 40,
    w: 5,
    h: 5,
    c: random(0, 350),
  });

  rects.push({
    x: 90,
    y: 40,
    w: 5,
    h: 5,
    c: random(0, 350),
  });

  rects.push({
    x: 82,
    y: 50,
    w: 10,
    h: 5,
    c: random(0, 350),
  });

  // Add rectangles to tile
  for (let rect of rects) {
    addRect(rect.x, rect.y, rect.w, rect.h, rect.c);
  }
}

// Function to draw a star
function addStar(star) {
  let { starX, starY, starScale, starPoints, startAngle, starFill } = star;

  push();
  translate(starX, starY);
  scale(starScale);
  fill(starFill);

  beginShape();
  for (let i = 0; i < starPoints * 2; i++) {
    let angle = startAngle + i * (360 / (starPoints * 2));
    let radius = i % 2 === 0 ? 1 : 0.5;
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

  pop();
}
function addRect(x, y, w, h, c) {
  push();
  noStroke();
  fill(c);
  rect(x, y, w, h);
  pop();
}
