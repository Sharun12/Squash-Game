var ball,Ballimg,paddle,Paddleimg, leftEdge, bottomEdge, topEdge;
function preload() {
  /* preload your images here of the ball and the paddle */
  Ballimg = loadImage("ball.png");
  Paddleimg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  
  leftEdge = createSprite(0, 200, 1, 400);
  bottomEdge = createSprite(200, 400, 400, 1);
  topEdge = createSprite(200, 0, 400, 1);
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball = createSprite(200, 200, 20, 20);
  ball.addImage("Ball", Ballimg);
  
  paddle = createSprite(380, 200, 10, 70);
  paddle.addImage("Paddle", Paddleimg);
  
  /* give the ball an initial velocity of 9 in the X direction */
ball.velocityX = 9;
}

function draw() {
  background(205,153,0);
  
  /* create Edge Sprites here */
  createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(leftEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(topEdge);
  
  paddle.collide(topEdge);
  paddle.collide(bottomEdge);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  randomVelocity();
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW)) {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -3;
  }
  
  if(keyDown(DOWN_ARROW)) {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 3;
  }
  
  drawSprites();
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  if (ball.bounceOff(paddle)) {
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = random(-3, 3);
  }
}

