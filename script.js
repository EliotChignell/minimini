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
    clear();
    // Player
    fill(p.colour);
    rect(p.x,p.y,p.w,p.h);

    if (keyIsDown(LEFT_ARROW) && p.x > 0) {
        p.x -= 10;
    } else if (keyIsDown(RIGHT_ARROW) && p.x < 500-p.w) {
        p.x += 10;
    }
}