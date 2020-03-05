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

//RATES
var shieldRechargeRate = 0.25; //How much shields recharge per tick
var shieldRechargeDelay = 3000;


//DAMAGE
var rammingDamage = 1000000;  //should 1shot everything for the moment, change to do partial damage later
var missileDamage = 1000000; //should 1shot everything for the moment, change to do partial damage later



//----------CLASSES----------
class Player {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
        this.hp = 100;
        this.shieldsMax = 50;
        this.shields = 50;
        this.speed = playerMoveSpeed;
        this.name = "Player";
        this.type = "Player";
        this.score = 0;
        this.kills = 0;
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
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy One";
        this.type = "Enemy";
        this.scoreValue = 50;
        this.formation = "line";
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
        this.type = "WeaponFire";
        this.weaponId = 0;
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

    if(player.shields < player.shieldsMax){
        setTimeout(shieldRecharge(player), shieldRechargeDelay);
        // player.shields += shieldRechargeRate;
    }

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

        var rammingCheck = collisionDetection(enemies[i], player);

        if(rammingCheck == true){
            rammedPlayer(enemies[i],i);
        }
    }
}

function moveFires(){
    //Move friendly fires
    for(var i = 0; i < friendly_fires.length; i++){
        friendly_fires[i].top = friendly_fires[i].top - weaponFireMoveSpeed;

        for(var j = 0; j < enemies.length; j++){
            var friendlyHitCheck = collisionDetection(friendly_fires[i], enemies[j])
            console.log('FRIENDLYHITCHECK: ' + friendlyHitCheck)
            if(friendlyHitCheck == true){
                console.log('FRIENDLYHITCHECK IS TRUE')
                enemyDamagedByFire(enemies[j], friendly_fires[i], j, i);
            }
        }
    }

    //Move enemy fires
    for(var i = 0; i < enemy_fires.length; i++){
        enemy_fires[i].top = enemy_fires[i].top + weaponFireMoveSpeed;
        var enemyHitCheck = collisionDetection(enemy_fires[i], player);
        
        if(enemyHitCheck == true){
            playerDamagedByFire(enemy_fires[i], i);
        }
    }
}

function enemyDamagedByFire(enemy, fire, enemyIndex, fireIndex){


    if(enemy.shields > fire.damage){
        enemy.shields -= fire.damage;
    }
    else if(enemy.shields > 0 && enemy.shields < fire.damage){
        enemy.shields -= fire.damage;
        enemy.hp += enemy.shields;
        enemy.shields = 0;
    }
    else {
        enemy.hp -= fire.damage;
    }


    friendly_fires.splice(fireIndex,1);

    //If out of hp and shields, delete
    if(enemy.hp <= 0 && enemy.shields <= 0){
        enemies.splice(enemyIndex, 1);
        enemiesKilled++;
        player.kills++;
        player.score += enemy.scoreValue;
    }
}

function playerDamagedByFire(fire, fireIndex){
    if(player.shields > fire.damage){
        player.shields -= fire.damage;
    }
    else if(player.shields > 0 && player.shields < fire.damage){
        player.shields -= fire.damage;
        player.hp += player.shields;
        player.shields = 0;
    }
    else {
        player.hp -= fire.damage;
    }
    friendly_fires.splice(fireIndex,1);


    //If out of hp and shields, delete
    if(player.hp <= 0){
        gameOver();
    }
}

function rammedPlayer(enemy, enemyIndex){
    if(player.shields > rammingDamage){
        player.shields -= rammingDamage;
    }
    else if(player.shields > 0 && player.shields < rammingDamage){
        player.shields -= rammingDamage;
        player.hp += player.shields;
        player.shields = 0;
    }
    else {
        player.hp -= rammingDamage;
    }

    player.kills++;
    player.score += enemy.scoreValue;
    enemies.splice(enemyIndex,1);

    //If out of hp, delete
    if(player.hp <= 0){
        gameOver();
    }
}

function spawnEnemyWave(){
    // Spawn wave in random location, travelling in random direction, with class-based movement pattern
    console.log("Wave Spawned")
}

function victory(){
    // VICTORY HERE
    console.log("You Win!")
}

function gameOver(){
    // END GAME HERE
    console.log("You Lose!")
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


    return collision;
}

function shieldRecharge(obj1){
    obj1.shields += shieldRechargeRate;
}


function escapedEnemies(){
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].shields < enemies[i].shieldsMax){
            setTimeout(shieldRecharge(enemies[i]), shieldRechargeDelay);
            // enemies[i].shields += shieldRechargeRate;
        }

        if(enemies[i].top > gameHeight + 70 || 
            enemies[i].top < -70 || 
            enemies[i].left < -70 || 
            enemies[i].left > gameWidth + 70){  //if out of bounds
                enemies.splice(i,1)  // Remove only the enemy in question
                numEscapedEnemies++;
            }
        
    }
}

function writeStats(){
    $('#playerShields').text(player.shields);
    $('#playerHP').text(player.hp);
    $('#playerKills').text(player.kills);
    $('#playerScore').text(player.score);
}



document.onkeydown = function(e) {
    console.log(e.keyCode);

    //left = 37, right = 39
    if(e.keyCode == 65 && player.left > 30){ //left
        player.left -= playerMoveSpeed;
    }
    if(e.keyCode == 68 && player.left < gameWidth - 70){  //right
        player.left += playerMoveSpeed;
    }
    if(e.keyCode == 83 && player.top <= gameHeight){  //down
        player.top += playerMoveSpeed;
    }
    if(e.keyCode == 87 && player.top >= 140) {  //up
        player.top -= playerMoveSpeed;
    }

    //keycode for spacebar = 32
    if(e.keyCode == 32){   //fire
        var newMissile = new Missile(player.left + (player.width / 2), player.top)
        friendly_fires.push(newMissile);
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
    writeStats();
    setTimeout(gameLoop, gameSpeed);
}


gameLoop();


























