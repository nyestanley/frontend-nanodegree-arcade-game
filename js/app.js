// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=-110;
    this.setEnemyCoordinateY();
    this.setEnemySpeed()
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x + this.speed);
    //this.y = (this.x + this.speed) * dt;
    //this.render();
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Set enemy initital Y coordinate
Enemy.prototype.setEnemyCoordinateY = function(){
    var rowObject=[60, 145, 230]; 
    this.y = rowObject[Math.floor(Math.random()*3)];
}

//Set enemy speed
Enemy.prototype.setEnemySpeed = function(){
    this.speed = Math.random()*9;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 380;
    this.moveX=0;
    this.moveY=0;
}

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   /* if(this.moveX!=0){
        this.x+=this.moveX;
    }
    if(this.moveY!=0){
        this.y+=this.moveY;
    }
*/

    console.log("Y move " + this.moveY);
    this.y = this.y+this.moveY;
    this.resetPlayerMoves();
    
    
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


Player.prototype.handleInput = function(allowedKeys) {
    console.log(allowedKeys);

    if(allowedKeys='up'){
        this.moveY=-65;
        console.log(this.moveY);
    }
    if(allowedKeys='down'){
        this.moveY=65;
    }
   /* if(allowedKeys='left'){
        this.moveX=-65;
    }
    if(allowedKeys='right'){
        this.moveX=65;
    }*/

    console.log(this.y);
    
}

Player.prototype.resetPlayerMoves=function(){
    this.moveX = 0;
    this.moveY = 0;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [];

for(var i=1; i<=7; i++){

//var enemy1 = new Enemy();
allEnemies.push(new Enemy());
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

