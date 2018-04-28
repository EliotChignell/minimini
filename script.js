var p = {
    x: 0,
    y: 400,
    w: 40,
    h: 40,
    colour: 'white'
};

function setup() {
    createCanvas(500,500);
    background(0);
}

function draw() {
    // Player
    fill(p.colour);
    rect(p.x,p.y,p.w,p.h);
}