var fixedrect,movingrect

function setup() {
  createCanvas(900,600);
  fixedrect = createSprite(600, 400, 50, 80);
  movingrect = createSprite(400, 200, 80, 30);

  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}

function draw() {
  background("pink");  

  movingrect.x = mouseX
  movingrect.y = mouseY

  console.log(movingrect.x-fixedrect.x);

  if(movingrect.x-fixedrect.x <
     movingrect.width/2 + fixedrect.width/2 &&
     fixedrect.x - movingrect.x <
      movingrect.width/2 + fixedrect.width/2 &&
      movingrect.y-fixedrect.y <
     movingrect.height/2 + fixedrect.height/2 &&
     fixedrect.y - movingrect.y <
      movingrect.height/2 + fixedrect.height/2){
      movingrect.shapeColor = "red";
      fixedrect.shapeColor = "red";

  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";

  }
  
  
  drawSprites();
}