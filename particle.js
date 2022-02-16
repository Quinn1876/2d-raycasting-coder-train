class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.followMouse = true;
    this.rays = [];
    for (let i = 0; i < 360; i += 1) {
      this.rays.push(new Ray(this.pos, radians(i)));
    }
  }

  goTo(x,y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  goToMouse() {
    this.goTo(mouseX, mouseY)
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 16);
    for (let ray of this.rays) {
      ray.show();
    }
  }

  look(boundaries) {
    for (let ray of this.rays) {
      let record = Infinity;
      let closest;
      for (let boundary of boundaries) {
        const pt = ray.cast(boundary);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      fill(255);
      if (closest) {
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  toggleMouseFollow() {
    this.followMouse = !this.followMouse;
  }
}
