// Enemies our player must avoid
var Enemy = function(x,y, speed) {
   
    this.x = x;
    this.y = y;
    this.speed = speed;
    
    this.sprite = 'images/enemy-bug.png';
    console.log("hello World!")
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    
    this.x = this.x + this.speed * dt

    if(this.x >=505) {
        this.x = -25
        this.speed = 100 + Math.floor(Math.random()*356)
    }
    if (player.y <= this.y + 50 &&
        player.y + 50 >= this.y &&
        player.x <= this.x + 70 &&
        player.x + 70>= this.x) {

            player.x = 101
            player.y = 405
        }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.x = x
    this.y = y
    this.sprite = 'images/char-boy.png'
}

//Render Method for the Player Class 
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Update method for the Player Class 
Player.prototype.update = function(dt) {
}
// Player method to handle the Input form the key events 
Player.prototype.handleInput = function(keyPress) {
    if(keyPress=='left' && this.x > 0){
        this.x -= 101
    }else  if(keyPress=='right' && this.x < 404){
        this.x += 101
    } else if(keyPress=='up' && this.y > 0){
        this.y -= 83
    }else  if(keyPress=='down' && this.y < 404){
        this.y += 83
    } 
    // End of the Game and Reset 
    if(this.y < 1){
        setTimeout(function(){
            alert("You won the game!")
            player.x = 101
            player.y = 404
        },1000)}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = []
var enemyBots = [60,150,230]
var player = new Player(101,404)

enemyBots.forEach( function(y){
    enemy = new Enemy(0,y,200)
    allEnemies.push(enemy)
})



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
