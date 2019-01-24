import Symbol from './symbol';

class Stream {
  constructor(x,y,ctxH) {
    this.x = x;
    this.y = y;
    this.height = ctxH;
    this.stream = [];
    let random = Math.round(Math.random() * 20 + 5);
    this.speed = Math.round(Math.random() * 3 + 3);
    this.first = true;
    for(let i=0;i<=random;i++) {
      this.stream.push(new Symbol(this.x,this.y, this.height, this.speed, this.first));
      this.y -= 26;
      this.first = false;
    }
  }

  draw(ctx, deltaTime) {
    this.stream.forEach(symbol => {
      symbol.draw(ctx, deltaTime);
    });
  }

}

export default Stream;
