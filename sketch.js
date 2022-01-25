
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  if(keyIsDown(RIGHT_ARROW)){
    background(255,25,25)
  }
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed

  if (keyIsDown(LEFT_ARROW)) 
  {
    background(200,25,225);
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background(10,245,10);
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background(0,225,255);
  }

  

  drawSprites();
}

