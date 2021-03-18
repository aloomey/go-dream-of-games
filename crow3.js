class Crow {
  constructor() {
    this.y = height / 2;
    this.x = width / 2;

    this.icon = crowSprite;
    this.width = 50;
    this.height = 75;
	
	this.xvelocity = 0;
	this.yvelocity = 0;
	this.acceleration = 0.05;
	this.step = -3;
  }

  show() {
    // draw the icon CENTERED around the X and Y coords of the bird object
    image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }


  up() {
	if (this.yvelocity>-3) {
	    this.yvelocity += this.step;
	}
  }
  
  down() {
	if (this.yvelocity<3) {
	    this.yvelocity -= this.step;
	}
  }

  left() {
	if (this.xvelocity>-3) {
		this.xvelocity += this.step;
	}
  }
  right() {
	if (this.xvelocity<3) {
	    this.xvelocity -= this.step;
	}
  }
  
  yeet() {
	this.yvelocity += -25;	
  }

  stop() {
    this.xvelocity = 0;
    this.yvelocity = 0;
  	this.x = this.x;
  	this.y = this.y;
    fill(255);
    ellipse(this.x+64,this.y, 64,64)
  }

  starmake() {
    fill(255);
    ellipse(this.x+64,this.y, 64,64)
  }

    update() {
    this.x += this.xvelocity;
    this.y += this.yvelocity;

    if (this.x >= width - this.width / 2) {
      this.x = width - this.width / 2;
      this.xvelocity = 0;
    }

    if (this.x <= this.width / 2) {
      this.x = this.width / 2;
      this.xvelocity = 0;
    }
	
    if (this.y >= height - this.height / 2) {
      this.y = height - this.height / 2;
      this.yvelocity = 0;
    }

    if (this.y <= this.height / 2) {
      this.y = this.height / 2;
      this.yvelocity = 0;
    }

    }
  
  
}