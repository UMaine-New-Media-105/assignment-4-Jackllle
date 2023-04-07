function setup() {
  createCanvas(400, 400);

}

function draw() {
  background("rgb(19,60,77)")
  fill("rgb(58,96,98)")
 rect(0,170,100,height)
  noStroke();
  fill("rgb(44,72,73)")
  rect(0,250,100,height)

  fill("rgb(56,87,88)")
  rect(0,350,100,height)
  fill("rgb(37,52,52)")
  rect(0,310,100,height)
  
  loop();
 stroke(1)
    strokeWeight(10)
  
  
  //stump
  for (let rectX = -500; rectX <= 600; rectX += 50) {
    noStroke();
  //   fill("rgb(20,64,41)")
  // rect(rectX, 100, 100, 30)
  //rect(rectX, 120, rectX, height);
  //  stroke(1)
  //  fill("#192829")
   // rect(rectX, 100, rectX, height);
   // fill("rgb(81,150,120)")
   //   noStroke();
    
   // rect(rectX+35, 200, 6, 100);
   // rect(rectX+25, 250, 6, 20);
   // fill("black")
   // rect(15,250,40,100)
   // rect(30,220,20,30)
   // fill("red")
   // rect(39,230,5,5)
    
    
  }
for(var i = 0; i <= width; i+=50)
      {
       
        fill("rgb(31,160,110)")
          rect(i, 350, 100, 20);
       rect(i, 350, 100, 20);
       
        fill("rgb(0,128,73)")
         rect(i, 360, 400, height);
        fill("rgb(138,220,124)")
          rect(i, 350, 3, 100);
  rect(i, 350, 3, 100);
        rect(i+30, 350, 20, 20);
        fill("#104930")
        rect(i+3, 386, 38, 20);
        fill("rgb(63,164,163))")
        fill("#104930")
        rect(i+3, 10, 50, 20)
        
  }
//tree branche 
//for (let rectX = -100-600; rectX <= 600; rectX += 50) {
 //fill("rgb(31,160,110)")
 //   rect(i, 0, rectX, 90);
 // fill("rgb(32,164,112)")
//  rect(i, 12, rectX, 90);
// fill("rgb(0,128,73)")
 //  rect(i, 0, rectX, 90);
 // fill("#104930")
 //  rect(i+3, -30, rectX, 90);
 // rect(i, 20, rectX, 60,50);
 // fill("rgb(138,220,124)")
 // rect(i, 10,rectX, 3, 100,rectX);
//}
  function draw(){
  if(mouseY>200){
    background("black")
  
  //loop(randomShaped());   
     }
}

function randomShaped(){
  fill( random(0,255), random(0,255), random(0,255) )
  square(random(width), random(height), random(width/1.5))
  fill( random(0,255), random(0,255), random(0,255) )
   ellipse(random(width), random(height), random(width/1.5))
  fill( random(0,255), random(0,255), random(0,255),random(0,255), random(0,255), random(0,255) )
   triangle(random(width), random(height), random(width,random(width), random(height), random(width)))
noLoop();
  ellipse(200,200,200,300)
  fill("black")
  ellipse(160,170,50,50)
  ellipse(240,170,50,50)
  line(200,250,200,100)
}  
  function Bush(x,y,size){
  ellipse(100,400,100,100,100)
    
  }
  
  
  
}
