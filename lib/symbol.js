class Symbol {
  constructor(x,y,height, speed, first) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.first = first;
    this.unicode;
    this.execute = 0;
    this.random = Math.random() * 600 + 100;
    this.generateSymbol();
    this.speed = speed;
    this.number = Math.round(Math.random() * 100);
  }

  generateSymbol() {
    this.unicode = String.fromCharCode(
      0x30A0 + Math.round(Math.random() * 96)
    );
  }

  draw(ctx, deltaTime) {
    this.execute += deltaTime;
    if(this.execute > this.random) {
      this.generateSymbol();
      this.execute = 0;
    }
    if(this.first && this.number > 60) {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "green";
    }
    ctx.font = "26px Arial";
    ctx.fillText(this.unicode, this.x, this.y);
    this.y += this.speed;
    if(this.y > this.height) {
      this.y = 0;
    }
  }
}

export default Symbol;
