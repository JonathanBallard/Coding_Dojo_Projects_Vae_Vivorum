


console.log('GAME.JS LOADED');




// ----------GAME VARIABLES----------

// GAME MAP SIZE
var gameHeight = $(document).height() * 0.8;
var gameWidth = $(document).width() * 0.7;
var viewportHeight = $(document).height() * 0.8;
var viewportWidth = $(document).width() * 0.7;
var map = $('#background');
var mapOffsetLeft = ($(document).width() - gameWidth) / 2;
var mapOffsetTop = (($(document).height() - gameHeight) / 2);

//COUNTER
var loopCounter = 0;


// OTHER
var keymap = {};

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
var difficultyRate = 1; //Later turn this into a slider
var enemySpawnRate = 4000;
var enemySpawnTimer = enemySpawnRate / difficultyRate;

//WEAPONS
var numFired = 0;
var missileMagazineSize = 15;
var missileReloadSpeed = 500;
var missileFireDelay = 50;


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


    warp(left, top){
        this.left = left;
        this.top = top;
    }


}



class Enemy_1 {

    constructor(left, top, direction, facing){
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
        this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemy";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }

    warp(left, top){
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
        this.fireDelay = 50;
        this.reloadSpeed = 500;
        this.magazineSize = 15;
    }

    warp(left, top){
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





var player = new Player((gameWidth / 2), (gameHeight * 0.95))


startingEnemy1 = new Enemy_1(350, 200, "down");
startingEnemy2 = new Enemy_1(450, 250, "down");
startingEnemy3 = new Enemy_1(550, 450, "down");
startingEnemy4 = new Enemy_1(650, 350, "down");

var enemies = [
    startingEnemy1,
    startingEnemy2,
    startingEnemy3,
    startingEnemy4,

]


var weapon_fires = []
var enemy_fires = []
var friendly_fires = []






function drawPlayer(){
    content = "";
    content = "<div class = 'player' style='left:" + player.left + "px; top:" + player.top + "px;'></div>";

    if(player.shields < player.shieldsMax){
        // shieldRecharge(player);
        // player.shields += shieldRechargeRate;
    }

    document.getElementById("players").innerHTML = content;
}

function drawEnemies(){
    content = "";
    for(var i = 0; i < enemies.length; i++){

        if(enemies[i].direction == "left"){
            enemies[i].facing = "enemyLeftFace";
            // $('.enemy').css('transform', '90deg')
        }
        else if(enemies[i].direction == "right"){
            enemies[i].facing = "enemyRightFace";
        }
        else if(enemies[i].direction == "up"){
            enemies[i].facing = "enemyUpFace";
        }
        else {
            enemies[i].facing = "enemy";
        }

        // content += "<div class = 'enemy' style='left:" + enemies[i].left + "px; top:" + enemies[i].top + "px;'></div>";
        content += "<div class = " + enemies[i].facing + " style='left:" + enemies[i].left + "px; top:" + enemies[i].top + "px;'></div>";

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

        if(enemies[i].direction == "down"){
            //console.log("MOVE DOWN");
            enemies[i].top = enemies[i].top + enemies[i].speed;  //move down
        }
        if(enemies[i].direction == "up"){
            //console.log("MOVE UP");
            enemies[i].top = enemies[i].top - enemies[i].speed;  //move up
        }
        if(enemies[i].direction == "left"){
            //console.log("MOVE LEFT");
            enemies[i].left = enemies[i].left - enemies[i].speed;  //move left
        }
        if(enemies[i].direction == "right"){
            //console.log("MOVE RIGHT");
            enemies[i].left = enemies[i].left + enemies[i].speed;  //move right
        }


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
            // console.log('FRIENDLYHITCHECK: ' + friendlyHitCheck)
            if(friendlyHitCheck == true){
                // console.log('FRIENDLYHITCHECK IS TRUE')
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
    // Eventually make the wave consist of a single random type of enemy

    //First get random edge of map, 0=top, 1=top, 2=left, 3=right, 4=top, 5=top
    var edgeOfMap = Math.floor(Math.random() * 6);
    var left;
    var top;
    var direction;
    //Next Get Direction of Travel (Starting with just the opposite direction)
    var edgeToTravel;

    //Spawn at bottom
    // if(edgeOfMap == 1){
    //     edgeToTravel = 0;
    //     left = gameWidth / 2;
    //     top = gameHeight - 160;
    //     leftOffset = 15;
    //     topOffset = 15;
    // }


    //Start from Top
    if(edgeOfMap == 1){
        edgeToTravel = 1;
        direction = "down";
        left = gameWidth / 4;
        top = 160;
        leftOffset = 15;
        topOffset = 15;
    }
    else if(edgeOfMap == 0){
        edgeToTravel = 1;
        direction = "down";
        left = gameWidth / 4;
        top = 160;
        leftOffset = 15;
        topOffset = 15;
    }

    //Start from Left
    else if(edgeOfMap == 2){
        edgeToTravel = 3;
        direction = "right";
        left = 160;
        top = gameHeight / 2;
        leftOffset = 15;
        topOffset = 15;
    }

    //Start from Right
    else if(edgeOfMap == 3){
        edgeToTravel = 2;
        direction = "left";
        left = gameWidth - 160;
        top = gameHeight / 2;
        leftOffset = 15;
        topOffset = 15;
    }

    else if(edgeOfMap == 4){
        edgeToTravel = 1;
        direction = "down";
        left = gameWidth * 0.75;
        top = 160;
        leftOffset = 15;
        topOffset = 15;
    }
    else if(edgeOfMap == 5){
        edgeToTravel = 1;
        direction = "down";
        left = gameWidth * 0.75;
        top = 160;
        leftOffset = 15;
        topOffset = 15;
    }

    enemy1 = new Enemy_1(left + leftOffset, top - topOffset, direction);
    enemy2 = new Enemy_1(left - leftOffset, top - topOffset, direction);
    enemy3 = new Enemy_1(left + leftOffset, top + topOffset, direction);
    enemy4 = new Enemy_1(left - leftOffset, top + topOffset, direction);
    
    enemies.push(enemy1);
    enemies.push(enemy2);
    enemies.push(enemy3);
    enemies.push(enemy4);

    console.log("Wave Spawned")
    setTimeout(spawnEnemyWave, enemySpawnTimer);
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
    // console.log("COLLISION ERROR REPORT")
    // console.log("obj1.name: " + obj1.name)
    // console.log("obj1.left: " + obj1.left)
    // console.log("obj2.name: " + obj2.name)
    // console.log("obj2.left: " + obj2.left)


    if(obj1 && obj2){
        if(obj1.left < obj2.left + obj2.width &&
            obj1.left + obj1.width > obj2.left &&
            obj1.top < obj2.top + obj2.height &&
            obj1.top + obj1.height > obj2.top){
                collision = true;
                console.log("Collision between: " + obj1.name + " and " + obj2.name )
            }
    }


    return collision;
}

function shieldRecharge(obj1){
    obj1.shields += shieldRechargeRate;
    setTimeout(shieldRecharge, shieldRechargeDelay);
}


function escapedEnemies(){
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].shields < enemies[i].shieldsMax){
            // shieldRecharge(enemies[i]);
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


//MOUSE EVENTS
//Mouse Event Listener
document.addEventListener("mousemove", mouseMove, false);
document.addEventListener("click", mouseClick, false);

function mouseMove(e) {
    var relativeX = e.clientX - mapOffsetLeft;
    if(relativeX > 0 && relativeX < map.width()) {
        player.left = relativeX + player.width/2;
    }

    var relativeY = e.clientY - mapOffsetTop;
    if(relativeY > 0 && relativeY < map.height()) {
        player.top = relativeY + player.height/2;
    }

}

function mouseClick(e) {

    //fire weapon
    if(e.button == 0){
        var newMissile = new Missile(player.left + (player.width / 2), player.top)
        friendly_fires.push(newMissile);
        drawFires();
    }


}



//Keyboard Controls
document.onkeydown = document.onkeyup = function(e) {
    // console.log(e.keyCode);


    
    keymap[e.keyCode] = e.type == 'keydown';

    //MOVE AND FIRE
    if(keymap[65] && keymap[32] && player.left > 30){  //left
        player.left -= playerMoveSpeed;
    }
    if(keymap[68] && keymap[32] && player.left < gameWidth - 70){  //right
        player.left += playerMoveSpeed;
    }
    if(keymap[83] && keymap[32] && player.top <= gameHeight){  //down
        player.top += playerMoveSpeed;
    }
    if(keymap[87] && keymap[32] && player.top >= 140) {  //up
        player.top -= playerMoveSpeed;
    }

    //MOVE DIAGONALLY
    if(keymap[65] && keymap[87] && player.left > 30 && player.top >= 140){  //left up
        player.left -= playerMoveSpeed;
    }

    if(keymap[65] && keymap[83] && player.left > 30 && player.top <= gameHeight){  //left down
        player.left -= playerMoveSpeed;
    }

    if(keymap[68] && keymap[87] && player.left < gameWidth - 70 && player.top >= 140){  //right up
        player.left += playerMoveSpeed;
    }

    if(keymap[68] && keymap[83] && player.left < gameWidth - 70 && player.top <= gameHeight){  //right down
        player.left += playerMoveSpeed;
    }


    //MOVE
    if(keymap[65] && player.left > 30){  //left
        player.left -= playerMoveSpeed;
    }
    if(keymap[68] && player.left < gameWidth - 70){  //right
        player.left += playerMoveSpeed;
    }
    if(keymap[83] && player.top <= gameHeight){  //down
        player.top += playerMoveSpeed;
    }
    if(keymap[87] && player.top >= 140) {  //up
        player.top -= playerMoveSpeed;
    }

    //left = 37, right = 39 (Whats 37 and 39???)
    // if(e.keyCode == 65 && player.left > 30){ //left
    //     player.left -= playerMoveSpeed;
    // }
    // if(e.keyCode == 68 && player.left < gameWidth - 70){  //right
    //     player.left += playerMoveSpeed;
    // }
    // if(e.keyCode == 83 && player.top <= gameHeight){  //down
    //     player.top += playerMoveSpeed;
    // }
    // if(e.keyCode == 87 && player.top >= 140) {  //up
    //     player.top -= playerMoveSpeed;
    // }

    //keycode for spacebar = 32
    // if(e.keyCode == 32){   //fire
    //     var newMissile = new Missile(player.left + (player.width / 2), player.top)
    //     friendly_fires.push(newMissile);
    //     drawFires();
    // }

    //FIRE
    if(keymap[32]){
        //MOVED TO playerFires()
        // var newMissile = new Missile(player.left + (player.width / 2), player.top)
        // friendly_fires.push(newMissile);
        // drawFires();

        if(numFired >= missileMagazineSize){
            missileReload();
            // setTimeout(playerFires, missileReloadSpeed);
        }
        else{
            setTimeout(playerFires, missileFireDelay);
        }
        //else fire
        //playerFires();
    }

    
    drawPlayer();
}

function playerFires(){
    var newMissile = new Missile(player.left + (player.width / 2), player.top)
        friendly_fires.push(newMissile);
        numFired++;
        drawFires();
}

function missileReload(){
    numFired = 0;
    //print to the screen "reloading"
    $('#messages').text('Reloading...');
    setTimeout(clearMessages, missileReloadSpeed);
}

function clearMessages(){
    $('#messages').text('');
}

spawnEnemyWave();

function gameLoop(){

    moveFires();
    moveEnemies();
    drawPlayer();
    drawEnemies();
    drawFires();
    escapedEnemies();
    writeStats();
    loopCounter++;
    setTimeout(gameLoop, gameSpeed);
}


gameLoop();


























