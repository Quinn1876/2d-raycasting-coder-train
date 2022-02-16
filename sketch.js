/// <reference path='./p5.js'/>
let boundaries = [];
let particle;
function setup() {
    // setup code goes here
    createCanvas(400, 400)
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = random(width);
        let y2 = random(height);
        boundaries.push( new Boundary(x1, y1, x2, y2) );
    }
    boundaries.push(new Boundary(0,0,0,height))
    boundaries.push(new Boundary(0,0,width,0))
    boundaries.push(new Boundary(width,0,width,height))
    boundaries.push(new Boundary(0,height,width,height))
    particle = new Particle();
}

function draw() {
    background(0);
    if (particle.followMouse) {
        particle.goToMouse();
    }

    for (let boundary of boundaries) {
        boundary.show();
    }
    particle.show();
    particle.look(boundaries);

}

// Left mouse button pressed
function mouseClicked() {
    particle.toggleMouseFollow();
    return false; // prevent default
}
