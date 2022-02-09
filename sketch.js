let ground;
let lander;
var lander_img;
var bg_img;
var endMsg, endConnotation, endRand, endRandC;

var vx = 0;
var g = 0.05;
var time = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Time Spent: "+round(time),800,75);
  text("Velocity:"+Math.round(lander.velocityY), 800, 100)
  pop();

  
  if(time <= 50){
    if(keyDown("left")){
      lander.velocityX -= 0.5
    }
    if(keyDown(RIGHT_ARROW)){
      lander.velocityX += 0.5
    }
    if(keyDown(UP_ARROW)){
      lander.velocityY -= 0.5
    }
    if(keyDown(DOWN_ARROW)){
      lander.velocityY += 0.5
    }
  }
  if(time >= 50 && lander.y < 500){
    push()
    fill(255)
    text("You Ran Out of Fuel", 500, 350)
    pop()
  }
  console.log(lander.velocityY)
  
  if(lander.y <= 500){
    if(lander.velocityY >= 3 && lander.y >= 490){
      
      endRand = Math.round(Math.random(1,5))
      endRandC = Math.round(Math.random(1,5))
      if(endRand == 1){
        endMsg = "You failed to land safely."
      }
      else if(endRand == 2){
        endMsg = "Your ship crashed and everyone died."
      }
      else if(endRand == 3){
        endMsg = "Everything went up in flames."
      }
      else if(endRand == 4){
        endMsg = "Well now we know who won't be piloting our ship."
      }
      else if(endRand == 5){
        endMsg = "Oof, everything burned."
      }

      if(endRandC == 1){
        endConnotation = "Try again next time."
      }
      else if(endRandC == 2){
        endConnotation = "Sucks to be the passengers."
      }
      else if(endRandC == 3){
        endConnotation = "We won't be hiring you now."
      }
      else if(endRandC == 4){
        endConnotation = "I mean it could be worse."
      }
      else{
        endConnotation = "Yeah you failed pretty hard buddy."
      }
      
    }
    if(lander.velocityY <= 3 && lander.y >= 490){
      
      endRand = Math.round(Math.random(1,6))
      endRandC = Math.round(Math.random(1,6))
      if(endRand == 1){
        endMsg = "You landed safely."
      }
      else if(endRand == 2){
        endMsg = "Wahoo, nobody died!"
      }
      else if(endRand == 3){
        endMsg = "You're pretty good at this."
      }
      else if(endRand == 4){
        endMsg = "You're super lucky."
      }
      else{
        endMsg = "Good on you for landing safely."
      }

      if(endRandC == 1){
        endConnotation = "Try again to do it faster."
      }
      else if(endRandC == 2){
        endConnotation = "Wanna perfect your craft?"
      }
      else if(endRandC == 3){
        endConnotation = "We got some other jobs if you're interested."
      }
      else if(endRandC == 4){
        endConnotation = "I mean it could be worse."
      }
      else{
        endConnotation = "Another mission is landing. Can you guide it to safety?"
      }
    }
  }
    if(lander.y >= 500){
      lander.velocityX = 0
      lander.velocityY = 0
      push()
      fill(255)
      text(endMsg, 500, 350)
      text(endConnotation, 500,)
      text("Click reset to try again.", 500, 400)
      pop()
    }
  
  else{
    //fall down
    lander.velocityY +=g/1.2
    time += g
    ;
  }

  drawSprites();
}


