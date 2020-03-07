


console.log('GAME.JS LOADED');







//**************************************************************************************************************************************/





$(document).ready(function(){


    console.log($(document).width());
    console.log($(document).height());
})










//Create Game World Size
$('#background').width(gameWidth);
$('#background').height(gameHeight);





var player = new Player((gameWidth / 2), (gameHeight * 0.95))


startingEnemy1 = new Enemy_1(350, 20, "down");
startingEnemy2 = new Enemy_1(450, 50, "down");
startingEnemy3 = new Enemy_1(550, 50, "down");
startingEnemy4 = new Enemy_1(650, 50, "down");


// startingEnemy1 = new Enemy_1(350, 200, "downright");
// startingEnemy2 = new Enemy_1(450, 250, "downleft");
// startingEnemy3 = new Enemy_1(550, 450, "upright");
// startingEnemy4 = new Enemy_1(650, 350, "upleft");


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
        shieldDelay(player); //starts the delay before recharge begins
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
        else if(enemies[i].direction == "down"){
            enemies[i].facing = "enemyDownFace";
        }
        else if(enemies[i].direction == "upright"){
            enemies[i].facing = "enemyUpRightFace";
        }
        else if(enemies[i].direction == "downright"){
            enemies[i].facing = "enemyDownRightFace";
        }
        else if(enemies[i].direction == "upleft"){
            enemies[i].facing = "enemyUpLeftFace";
        }
        else if(enemies[i].direction == "downleft"){
            enemies[i].facing = "enemyDownLeftFace";
        }
        else {
            enemies[i].facing = "enemy";
        }

        // content += "<div class = 'enemy' style='left:" + enemies[i].left + "px; top:" + enemies[i].top + "px;'></div>";
        content += "<div class = " + enemies[i].type + ' ' + enemies[i].facing + " style='left:" + enemies[i].left + "px; top:" + enemies[i].top + "px;'></div>";

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
        if(enemies[i].direction == "downright"){
            //console.log("MOVE down RIGHT");
            enemies[i].left = enemies[i].left + (enemies[i].speed / 2);  //move right
            enemies[i].top = enemies[i].top + (enemies[i].speed / 2);  //move down
        }

        if(enemies[i].direction == "upright"){
            //console.log("MOVE up RIGHT");
            enemies[i].left = enemies[i].left + (enemies[i].speed / 2);  //move right
            enemies[i].top = enemies[i].top - (enemies[i].speed / 2);  //move up
        }

        if(enemies[i].direction == "downleft"){
            //console.log("MOVE down LEFT");
            enemies[i].top = enemies[i].top + (enemies[i].speed / 2);  //move down
            enemies[i].left = enemies[i].left - (enemies[i].speed / 2);  //move left
        }

        if(enemies[i].direction == "upleft"){
            //console.log("MOVE up LEFT");
            enemies[i].top = enemies[i].top - (enemies[i].speed / 2);  //move up
            enemies[i].left = enemies[i].left - (enemies[i].speed / 2);  //move left
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
        // friendly_fires[i].top = friendly_fires[i].top - weaponFireMoveSpeed;


        if(friendly_fires[i].direction == "down"){
            //console.log("MOVE DOWN");
            friendly_fires[i].top = friendly_fires[i].top + friendly_fires[i].speed;  //move down
        }
        if(friendly_fires[i].direction == "up"){
            //console.log("MOVE UP");
            friendly_fires[i].top = friendly_fires[i].top - friendly_fires[i].speed;  //move up
        }
        if(friendly_fires[i].direction == "left"){
            //console.log("MOVE LEFT");
            friendly_fires[i].left = friendly_fires[i].left - friendly_fires[i].speed;  //move left
        }
        if(friendly_fires[i].direction == "right"){
            //console.log("MOVE RIGHT");
            friendly_fires[i].left = friendly_fires[i].left + friendly_fires[i].speed;  //move right
        }

        //collision detection
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
        //enemy_fires[i].top = enemy_fires[i].top + weaponFireMoveSpeed;
        
        if(enemy_fires[i].direction == "down"){
            //console.log("MOVE DOWN");
            enemy_fires[i].top = enemy_fires[i].top + enemy_fires[i].speed;  //move down
        }
        if(enemy_fires[i].direction == "up"){
            //console.log("MOVE UP");
            enemy_fires[i].top = enemy_fires[i].top - enemy_fires[i].speed;  //move up
        }
        if(enemy_fires[i].direction == "left"){
            //console.log("MOVE LEFT");
            enemy_fires[i].left = enemy_fires[i].left - enemy_fires[i].speed;  //move left
        }
        if(enemy_fires[i].direction == "right"){
            //console.log("MOVE RIGHT");
            enemy_fires[i].left = enemy_fires[i].left + enemy_fires[i].speed;  //move right
        }

        //collision check
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
    var edgeOfMap = Math.floor(Math.random() * 8);
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
    else if(edgeOfMap == 6){
        edgeToTravel = 1;
        direction = "downright";
        left = gameWidth * 0.05;
        top = 120;
        leftOffset = 15;
        topOffset = 15;
    }
    else if(edgeOfMap == 7){
        edgeToTravel = 1;
        direction = "downleft";
        left = gameWidth * 0.95;
        top = 130;
        leftOffset = 15;
        topOffset = 15;
    }

    //Decide here what to spawn
    var enemySpawner = Math.floor(Math.random() * 11);
    var typeOfEnemy = "Enemy_1";
    
    if(enemySpawner <= 5){
        typeOfEnemy = "Enemy_1";
    }
    else if(enemySpawner == 6){
        typeOfEnemy = "Enemy_2";
    }
    else if(enemySpawner == 7){
        typeOfEnemy = "Enemy_3";
    }
    else if(enemySpawner == 8){
        typeOfEnemy = "Enemy_4";
    }
    else if(enemySpawner == 9){
        typeOfEnemy = "Enemy_5";
    }
    else if(enemySpawner == 10){
        typeOfEnemy = "Enemy_6";
    }


    if(typeOfEnemy == "Enemy_1"){
        spawnEnemy(Enemy_1,left,leftOffset,top,topOffset,direction);
    }
    else if(typeOfEnemy == "Enemy_2"){
        spawnEnemy(Enemy_2,left,leftOffset,top,topOffset,direction);
    }
    else if(typeOfEnemy == "Enemy_3"){
        spawnEnemy(Enemy_3,left,leftOffset,top,topOffset,direction);
    }
    else if(typeOfEnemy == "Enemy_4"){
        spawnEnemy(Enemy_4,left,leftOffset,top,topOffset,direction);
    }
    else if(typeOfEnemy == "Enemy_5"){
        spawnEnemy(Enemy_5,left,leftOffset,top,topOffset,direction);
    }
    else if(typeOfEnemy == "Enemy_6"){
        spawnEnemy(Enemy_6,left,leftOffset,top,topOffset,direction);
    }


    console.log("Wave Spawned: " + typeOfEnemy);
    setTimeout(spawnEnemyWave, enemySpawnTimer);
}

