var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect1 = createSprite(300, 500, 50, 80);
  Rect2 = createSprite(570, 680, 50, 80);
  Rect1.shapeColor = "green";
  Rect2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( IsTouchinng(movingRect,Rect2)){
  movingRect.shapeColor = "red";
   
  Rect2.shapeColor = "red";



}
 else { 
  movingRect.shapeColor = "green";
   
  Rect2.shapeColor = "green";

}
 
 drawSprites();

}
function IsTouchinng(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
  return true
}
else {
  return false
}





}