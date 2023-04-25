let numCols = 10; // number of columns of tiles
let numRows = 10; // number of rows of tiles
let tileSize = 25; // size of each tile

function setup() {
  createCanvas(numCols * tileSize, numRows * tileSize); // adjust canvas size to fit the grid
}

function draw() {
  background(0, 0, 100);
  
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      let x = col * tileSize;
      let y = row * tileSize;
      drawTile(x, y, tileSize);
    }
  }
}

function drawTile(x, y, size) {
  let numPoints = 4; // number of points of the star
  let radius = size / 2; // radius of the star
  //make them random
  fill(random(200));
  let angle = TWO_PI / numPoints;
  let halfAngle = angle / 2;
  
  push();
  translate(x + size / 2, y + size / 2); // translate to center of tile
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = cos(a) * radius;
    let sy = sin(a) * radius;
    vertex(sx, sy);
    sx = cos(a + halfAngle) * radius / 2;
    sy = sin(a + halfAngle) * radius / 2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}
