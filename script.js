var p = {
    x: 42.5,
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
    clear();
    background(0);
    // Player
    fill(p.colour);
    rect(p.x,p.y,p.w,p.h);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW && p.x > 0) {
        p.x -= 125;
    }
    if (keyCode === RIGHT_ARROW && p.x < 500-p.w) {
        p.x += 125;
    }
}