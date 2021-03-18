class Star {
  constructor() {
    this.spacing = 125;
    this.top = random(height / 10, 9 / 10 * height);
    this.bottom = this.top + this.spacing;

    this.x = width;
    this.w = 80;
    this.speed = 2;

    this.made = 0;
    this.passed = false;
    this.highlight = false;
  }

  hits(crow) {
    let halfCrowHeight = crow.height / 2;
    let halfCrowwidth = crow.width / 2;
    if (crow.y  < this.top+this.w && crow.y  > this.top) {
      //if this.w is huge, then we need different collision model
      if (crow.x  > this.x && crow.x  < this.x + this.w) {
        this.highlight = true;
        this.passed = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }
  

  ////this function is used to calculate scores and checks if we've went through the pipes
  //pass(bird) {
  //  if (bird.x > this.x && !this.passed) {
  //    this.passed = true;
  //    return true;
  //  }
  //  return false;
  //}

  drawHalf() {
    //let howManyNedeed = 0;
    //let peakRatio = pipePeakSprite.height / pipePeakSprite.width;
    //let bodyRatio = pipeBodySprite.height / pipeBodySprite.width;
    ////this way we calculate, how many tubes we can fit without stretching
    //howManyNedeed = Math.round(height / (this.w * bodyRatio));
    ////this <= and start from 1 is just my HACK xD But it's working
    //for (let i = 0; i < howManyNedeed; ++i) {
    //  let offset = this.w * (i * bodyRatio + peakRatio);
    //  image(pipeBodySprite, -this.w / 2, offset, this.w, this.w * bodyRatio);
    //}
    
    if (this.made == true) {
    image(starMadeSprite, -this.w / 2, 0, this.w, this.w);
  	}
    if (this.made == false) {
    image(starSprite, -this.w / 2, 0, this.w, this.w);
    }
    //image(starSprite, -this.w / 2, 0, this.w, this.w);
  }

  show() {
    push();
    translate(this.x + this.w / 2, this.top);
    this.drawHalf();
    //translate(0, -this.spacing);
    //rotate(PI);
    //this.drawHalf();
    pop();
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return (this.x < -this.w);
  }
}