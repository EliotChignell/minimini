var p = {
    x: 230,
    y: 430,
    w: 40,
    h: 40,
    colour: 'white'
};
var j = {
    score: 0,
    lasers: [],
    enemies: [],
    enemyXs: [30, 130, 230, 330, 430]
};

// Presets
function collision(ax, ay, aw, ah, bx, by, bw, bh){
    if (ax + aw >= bx && ax <= bx + bw && ay + ah >= by && ay <= by + bh){
        return true;
    }
}

// Lasers
function laser() {
    this.x = p.x + 10;
    this.y = 430;
    this.ys = 15; // ys = y speed
    this.colour = 'deepskyblue';
    this.draw = function() {
        fill(this.colour);
        rect(this.x, this.y, 20, 40);
    }
    this.update = function() {
        this.y -= this.ys;
    }
}

function dLasers() {
    for (i in j.lasers) {
        j.lasers[i].draw();
        j.lasers[i].update();
    }
}

// Enemies
function enemy() {
    this.x = random(j.enemyXs);
    this.y = 0;
    this.ys = 1;
    this.colour = 'red';
    this.collidingWithWall = false;
    this.draw = function() {
        fill(this.colour);
        rect(this.x,this.y,40,40);
    }
    this.update = function() {
        this.y += this.ys;
        if (collision(this.x,this.y,40,40,0,390,500,10)) {
            this.colliding = true;
        }
    }
}

function dEnemies() {
    for (i in j.enemies) {
        j.enemies[i].draw();
        j.enemies[i].update();

        if (j.enemies[i].collidingWithWall) {
            delete j.enemies[i];
        }
    }
}

function setup() {
    createCanvas(500,500);
    background(0);
}

function draw() {
    clear();
    background(0);
    // Lasers
    dLasers();
    // Enemies
    dEnemies();

    // Presets
    fill(90);
    rect(30,430,40,40);
    rect(130,430,40,40);
    rect(230,430,40,40);
    rect(330,430,40,40);
    rect(430,430,40,40);
    rect(0,390,500,10);
    // Scoreboard

    // Player
    fill(p.colour);
    rect(p.x,p.y,p.w,p.h);
}

function keyPressed() {
    if ((keyCode === LEFT_ARROW || keyCode === 65) && p.x > 30) {
        p.x -= 100;
    }
    if ((keyCode === RIGHT_ARROW || keyCode === 68) && p.x < 430) {
        p.x += 100;
    }
    if ((keyCode === UP_ARROW || keyCode === 87 || keyCode === 32)) {
        shootLaser();
    }
    if (keyCode === 69) {
        generateEnemy();
    }
}

function shootLaser() {
    j.lasers.push(new laser());
}
function generateEnemy() {
    j.enemies.push(new enemy());
}