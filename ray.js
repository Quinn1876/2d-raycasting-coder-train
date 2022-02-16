class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.dir = p5.Vector.fromAngle(angle);
  }

  show () {
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y);
    line(0,0, this.dir.x*4, this.dir.y*4);
    pop();
  }

  lookAt(x,y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }

  cast(boundary) {
    // Algorithm from Line to Line intersection wikipedia page

    const x1 = boundary.a.x;
    const y1 = boundary.a.y;
    const x2 = boundary.b.x;
    const y2 = boundary.b.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;


    const denominator = (x1-x2)*(y3-y4) - (y1-y2)*(x3-x4);
    if (denominator === 0) {
      return;
    }

    const t = ((x1-x3)*(y3-y4) - (y1-y3)*(x3-x4))/denominator;
    const u = -((x1-x2)*(y1-y3) - (y1-y2)*(x1-x3))/denominator;

    if (t > 0 && t < 1 && u > 0) {
      const pt = createVector(x1 + t*(x2-x1), y1+t*(y2-y1));
      return pt;
    }
    return;
  }
}
