// ----------GAME VARIABLES----------

// GAME MAP SIZE
var gameHeight = $(document).height() * 0.8;
var gameWidth = $(document).width() * 0.7;
var viewportHeight = $(document).height() * 0.8;
var viewportWidth = $(document).width() * 0.7;

// SPEEDS
var gameSpeed = 100;
var playerMoveSpeed = 10;
var enemyMoveSpeed = 10;
var weaponFireMoveSpeed = 15;

//ENEMIES
var enemiesKilled = 0;
var numEscapedEnemies = 0;


//DAMAGE
var impactDamage = 1000000;  //should 1shot everything for the moment, change to do partial damage later
var missileDamage = 1000000; //should 1shot everything for the moment, change to do partial damage later



//----------CLASSES----------
class Player {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
        this.hp = 100;
        this.shields = 50;
        this.speed = playerMoveSpeed;
        this.name = "Player";
    }


    move(left, top){
        this.left = left;
        this.top = top;
    }

}



class Enemy_1 {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
        this.hp = 100;
        this.shields = 0;
        this.speed = enemyMoveSpeed;
        this.impactDamage = impactDamage;
        this.name = "Enemy One";
    }


    move(left, top){
        this.left = left;
        this.top = top;
    }
    
}


class Missile {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 10;
        this.width = 2;
        this.damage = missileDamage;
        this.name = "Missile";
    }

    move(left, top){
        this.left = left;
        this.top = top;
    }
    
    
}












//**************************************************************************************************************************************/





$(document).ready(function(){


    console.log($(document).width());
    console.log($(document).height());
})










//Create Game World Size
$('#background').width(gameWidth);
$('#background').height(gameHeight);



console.log('GAME.JS LOADED');

var player = new Player((gameWidth / 2), (gameHeight * 0.95))


startingEnemy1 = new Enemy_1(350, 200);
startingEnemy2 = new Enemy_1(450, 250);
startingEnemy3 = new Enemy_1(550, 450);
startingEnemy4 = new Enemy_1(650, 350);

var enemies = [
    startingEnemy1,
    startingEnemy2,
    startingEnemy3,
    startingEnemy4,

]


var weapon_fires = [

]

var enemy_fires = [

]

var friendly_fires = [

]






function drawPlayer(){
    content = "";
    content = "<div class = 'player' style='left:" + player.left + "px; top:" + player.top + "px;'></div>";

    document.getElementById("players").innerHTML = content;
}

function drawEnemies(){
    content = "";
    for(var i = 0; i < enemies.length; i++){
        content += "<div class = 'enemy' style='left:" + enemies[i].left + "px; top:" + enemies[i].top + "px;'></div>";

    }
    document.getElementById("enemies").innerHTML = content;

}

function drawFires(){
    content = "";
    for(var i = 0; i < friendly_fires.length; i++){
        content += "<div class = 'weapon_fire' style = 'left: " + friendly_fires[i].left + "px; top: " + friendly_fires[i].top + "px;'></div>";
    }
    document.getElementById("friendly_fires").innerHTML = content;

    content = "";
    for(var i = 0; i < enemy_fires.length; i++){
        content += "<div class = 'weapon_fire' style = 'left: " + enemy_fires[i].left + "px; top: " + enemy_fires[i].top + "px;'></div>";
    }
    document.getElementById("enemy_fires").innerHTML = content;

}


function moveEnemies(){
    for(var i = 0; i < enemies.length; i++){
        enemies[i].top = enemies[i].top + enemyMoveSpeed;  //Do movement
    }
}

function moveFires(){
    //Move friendly fires
    for(var i = 0; i < friendly_fires.length; i++){
        friendly_fires[i].top = friendly_fires[i].top - weaponFireMoveSpeed;
    }

    //Move enemy fires
    for(var i = 0; i < enemy_fires.length; i++){
        enemy_fires[i].top = enemy_fires[i].top + weaponFireMoveSpeed; //currently only move down
    }
}

function collisionDetection(obj1, obj2){
    var collision = false;
    if(obj1.left < obj2.left + obj2.width &&
        obj1.left + obj1.width > obj2.left &&
        obj1.top < obj2.top + obj2.height &&
        obj1.top + obj1.height > obj2.top){
            collision = true;
            console.log("Collision between: " + obj1.name + " and " + obj2.name )
        }
}


function escapedEnemies(){
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].top > gameHeight + 70){  //if out of bounds
            enemies.splice(i,1)  // Remove only the enemy in question
            numEscapedEnemies++;
        }
    }


}




document.onkeydown = function(e) {
    console.log(e.keyCode);

    //left = 37, right = 39
    if(e.keyCode == 65 && player.left > 300){ //left
        player.left -= playerMoveSpeed;
    }
    if(e.keyCode == 68 && player.left < 600){  //right
        player.left += playerMoveSpeed;
    }
    if(e.keyCode == 83 && player.top <= 620){  //down
        player.top += playerMoveSpeed;
    }
    if(e.keyCode == 87 && player.top >= 450) {  //up
        player.top -= playerMoveSpeed;
    }

    //keycode for spacebar = 32
    if(e.keyCode == 32){   //fire
        friendly_fires.push({left: (player.left + 34), top: (player.top - 8)});
        drawFires();
    }
    drawPlayer();
}


function gameLoop(){
    moveFires();
    moveEnemies();
    drawPlayer();
    drawEnemies();
    drawFires();
    escapedEnemies();
    setTimeout(gameLoop, gameSpeed);
}


gameLoop();

























