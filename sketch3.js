// movable C, moving bg, momentarily appearing star on 's'
// has stars
// protostellar discs vanish when C hits them and 'c' is pressed during the hit

var crow;
var crowSprite;
var isOver = false;
var bgImg;
var xparallax = 0.8;
var bgX = 0;
var stars;
var starsmade;
//var pipeBodySprite;
var starSprite;
var starMadeSprite;
var j=0;

function preload() {
  
  //pipeBodySprite = loadImage('https://raw.githubusercontent.com/CodingTrain/Flappy-Bird-Clone/master/graphics/pipe_marshmallow_fix.png');
  //pipePeakSprite = loadImage('https://raw.githubusercontent.com/CodingTrain/Flappy-Bird-Clone/master/graphics/pipe_marshmallow_fix.png');
  
  //pipeBodySprite = loadImage('https://raw.githubusercontent.com/aloomey/go-dream-of-games/main/graphics/star-mockup.png');
  starSprite = loadImage('https://raw.githubusercontent.com/aloomey/go-dream-of-games/main/graphics/proto.png');

  crowSprite = loadImage('https://raw.githubusercontent.com/aloomey/go-dream-of-games/main/graphics/c-mockup.png');
  starMadeSprite = loadImage('https://raw.githubusercontent.com/aloomey/go-dream-of-games/main/graphics/star-mockup.png');
  bgImg = loadImage('https://raw.githubusercontent.com/aloomey/go-dream-of-games/main/graphics/bglong2.png');
  //bgImg = loadImage('https://raw.githubusercontent.com/aloomey/go-dream-of-games/main/graphics/bg.png?token=AQGV3456E7E5MT7X4K26D7LAI6VTO');


}


function setup() {
  createCanvas(1000,600);
  reset();
	  myMusic = new sound("https://github.com/aloomey/go-dream-of-games/blob/main/graphics/Shooting%20Stars%20Template.mp3?raw=true");

}

function draw() {
	background(0);
  
  //static background image would be this
  //image(bgImg, 0, 0, bgImg.width, height);

  // Draw our background image, then move it - faster when moving to the right, slower when moving to the left
  image(bgImg, bgX, 0, bgImg.width/2, bgImg.height/2);
  if (crow.xvelocity>=0) {
    xparallax = 0.0025*width+0.3*crow.xvelocity;
  }
  else if (crow.xvelocity<0) {
    xparallax = 0.0025*width+0.01*crow.xvelocity;
  }
    
  bgX -= 1 * xparallax;
  
  // this handles the "infinite loop" by checking if the right
  // edge of the image would be on the screen, if it is draw a
  // second copy of the image right next to it
  // once the second image gets to the 0 point, we can reset bgX to
  // 0 and go back to drawing just one image.
  if (bgX <= -bgImg.width/2 + width) {
    image(bgImg, bgX + bgImg.width/2, 0, bgImg.width/2, bgImg.height/2);
    if (bgX <= -bgImg.width/2) {
      bgX = 0;
    }
  }
  
  
    for (var i = stars.length - 1; i >= 0; i--) {
    stars[i].update();
    stars[i].show();

    //if (pipes[i].pass(bird)) {
    //  score++;
    //}
    //
    if (stars[i].offscreen()) {
      stars.splice(i, 1);
    }

    if (stars[i].hits(crow)) {
      if (keyIsPressed) {
        if (key === 'c'){
          stars[i].made = true;
          //stars.splice(i, 1);
          //starSprite = crowSprite
        }
      }
      
    //  gameover();
    }

  }
  

      
  if (frameCount  % 150 == 0) {
    stars.push(new Star());
  }

  crow.update();
  crow.show();
  

  if (keyIsPressed) {
    if (key === 's'){
		    fill(255);
        ellipse(width/2, height/2, 64,64);
  	}
    if (key === 'm'){
    myMusic.play();
  	}
  }
}

function reset() {
  isOver = false;
  crow = new Crow();
  bgX = 0;
  
  stars = [];
  stars.push(new Star());

  
  loop();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    crow.up();
    //if (isOver) reset(); //you can just call reset() in Machinelearning if you die, because you cant simulate keyPress with code.
    if (keyIsDown(DOWN_ARROW)) {
      crow.down();
    }
    if (keyIsDown(LEFT_ARROW)) {
      crow.left();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      crow.right();
    }
    if (keyIsDown(32)) {
      crow.starmake();
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    crow.down();
    if (keyIsDown(UP_ARROW)) {
      crow.up();
    }
    if (keyIsDown(LEFT_ARROW)) {
      crow.left();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      crow.right();
    }
    if (keyIsDown(32)) {
      crow.starmake();
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    crow.left();
    if (keyIsDown(DOWN_ARROW)) {
      crow.down();
    }
    if (keyIsDown(UP_ARROW)) {
      crow.up();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      crow.right();
    }
    if (keyIsDown(32)) {
      crow.starmake();
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    crow.right();
    if (keyIsDown(DOWN_ARROW)) {
      crow.down();
    }
    if (keyIsDown(LEFT_ARROW)) {
      crow.left();
    }
    if (keyIsDown(UP_ARROW)) {
      crow.up();
    }
    if (keyIsDown(32)) {
      crow.starmake();
    }
  }
  if (keyIsDown(32)) { //space
    crow.starmake();
  }
  if (keyIsDown(89)) { //y
    crow.yeet();
  }
  if (keyIsDown(88)) { //x
    crow.stop();
  }
  
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
        }
    this.stop = function(){
        this.sound.pause();
        }
}