function spawnEnemy(enemyType, left, leftOffset,top,topOffset,direction){


    if(enemyType.numFormation == 2){
        enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
        enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
        enemies.push(enemy1);
        enemies.push(enemy2);
    }

    if(enemyType.numFormation == 4){
        enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
        enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
        enemy3 = new enemyType(left + leftOffset, top + topOffset, direction);
        enemy4 = new enemyType(left - leftOffset, top + topOffset, direction);
        enemies.push(enemy1);
        enemies.push(enemy2);
        enemies.push(enemy3);
        enemies.push(enemy4);
    }
    else if(enemyType.numFormation == 6){
        enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
        enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
        enemy3 = new enemyType(left + leftOffset, top + topOffset, direction);
        enemy4 = new enemyType(left - leftOffset, top + topOffset, direction);
        enemy5 = new enemyType(left - (leftOffset * 2), top - topOffset, direction);
        enemy6 = new enemyType(left - (leftOffset * 2), top + topOffset, direction);
        enemies.push(enemy1);
        enemies.push(enemy2);
        enemies.push(enemy3);
        enemies.push(enemy4);
        enemies.push(enemy5);
        enemies.push(enemy6);
    }
    else if(enemyType.numFormation == 8){
            enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
            enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
            enemy3 = new enemyType(left + leftOffset, top + topOffset, direction);
            enemy4 = new enemyType(left - leftOffset, top + topOffset, direction);
            enemy5 = new enemyType(left - (leftOffset * 2), top - topOffset, direction);
            enemy6 = new enemyType(left - (leftOffset * 2), top + topOffset, direction);
            enemy7 = new enemyType(left - leftOffset, top + (topOffset * 2), direction);
            enemy8 = new enemyType(left - leftOffset, top + (topOffset * 2), direction);
            enemies.push(enemy1);
            enemies.push(enemy2);
            enemies.push(enemy3);
            enemies.push(enemy4);
            enemies.push(enemy5);
            enemies.push(enemy6);
            enemies.push(enemy7);
            enemies.push(enemy8);
        }






}


function victory(){
    // VICTORY HERE
    console.log("You Win!")
    alert('Victory');
    location.reload();
}

function gameOver(){
    // END GAME HERE
    console.log("You Lose!")
    alert('You Lose!');
    location.reload();
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

function shieldDelay(obj1){
    setTimeout(shieldRecharge, shieldRechargeDelay, obj1);
}
function shieldRecharge(obj1){
        obj1.shields += shieldRechargeRate;
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
    // $('#playerShields').text(player.shields);
    // $('#playerHP').text(player.hp);
    $('#healthProgressBar').val(player.hp);
    $('#healthProgressBar').text(player.hp);
    $('#healthProgressBar').attr('max', player.hpMax);
    $('#shieldProgressBar').val(player.shields);
    $('#shieldProgressBar').text(player.shields);
    $('#shieldProgressBar').attr('max', player.shieldsMax);

    // $('#shieldProgressBar').attr('aria-valuenow',player.shields);


    $('#playerKills').text(player.kills);
    $('#playerScore').text(player.score);
    // $('#missileCount').text(missileMagazineSize - numFired);
    $('#missileProgressBar').attr('max', missileMagazineSize);
    $('#missileProgressBar').val(missileMagazineSize-numFired);
    $('#missileProgressBar').text(missileMagazineSize-numFired);

}

function playerFires(){
    var newMissile = new Missile(player.left + (player.width / 2), player.top, "up");
    friendly_fires.push(newMissile);
    numFired++;
    drawFires();
}

function missileReload(){
    //print to the screen "reloading"
    $('#messages').text('Reloading...');
    setTimeout(finishReload, missileReloadSpeed);
}

function finishReload(){
    numFired = 0;
    clearMessages();
}

function clearMessages(){
    $('#messages').text('');
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
        playerFires();
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

        if(numFired >= missileMagazineSize - 1){
            $('#messages').text('Reload Missiles');
            // setTimeout(playerFires, missileReloadSpeed);
        }
        else{
            setTimeout(playerFires, missileFireDelay);
        }
        //else fire
        //playerFires();
    }

    if(keymap[82]){
        missileReload();
    }

    // console.log(e.keyCode);
    drawPlayer();
}


//Play Game
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


























