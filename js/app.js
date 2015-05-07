
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.initialLocation = {
        x:-100,
        y:0
    };
    this.x=this.initialLocation.x;
    this.setEnemyCoordinateY();
    this.setEnemySpeed()
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        if(this.x > canvas.width){
            this.x=-110;
            this.setEnemySpeed();
            this.setEnemyCoordinateY();
        }
    
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
    //var rowObject=[60, 145, 230]; 
    var rowObject=[83, 166, 249]; 
    this.y = rowObject[Math.floor(Math.random()*3)];
}

//Set enemy speed
Enemy.prototype.setEnemySpeed = function(){
    this.speed = Math.random()*5;
}


Enemy.prototype.reset=function(){
    this.x=-110;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 415;
    this.moveX=0;
    this.moveY=0;
}

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   
   if(this.y+this.moveY <= 415 && this.y + this.moveY>= 0){
        this.y=this.y+this.moveY;
    }
    if(this.x+this.moveX < 505 && this.x + this.moveX >= 0){
        this.x=this.x+this.moveX;
    }
   
    /*this.y = this.y+this.moveY;
    this.x = this.x+this.moveX;*/
    this.resetPlayerMoves();

    console.log("x,y" + this.x + "," + this.y);
    
    
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


Player.prototype.handleInput = function(allowedKeys) {
    console.log(allowedKeys);

    if(allowedKeys=='up'){
        this.moveY=(-83);
    }
    if(allowedKeys=='down'){
        this.moveY=83;
    }
    if(allowedKeys=='left'){
        this.moveX=-101;
    }
    if(allowedKeys=='right'){
        this.moveX=101;
    }

    console.log(this.y);
    
}

Player.prototype.resetPlayerMoves=function(){
    this.moveX = 0;
    this.moveY = 0;
}

Player.prototype.reset =function(){
    this.x=202;
    this.y=415;
}

//Check for collision
Player.prototype.checkCollision = function(enemy){
    //if Enemy y coordinate is within 5 pixels of Player y coordinate, sprites are in same row

    if((enemy.y == player.y) && enemy.x + 50 > player.x) {
            return true;
    }
   /* console.log("Enemy Location:" + this.x + ',' + this.y);
    console.log("Player Location:" + player.x + ',' + player.y);
    return false;*/
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [];

for(var i=1; i<=1; i++){

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

