"use strict";

class Star {

  constructor(x, y, radius1, radius2, npoints) {
    this.x = x;
    this.y = y;
    this.radius1 = radius1;
    this.radius2 = radius2;
    this.npoints = npoints;

    this.angle = TWO_PI / this.npoints;
    this.halfAngle = this.angle / 2.0;
  }

  draw(x, y) {
    this.x = x - this.radius1;
    this.y = y - this.radius1;

    // push();
    // translate(width * 0.2, height * 0.5);
    // rotate(frameCount / 200.0);

    beginShape();
    for (let a = 0; a < TWO_PI; a += this.angle) {
      let sx = this.x + cos(a) * this.radius2;
      let sy = this.y + sin(a) * this.radius2;
      vertex(sx, sy);
      sx = this.x + cos(a + this.halfAngle) * this.radius1;
      sy = this.y + sin(a + this.halfAngle) * this.radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    // pop();
  }
}