let xTiles = 5;
let yTiles = 5;
let tileSize = 100;
var r
var g
var b
function setup() {
  createCanvas(xTiles * tileSize, yTiles * tileSize);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background("rgb(197,117,117)");
  for (let i = 0; i < xTiles; i++) {
    for (let g = 0; g < yTiles; g++) {
      push();
      translate(i * tileSize, g * tileSize);
      drawTile();
      pop();
    }
  }
}

function drawTile() {

  //gold star
  let star1 = {
    starX: 20,
    starY: 40,
    starScale: 0.2,
    starPoints: 7,
    startAngle: 20,
    starFill: "#607D8B",
  };
  //red star
  let star2 = {
    starX: 40,
    starY: 15,
    starScale: 0.2,
    starPoints: 3,
    startAngle: 20,
    starFill: random(0,100),
  };
  //white star
  let star3 = {
    starX: 20,
    starY: 60,
    starScale: 0.15,
    starPoints: 5,
    startAngle: 20,
    starFill: "white",
  };
  //blue star
  let star4 = {
    starX: 60,
    starY: 15,
    starScale: 0.18,
    starPoints: 4,
    startAngle: 1,
    starFill: random(0,250)
  };

  // Add stars to tile
  addStar(star1);
  addStar(star2);
  addStar(star3);
  addStar(star4);

  // Add rectangle to tile
  r= random(255)
  g=random(100,255)
  b=random(100)
  addRect(30, 30, 40, 40, random(r,g,b));
  addRect(random(40,45), 45, 20, 20, random(0,350));
  addRect(random(45,50), 50, 10, 10, random(0,350));
   addRect(13, 13, 15, 15, random(0,350));
  addRect(80, 40, 5, 5, random(0,350));
  addRect(90, 40, 5, 5, random(0,350));
   addRect(82, 50, 10, 5, random(0,350));
}

function addStar(star) {
  push();
  fill(star.starFill);
  noStroke();
  let addAngle = 360 / star.starPoints;
  translate(star.starX, star.starY);
  scale(star.starScale);
  rotate(star.startAngle);
  for (let pointsDrawn = 0; pointsDrawn < star.starPoints; pointsDrawn++) {
    rotate(addAngle);
    triangle(0, 50, 20, 0, -20, 0);
  }
  pop();
}

function addRect(x, y, w, h, c) {
  push();
  fill(c);
  noStroke();
  rect(x, y, w, h);
  pop();
  
}
