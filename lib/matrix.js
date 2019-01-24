import Stream from './stream';
import Symbol from './symbol';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  canvas.height = window.outerHeight;
  canvas.width = window.outerWidth;
  let ctxH = canvas.height;
  let ctxW = canvas.width;

  let myReq;
  let lastTime = 0;
  let deltaTime;
  let streams = [];
  let fontWidth = 26;
  let x = 0;
  let totalStreams = ctxW/fontWidth;
  for(let i=0;i<=totalStreams;i++) {
    let y = Math.round(Math.random() * -1000);
    streams.push(new Stream(x,y,ctxH));
    x += fontWidth;
  }


  const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    streams.forEach(stream => {
      stream.draw(ctx, deltaTime);
    });
  };

  const animate = (time = 0) => {
    deltaTime = time - lastTime;
    lastTime = time;
    myReq = requestAnimationFrame(animate);
    update(deltaTime);
  };

  animate();
});
