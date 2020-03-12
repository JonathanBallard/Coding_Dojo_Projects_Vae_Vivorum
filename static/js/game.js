


console.log('GAME.JS LOADED');







//**************************************************************************************************************************************/





// $(document).ready(function(){
//     console.log($(document).width());
//     console.log($(document).height());

// })








//Create Game World Size
$('#background').width(gameWidth);
$('#background').height(gameHeight);





var player = new Player((gameWidth / 2), (gameHeight * 0.95))


// Passive Abilities from Jinja
$(document).ready(function(){
    Player.passive1 = $('#passive1').attr('data-passive');
    Player.passive2 = $('#passive2').attr('data-passive');
    Player.passive3 = $('#passive3').attr('data-passive');
    Player.passive4 = $('#passive4').attr('data-passive');
    Player.passive5 = $('#passive5').attr('data-passive');
    Player.passive6 = $('#passive6').attr('data-passive');
    Player.passive7 = $('#passive7').attr('data-passive');
    Player.passive8 = $('#passive8').attr('data-passive');
    updatePlayer();
})

startingEnemy1 = new Enemy_1(350, 80, "down");
startingEnemy2 = new Enemy_1(450, 80, "down");
startingEnemy3 = new Enemy_1(550, 80, "down");
startingEnemy4 = new Enemy_1(650, 80, "down");
spawnDelay(startingEnemy1);
spawnDelay(startingEnemy2);
spawnDelay(startingEnemy3);
spawnDelay(startingEnemy4);
enemyFireDelay(startingEnemy1, "down");
enemyFireDelay(startingEnemy2, "down");
enemyFireDelay(startingEnemy3, "down");
enemyFireDelay(startingEnemy4, "down");

var enemies = [
    startingEnemy1,
    startingEnemy2,
    startingEnemy3,
    startingEnemy4,
]


var weapon_fires = []
var enemy_fires = []
var friendly_fires = []
var ammoPercent = 100;


function updatePlayer(){

    player.hp += Player.passive2 * 12;
    player.hpMax += Player.passive2 * 12;
    player.armor += Math.floor(Player.passive2 / 2);
    player.shields += Player.passive3 * 5;
    player.shieldsMax += Player.passive3 * 5;
    player.ability1CooldownTime -= Player.passive6 * 200;
    player.ability2CooldownTime -= Player.passive6 * 200;
    player.ability3CooldownTime -= Player.passive6 * 200;
    player.ability4CooldownTime -= Player.passive6 * 200;
    player.ability5CooldownTime -= Player.passive6 * 200;
    player.ability6CooldownTime -= Player.passive6 * 200;
    ChaingunRound.reloadSpeed -= (Player.passive8 * 80);
    ChaingunRound.magazineSize += (Player.passive7 * 10);

    // console.log('Player.passive3: ' + Player.passive3);
    // console.log('Player.passive3 * 5: ' + Player.passive3 * 5);
    // console.log('player.shields: ' + player.shields);
    // console.log('player.shieldsMax: ' + player.shieldsMax);







}



function drawPlayer(){
    content = "";
    content = "<div class = 'player' style='left:" + player.left + "px; top:" + player.top + "px;'></div>";

    if(player.shields < player.shieldsMax && player.shieldsInterrupt == false){
        player.shieldsRecharging = true;
    }

    if(player.shieldsRecharging == true && player.shieldsInterrupt == true){
        player.shieldsRecharging = false;
    }
    else if(player.shieldsRecharging == true){ //start recharge
        shieldDelay(player); //starts the delay before recharge begins
    }
    

    document.getElementById("players").innerHTML = content;
}

function drawEnemies(){
    content = "";
    for(var i = 0; i < enemies.length; i++){
        var enemyClass = "";
        enemyClass += enemies[i].type, enemies[i].facing;
        // content += "<div class = 'enemy' style='left:" + enemies[i].left + "px; top:" + enemies[i].top + "px;'></div>";
        content += "<div class = '" + enemies[i].type + " " + enemies[i].facing + "' style='left:" + enemies[i].left + "px; top:" + enemies[i].top + "px;'></div>";

    }
    document.getElementById("enemies").innerHTML = content;

}

function drawFires(){
    content = "";
    for(var i = 0; i < friendly_fires.length; i++){
        content += "<div class = '" + friendly_fires[i].type + "' style = 'left: " + friendly_fires[i].left + "px; top: " + friendly_fires[i].top + "px;'></div>";
    }
    document.getElementById("friendly_fires").innerHTML = content;

    content = "";
    for(var i = 0; i < enemy_fires.length; i++){
        content += "<div class = '" + enemy_fires[i].type + "' style = 'left: " + enemy_fires[i].left + "px; top: " + enemy_fires[i].top + "px;'></div>";
    }
    document.getElementById("enemy_fires").innerHTML = content;

}


function moveEnemies(){

    for(var i = 0; i < enemies.length; i++){

        if(enemies[i].direction == "down"){
            //console.log("MOVE DOWN");
            enemies[i].facing = "enemyDownFace";
            enemies[i].top = enemies[i].top + enemies[i].speed;  //move down
        }
        if(enemies[i].direction == "up"){
            //console.log("MOVE UP");
            enemies[i].facing = "enemyUpFace";
            enemies[i].top = enemies[i].top - enemies[i].speed;  //move up
        }
        if(enemies[i].direction == "left"){
            //console.log("MOVE LEFT");
            enemies[i].facing = "enemyLeftFace";
            enemies[i].left = enemies[i].left - enemies[i].speed;  //move left
        }
        if(enemies[i].direction == "right"){
            //console.log("MOVE RIGHT");
            enemies[i].facing = "enemyRightFace";
            enemies[i].left = enemies[i].left + enemies[i].speed;  //move right
        }
        if(enemies[i].direction == "downright"){
            //console.log("MOVE down RIGHT");
            enemies[i].facing = "enemyDownRightFace";
            enemies[i].left = enemies[i].left + (enemies[i].speed / 2);  //move right
            enemies[i].top = enemies[i].top + (enemies[i].speed / 2);  //move down
        }

        if(enemies[i].direction == "upright"){
            //console.log("MOVE up RIGHT");
            enemies[i].facing = "enemyUpRightFace";
            enemies[i].left = enemies[i].left + (enemies[i].speed / 2);  //move right
            enemies[i].top = enemies[i].top - (enemies[i].speed / 2);  //move up
        }

        if(enemies[i].direction == "downleft"){
            //console.log("MOVE down LEFT");
            enemies[i].facing = "enemyDownLeftFace";
            enemies[i].top = enemies[i].top + (enemies[i].speed / 2);  //move down
            enemies[i].left = enemies[i].left - (enemies[i].speed / 2);  //move left
        }

        if(enemies[i].direction == "upleft"){
            //console.log("MOVE up LEFT");
            enemies[i].facing = "enemyUpLeftFace";
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
        // console.log('226: Current Index in moveFires() friendly_fires is: ' + i);
        // console.log('227: friendly_fires.length in moveFires() is: ' + friendly_fires.length);

        if(friendly_fires[i].type == "torpedo"){
            friendly_fires[i].speed += Player.passive5 * 1.25;
        }

        // friendly_fires[i].top = friendly_fires[i].top - weaponFireMoveSpeed;


        if(friendly_fires[i].direction == "down"){
            //console.log("MOVE DOWN");
            friendly_fires[i].top = friendly_fires[i].top + friendly_fires[i].speed;  //move down
        }
        if(friendly_fires[i].direction == "up"){
            //console.log("MOVE UP");
            friendly_fires[i].top = friendly_fires[i].top - friendly_fires[i].speed;  //move up
        }
        if(friendly_fires[i].direction == "upleft"){
            friendly_fires[i].top = friendly_fires[i].top - friendly_fires[i].speed;  //move up
            friendly_fires[i].left = friendly_fires[i].left - friendly_fires[i].speed;  //move left
        }
        if(friendly_fires[i].direction == "upright"){
            //console.log("MOVE UP");
            friendly_fires[i].top = friendly_fires[i].top - friendly_fires[i].speed;  //move up
            friendly_fires[i].left = friendly_fires[i].left + friendly_fires[i].speed;  //move right
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
                // break;
            }
        }

        if(friendly_fires[i]){
            if(friendly_fires[i].left < -200 || friendly_fires[i].left > (gameWidth + 200) || friendly_fires[i].top < -200 || friendly_fires.top > (gameHeight + 200)){
                friendly_fires.splice(i,1);
                i--;
            }
        }
    }

    //Move enemy fires
    for(var i = 0; i < enemy_fires.length; i++){
        
        if(enemy_fires[i].direction == "down"){
            //console.log("MOVE DOWN");
            enemy_fires[i].top = enemy_fires[i].top + enemy_fires[i].speed;  //move down
        }
        if(enemy_fires[i].direction == "up"){
            //console.log("MOVE UP");
            enemy_fires[i].top = enemy_fires[i].top - enemy_fires[i].speed;  //move up
        }
        if(enemy_fires[i].direction == "upleft"){
            enemy_fires[i].top = enemy_fires[i].top - enemy_fires[i].speed;  //move up
            enemy_fires[i].left = enemy_fires[i].left - enemy_fires[i].speed;  //move left
        }
        if(enemy_fires[i].direction == "upright"){
            enemy_fires[i].top = enemy_fires[i].top - enemy_fires[i].speed;  //move up
            enemy_fires[i].left = enemy_fires[i].left + enemy_fires[i].speed;  //move right
        }
        if(enemy_fires[i].direction == "downleft"){
            enemy_fires[i].top = enemy_fires[i].top + enemy_fires[i].speed;  //move down
            enemy_fires[i].left = enemy_fires[i].left - enemy_fires[i].speed;  //move left
        }
        if(enemy_fires[i].direction == "downright"){
            enemy_fires[i].top = enemy_fires[i].top + enemy_fires[i].speed;  //move down
            enemy_fires[i].left = enemy_fires[i].left + enemy_fires[i].speed;  //move right
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

        if(enemy_fires[i]){
            if(enemy_fires[i].left < -200 || enemy_fires[i].left > (gameWidth + 200) || enemy_fires[i].top < -200 || enemy_fires.top > (gameHeight + 200)){
                enemy_fires.splice(i,1);
                i--;
            }
        }

    }
}

function enemyDamagedByFire(enemy, fire, enemyIndex, fireIndex){
    enemy.shieldsRecharging = false;

    if(fire.type == "torpedo"){
        fire.damage += Player.passive4 * 30;
    }
    else if(fire.type == "chaingunRound"){
        fire.damage += Player.passive1 * 5;
    }
    else if(fire.type == "missile"){
        fire.damage += Player.passive4 * 10;
    }

    if(enemy.shields > fire.damage){
        enemy.shields -= fire.damage;
        document.getElementById("explosion7").play();
    }
    else if(enemy.shields > 0 && enemy.shields < fire.damage){
        document.getElementById("explosion7").play();
        enemy.shields -= fire.damage;
        enemy.hp += enemy.shields;
        enemy.shields = 0;
        document.getElementById("explosion6").play();
    }
    else {
        document.getElementById("explosion6").play();
        enemy.hp -= fire.damage;
    }

    if(fire.piercing == false){
        friendly_fires.splice(fireIndex,1);
    }

    //If out of hp and shields, delete
    if(enemy.hp <= 0){
        document.getElementById("explosion2").play();
        enemies.splice(enemyIndex, 1);
        enemiesKilled++;
        player.xp += enemy.xpValue;
        player.kills++;
        player.money += enemy.moneyValue;
        player.score += enemy.scoreValue;
    }
}

function playerDamagedByFire(fire, fireIndex){
    player.shieldsInterrupt = true;
    interruptDelay();
    if(player.shields >= fire.damage){
        player.shields -= fire.damage;
        //shield damage sound
        document.getElementById("explosion7").play();
    }
    else if(player.shields > 0 && player.shields < fire.damage){
        document.getElementById("explosion7").play();
        player.shields -= fire.damage;
        player.hp += player.shields;
        document.getElementById("explosion6").play();
        player.shields = 0;
    }
    else {
        //hull damage sound
        document.getElementById("explosion6").play();
        player.hp -= fire.damage;
    }

    if(fire.piercing == false){
        enemy_fires.splice(fireIndex,1);
    }


    //If out of hp and shields, delete
    if(player.hp <= 0){
        gameOver();
    }
}

function rammedPlayer(enemy, enemyIndex){
    var rammingDamageFormula = (rammingDamage + (enemy.speed / 2));
    enemy.shieldsRecharging = false;
    player.shieldsInterrupt = true;
    interruptDelay();
    if(player.shields >= rammingDamageFormula){
        player.shields -= rammingDamageFormula;
    }
    else if(player.shields > 0 && player.shields < rammingDamageFormula){
        player.shields -= rammingDamageFormula;
        var remainingDamage = player.shields;
        player.shields = 0;
        if((remainingDamage * -1) > player.armor){
            player.hp += (remainingDamage + player.armor );
        }
    }
    else {
        if(rammingDamageFormula > player.armor){
            player.hp -= (rammingDamageFormula - player.armor);
        }
    }

    player.kills++;
    player.money += enemy.moneyValue  * rammingModifier;
    player.score += enemy.scoreValue  * rammingModifier;
    player.xp += enemy.xpValue  * rammingModifier;
    enemies.splice(enemyIndex,1);

    //play enemy destroyed sound
    document.getElementById("explosion2").play();

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
    leftOffset = 15;
    topOffset = 15;
    var randomizer = 0;
    randomizer = Math.floor(Math.random() * 300) - 150;

    //Start from Top
    if(edgeOfMap == 1){
        edgeToTravel = 1;
        direction = "down";
        left = (gameWidth / 4) + randomizer;
        top = 160;
    }
    else if(edgeOfMap == 0){
        edgeToTravel = 1;
        direction = "down";
        left = (gameWidth / 1.2) + randomizer;
        top = 160;
    }

    //Start from Left
    else if(edgeOfMap == 2){
        edgeToTravel = 3;
        direction = "right";
        left = 160;
        top = (gameHeight / 2) + randomizer;
    }

    //Start from Right
    else if(edgeOfMap == 3){
        edgeToTravel = 2;
        direction = "left";
        left = gameWidth - 160;
        top = (gameHeight / 2) + randomizer;
    }

    else if(edgeOfMap == 4){
        edgeToTravel = 1;
        direction = "down";
        left = (gameWidth * 0.25) + randomizer;
        top = 160;
    }
    else if(edgeOfMap == 5){
        edgeToTravel = 1;
        direction = "down";
        left = (gameWidth * 0.75) + randomizer;
        top = 160;
    }
    else if(edgeOfMap == 6){
        edgeToTravel = 1;
        direction = "downright";
        left = (gameWidth * 0.15) + randomizer;
        top = 120;
    }
    else if(edgeOfMap == 7){
        edgeToTravel = 1;
        direction = "downleft";
        left = (gameWidth * 0.85) + randomizer;
        top = 130;
    }

    //Decide here what to spawn
    var enemySpawner = Math.floor(Math.random() * 13);
    var typeOfEnemy = "Enemy_1";
    
    if(enemySpawner <= 4){
        typeOfEnemy = "Enemy_1";
    }
    else if(enemySpawner == 5){
        typeOfEnemy = "Enemy_2";
    }
    else if(enemySpawner == 6 || enemySpawner == 7){
        typeOfEnemy = "Enemy_3";
    }
    else if(enemySpawner == 8){
        typeOfEnemy = "Enemy_4";
    }
    else if(enemySpawner >= 9 && enemySpawner < 13){
        typeOfEnemy = "Enemy_5";
    }
    else if(enemySpawner == 13){
        typeOfEnemy = "Enemy_6";
    }



    if(typeOfEnemy == "Enemy_1"){
        spawnEnemy(Enemy_1,left,leftOffset+15,top,topOffset+15,direction);
    }
    else if(typeOfEnemy == "Enemy_2"){
        spawnEnemy(Enemy_2,left,leftOffset+30,top,topOffset+30,direction);
    }
    else if(typeOfEnemy == "Enemy_3"){
        spawnEnemy(Enemy_3,left,leftOffset+25,top,topOffset+25,direction);
    }
    else if(typeOfEnemy == "Enemy_4"){
        spawnEnemy(Enemy_4,left,leftOffset+35,top,topOffset+35,direction);
    }
    else if(typeOfEnemy == "Enemy_5"){
        spawnEnemy(Enemy_5,left,leftOffset+15,top,topOffset+15,direction);
    }
    else if(typeOfEnemy == "Enemy_6"){
        spawnEnemy(Enemy_6,left,leftOffset+25,top,topOffset+25,direction);
    }


    // console.log("Wave Spawned: " + typeOfEnemy);
    setTimeout(spawnEnemyWave, enemySpawnTimer);
}

function spawnEnemy(enemyType, left, leftOffset, top, topOffset, direction){


    if(enemyType.formation == "line"){
        // console.log('enemyType.formation == LINE')
        for(var i = 0; i < enemyType.numFormation; i++){
            var lineLeftOffset = "";
            lineLeftOffset = leftOffset + (enemyType.width * i);
            if(left < 250){
                enemy = new enemyType(left + lineLeftOffset, top, direction)
            }
            else if(left > 250){
                enemy = new enemyType(left - lineLeftOffset, top, direction)
            }
            spawnDelay(enemy);
            enemyFireDelay(enemy, direction);
            enemies.push(enemy);
        }
    }

    else if(enemyType.formation == "cluster"){
        if(enemyType.numFormation == 2){
            enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
            enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
            enemies.push(enemy1);
            enemies.push(enemy2);
            spawnDelay(enemy1);
            spawnDelay(enemy2);
            enemyFireDelay(enemy1, direction);
            enemyFireDelay(enemy2, direction);
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
            spawnDelay(enemy1);
            spawnDelay(enemy2);
            spawnDelay(enemy3);
            spawnDelay(enemy4);
            enemyFireDelay(enemy1, direction);
            enemyFireDelay(enemy2, direction);
            enemyFireDelay(enemy3, direction);
            enemyFireDelay(enemy4, direction);
        }
        else if(enemyType.numFormation == 6){
            enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
            enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
            enemy3 = new enemyType(left + leftOffset, top + topOffset, direction);
            enemy4 = new enemyType(left - leftOffset, top + topOffset, direction);
            enemy5 = new enemyType(left - (leftOffset * 3), top - topOffset, direction);
            enemy6 = new enemyType(left - (leftOffset * 3), top + topOffset, direction);
            enemies.push(enemy1);
            enemies.push(enemy2);
            enemies.push(enemy3);
            enemies.push(enemy4);
            enemies.push(enemy5);
            enemies.push(enemy6);
            spawnDelay(enemy1);
            spawnDelay(enemy2);
            spawnDelay(enemy3);
            spawnDelay(enemy4);
            spawnDelay(enemy5);
            spawnDelay(enemy6);
            enemyFireDelay(enemy1, direction);
            enemyFireDelay(enemy2, direction);
            enemyFireDelay(enemy3, direction);
            enemyFireDelay(enemy4, direction);
            enemyFireDelay(enemy5, direction);
            enemyFireDelay(enemy6, direction);
        }
        else if(enemyType.numFormation == 8){
            enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
            enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
            enemy3 = new enemyType(left + leftOffset, top + topOffset, direction);
            enemy4 = new enemyType(left - leftOffset, top + topOffset, direction);
            enemy5 = new enemyType(left - (leftOffset * 3), top - topOffset, direction);
            enemy6 = new enemyType(left - (leftOffset * 3), top + topOffset, direction);
            enemy7 = new enemyType(left - leftOffset, top + (topOffset * 3), direction);
            enemy8 = new enemyType(left - leftOffset, top - (topOffset * 3), direction);
            enemies.push(enemy1);
            enemies.push(enemy2);
            enemies.push(enemy3);
            enemies.push(enemy4);
            enemies.push(enemy5);
            enemies.push(enemy6);
            enemies.push(enemy7);
            enemies.push(enemy8);
            spawnDelay(enemy1);
            spawnDelay(enemy2);
            spawnDelay(enemy3);
            spawnDelay(enemy4);
            spawnDelay(enemy5);
            spawnDelay(enemy6);
            spawnDelay(enemy7);
            spawnDelay(enemy8);
            enemyFireDelay(enemy1, direction);
            enemyFireDelay(enemy2, direction);
            enemyFireDelay(enemy3, direction);
            enemyFireDelay(enemy4, direction);
            enemyFireDelay(enemy5, direction);
            enemyFireDelay(enemy6, direction);
            enemyFireDelay(enemy7, direction);
            enemyFireDelay(enemy8, direction);
        }
    }

    else if(enemyType.formation == "hollowX" && enemyType.numFormation == 8){
        enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
        enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
        enemy3 = new enemyType(left + leftOffset, top + topOffset, direction);
        enemy4 = new enemyType(left - leftOffset, top + topOffset, direction);
        enemy5 = new enemyType(left + (leftOffset * 2), top - (topOffset * 2), direction);
        enemy6 = new enemyType(left - (leftOffset * 2), top - (topOffset * 2), direction);
        enemy7 = new enemyType(left + (leftOffset * 2), top + (topOffset * 2), direction);
        enemy8 = new enemyType(left - (leftOffset * 2), top + (topOffset * 2), direction);

        enemies.push(enemy1);
        enemies.push(enemy2);
        enemies.push(enemy3);
        enemies.push(enemy4);
        enemies.push(enemy5);
        enemies.push(enemy6);
        enemies.push(enemy7);
        enemies.push(enemy8);
        spawnDelay(enemy1);
        spawnDelay(enemy2);
        spawnDelay(enemy3);
        spawnDelay(enemy4);
        spawnDelay(enemy5);
        spawnDelay(enemy6);
        spawnDelay(enemy7);
        spawnDelay(enemy8);
        enemyFireDelay(enemy1, direction);
        enemyFireDelay(enemy2, direction);
        enemyFireDelay(enemy3, direction);
        enemyFireDelay(enemy4, direction);
        enemyFireDelay(enemy5, direction);
        enemyFireDelay(enemy6, direction);
        enemyFireDelay(enemy7, direction);
        enemyFireDelay(enemy8, direction);
    }

    else if(enemyType.formation == "echelon" && enemyType.numFormation == 6){
        enemy1 = new enemyType(left + leftOffset, top - topOffset, direction);
        enemy2 = new enemyType(left - leftOffset, top - topOffset, direction);
        enemy3 = new enemyType(left + leftOffset, top + topOffset, direction);
        enemy4 = new enemyType(left - leftOffset, top + topOffset, direction);
        enemy5 = new enemyType(left + (leftOffset * 2), top - topOffset, direction);
        enemy6 = new enemyType(left - (leftOffset * 2), top - topOffset, direction);
        
        enemies.push(enemy1);
        enemies.push(enemy2);
        enemies.push(enemy3);
        enemies.push(enemy4);
        enemies.push(enemy5);
        enemies.push(enemy6);
        spawnDelay(enemy1);
        spawnDelay(enemy2);
        spawnDelay(enemy3);
        spawnDelay(enemy4);
        spawnDelay(enemy5);
        spawnDelay(enemy6);
        enemyFireDelay(enemy1, direction);
        enemyFireDelay(enemy2, direction);
        enemyFireDelay(enemy3, direction);
        enemyFireDelay(enemy4, direction);
        enemyFireDelay(enemy5, direction);
        enemyFireDelay(enemy6, direction);
    }


}

function endGame(gameStatus){
    var modifier = 1;
    if(gameStatus == 'win'){
        modifier += winLossModifier;
    }
    else if(gameStatus == 'lose'){
        modifier -= winLossModifier;
    }

    var data = {
        score : Math.floor((player.score * modifier)),
        kills : (player.kills),
        xp : Math.floor((player.xp * modifier)),
        money : Math.floor((player.money * modifier))
    }


    $.ajax({
        url: "/output",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data)
    });

    if(gameStatus == 'win'){
        alert('Victory');
    }
    else if(gameStatus == 'lose'){
        alert('Defeat');
    }
    else if(gameStatus == 'bug'){
        alert("We've encountered a bug, please reload from the beginning, thank you");
    }

    setTimeout(locationReplace,3000);
    // location.reload();
}

function locationReplace(){

    window.location.replace("/overview");
}


function victory(){
    // VICTORY HERE
    if(endOfGame == false){
        endOfGame = true;  //prevent endGame() from running multiple times
        document.getElementById("playerWinSound").play();
        console.log("You Win!")
        endGame('win');
    }
}

function gameOver(){
    if(endOfGame == false){
        endOfGame = true; //prevent endGame() from running multiple times
        document.getElementById("playerDeathSound").play();  //play player destroyed sound
        console.log("You Lose!")
        endGame('lose');
    }
    // END GAME HERE
}

function collisionDetection(obj1, obj2){
    var collision = false;



    if(obj1 && obj2){
        if(obj1.left < obj2.left + obj2.width &&
            obj1.left + obj1.width > obj2.left &&
            obj1.top < obj2.top + obj2.height &&
            obj1.top + obj1.height > obj2.top){
                collision = true;
                // console.log("Collision between: " + obj1.name + " and " + obj2.name )
            }
    }


    return collision;
}

function interruptDelay(){
    setTimeout(interruptOff,shieldRechargeDelay);
}

function interruptOff(){
    player.shieldsInterrupt = false;
    shieldDelay(player);
}


function shieldDelay(obj1){
    setTimeout(shieldRecharge, shieldRechargeDelay, obj1);
}
function shieldRecharge(obj1){
    // var shieldRechargeAmount = obj1.shieldsMax / 200;   //half a percent of max shields
    var shieldRechargeAmount = 1; //testing
    if(obj1.shields < obj1.shieldsMax && obj1.shieldsInterrupt == false){
        obj1.shields += shieldRechargeAmount;
        // setTimeout(shieldRecharge,200,obj1);
    }
    else if(obj1.shields >= obj1.shieldsMax){
        obj1.shieldsRecharging = false;
    }

}

function spawnDelay(enemy){
    setTimeout(spawnVuln,450,enemy);
}

function spawnVuln(enemy){
    enemy.spawning = false;
}


function escapedEnemies(){
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].shields < enemies[i].shieldsMax){
            // shieldRecharge(enemies[i]);
            // enemies[i].shields += shieldRechargeRate;
        }
        //cleanup enemies
        if(enemies[i].spawning == false){
            if(enemies[i].top > gameHeight + 70 || 
                enemies[i].top < -70 || 
                enemies[i].left < -70 || 
                enemies[i].left > gameWidth + 70){  //if out of bounds
                    enemies.splice(i,1)  // Remove only the enemy in question
                    i--;
                    numEscapedEnemies++;
                }
        }
    }

    //cleanup enemy weapons fire
    for(var i = 0; i < enemy_fires.length; i++){
        if(enemy_fires[i].top > gameHeight + 70 || 
            enemy_fires[i].top < -70 || 
            enemy_fires[i].left < -70 || 
            enemy_fires[i].left > gameWidth + 70){ 
                enemy_fires.splice(i,1);
                i--;
            }
    }
}

function writeStats(){

    $('.healthProgressBar').text(player.hp);
    $('.healthProgressBar').attr('aria-valuenow', 100 * (player.hp / player.hpMax));
    $('.healthProgressBar').css('width',(100 * (player.hp / player.hpMax)) + '%');

    $('.shieldProgressBar').text(player.shields);
    $('.shieldProgressBar').attr('aria-valuenow', 100 * (player.shields / player.shieldsMax));
    $('.shieldProgressBar').css('width',(100 * (player.shields / player.shieldsMax)) + '%');

    $('#playerKills').text(player.kills);
    $('#playerScore').text(player.score);

    $('.chaingunProgressBar').text(ChaingunRound.magazineSize - player.numFired);
    $('.chaingunProgressBar').attr('aria-valuenow', ammoPercent);
    $('.chaingunProgressBar').css('width',ammoPercent + '%');

}

function playerFires(){
    if(player.currentWeapon == "missile"){
        var newFire = new Missile(player.left + (player.width / 2), player.top, "up");
        document.getElementById("missileVolleySound").play();
        friendly_fires.push(newFire);
        player.numFired++;
        drawFires();
    }
    else if(player.currentWeapon == "chaingun" && player.reloading == false){
        var inaccuracy = Math.floor(Math.random() * 20) - 10;
        var newFire = new ChaingunRound(player.left + inaccuracy + (player.width / 2), player.top, "up");
        ammoPercent -= 100 / ChaingunRound.magazineSize;
        document.getElementById("chaingunSound").play();
        friendly_fires.push(newFire);
        player.numFired++;
        drawFires();
    }
}

function enemyFires(enemy, direction){
    var random = Math.floor(Math.random() * 3) + 1;
    if(random == 1){
        randomDirection = direction; //fire the direction enemy is moving
    }
    else {
        randomDirection = "down";
    }
    if(enemy.weapon == "fireball"){
        //Make sure enemy is still alive
        if(enemies.includes(enemy)){

            if(enemy.numShots > 1){
                for(var i = 0; i < enemy.numShots / 2; i++){
                    var newFire = new Fireball(enemy.left + (enemy.width / 2) - ((i + 1) * 10), enemy.top + (enemy.height / 2), randomDirection);
                    var newFire2 = new Fireball(enemy.left + (enemy.width / 2) + ((i + 1) * 10), enemy.top + (enemy.height / 2), randomDirection);
                    enemy_fires.push(newFire);
                    enemy_fires.push(newFire2);
                }
            }

            else if(enemy.numShots == 1){
                var newFire = new Fireball(enemy.left + (enemy.width / 2), enemy.top + (enemy.height / 2), randomDirection);
                enemy_fires.push(newFire);
            }

        }
    }
    
    if(enemy.keepFiring == true){
        enemyFireDelay(enemy, direction);
    }
    drawFires();
}

function enemyFireDelay(enemy, direction){
    setTimeout(enemyFires,enemy.fireDelay,enemy,direction);
}

function missileReload(){
    //print to the screen "reloading"
    $('#messages').text('Reloading...');
    setTimeout(finishReload, Missile.reloadSpeed);
}

function chaingunReload(){
    //print to the screen "reloading"
    $('#messages').text('Reloading Chaingun...');
    player.reloading = true;
    setTimeout(finishReload, ChaingunRound.reloadSpeed);
}

function finishReload(){
    player.numFired = 0;
    player.reloading = false;
    ammoPercent = 100;
    clearMessages();
}

function clearMessages(){
    $('#messages').text('');
}

function clearAbilityMessages(){
    $('#abilityMessages').text('');
}

function missileVolley(){
    for(var i = 0; i < Player.missileVolleyNumMissiles; i++){
        offsetTop = Math.floor(Math.random() * 15) + 10;
        offsetLeft = Math.floor(Math.random() * 45);
        if(i % 2 == 0){
            var newFire = new Missile(player.left + (player.width / 2) + offsetLeft, player.top + offsetTop, "up");
        }
        else{
            var newFire = new Missile(player.left + (player.width / 2) - offsetLeft, player.top - offsetTop, "up");
        }
        friendly_fires.push(newFire);
    }
    // Play Volley Sound
    document.getElementById("missileVolleySound").play();
}

function torpedo(){
    var newFire = new Torpedo(player.left + (player.width / 2), player.top + 5, "up");
    friendly_fires.push(newFire);
    document.getElementById("torpedoSound").play();
}

function abilityCooldown(ability){
    if(ability == "missileVolley"){
        setTimeout(clearCooldown,player.ability1CooldownTime,1);
    }
    if(ability == "torpedo"){
        setTimeout(clearCooldown,player.ability2CooldownTime,2);
    }


}

function clearCooldown(abilityNum){
    if(abilityNum == 1){
        $('.abilityOne').css('background-color','green');
        player.ability1OnCooldown = false;
    }
    if(abilityNum == 2){
        $('.abilityTwo').css('background-color','green');
        player.ability2OnCooldown = false;
    }
    if(abilityNum == 3){
        $('.abilityThree').css('background-color','green');
        player.ability3OnCooldown = false;
    }
    if(abilityNum == 4){
        $('.abilityFour').css('background-color','green');
        player.ability4OnCooldown = false;
    }
    if(abilityNum == 5){
        $('.abilityFive').css('background-color','green');
        player.ability5OnCooldown = false;
    }
    if(abilityNum == 6){
        $('.abilitySix').css('background-color','green');
        player.ability6OnCooldown = false;
    }

    clearAbilityMessages();
}



//MOUSE EVENTS
//Mouse Event Listener
document.addEventListener("mousemove", mouseMove, false);
// document.addEventListener("click", mouseClick, false);

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

// DISABLED MOUSE FIRING WEAPONS
// function mouseClick(e) {
//     //fire weapon
//     if(e.button == 0){
//         playerFires();
//     }
// }



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


    //FIRE 'spacebar'
    if(keymap[32]){

        if(player.numFired >= ChaingunRound.magazineSize - 1){
            $('#messages').text('Reload Chaingun');
            document.getElementById("chaingunEmptySound").play();
        }
        else{
            setTimeout(playerFires, ChaingunRound.fireDelay);
        }
    }

    // 'r'
    if(keymap[82]){
        chaingunReload();
    }

    // '1' ability-1 MissileVolley
    if(keymap[49]){
        if(player.ability1OnCooldown){
            $('#abilityMessages').text('Ability Not Ready...');
            setTimeout(clearAbilityMessages,2500);
        }
        else {
            missileVolley();
            player.ability1OnCooldown = true;
            $('.abilityOne').css('background-color','red');
            abilityCooldown("missileVolley");
        }
    }
    // '2' ability-2 Torpedo
    if(keymap[50]){
        if(player.ability2OnCooldown){
            $('#abilityMessages').text('Ability Not Ready...');
            setTimeout(clearAbilityMessages,2500);
        }
        else {
            torpedo();
            player.ability2OnCooldown = true;
            $('.abilityTwo').css('background-color','red');
            abilityCooldown("torpedo");
        }
    }




    drawPlayer();
}

//mute sound and change icon based on toggle
$('#muteToggle').click(function(){
    var content = "";

    //turn off volume, icon is fa-volume-off
    //     <i class="fas fa-4x fa-volume-off"></i>
    if(muteToggle == false){
        muteToggle = true;
        content = '<i class="fas fa-4x fa-volume-off"></i>';
        $('#muteToggle').html(content);

        //now volume goes off
        document.getElementById("backgroundMusic").volume = 0;
        document.getElementById("explosion7").volume = 0;
        document.getElementById("explosion6").volume = 0;
        document.getElementById("explosion2").volume = 0;
        document.getElementById("playerWinSound").volume = 0;
        document.getElementById("playerDeathSound").volume = 0;
        document.getElementById("missileVolleySound").volume = 0;
        document.getElementById("chaingunSound").volume = 0;
        document.getElementById("torpedoSound").volume = 0;
        document.getElementById("chaingunEmptySound").volume = 0;
    }

    //otherwise volume normal, icon is fa-volume-up
    //     <i class="fas fa-4x fa-volume-up"></i>
    else {
        muteToggle = false;
        content = '<i class="fas fa-4x fa-volume-up"></i>';
        $('#muteToggle').html(content);

        //now volume goes on
        document.getElementById("backgroundMusic").volume = 0.3;
        document.getElementById("explosion7").volume = 0.3;
        document.getElementById("explosion6").volume = 0.3;
        document.getElementById("explosion2").volume = 0.3;
        document.getElementById("playerWinSound").volume = 0.3;
        document.getElementById("playerDeathSound").volume = 0.3;
        document.getElementById("missileVolleySound").volume = 0.3;
        document.getElementById("chaingunSound").volume = 0.05;
        document.getElementById("torpedoSound").volume = 0.3;
        document.getElementById("chaingunEmptySound").volume = 0.3;
    }
})









//Start Spawn Loop
spawnEnemyWave();

function gameLoop(){

    if(player.score >= gameWinScore){
        victory();
    }
    //If out of hp, delete
    if(player.hp <= 0){
        gameOver();
    }

    drawPlayer();
    drawEnemies();
    drawFires();
    escapedEnemies();
    moveFires();
    moveEnemies();
    writeStats();
    loopCounter++;
    setTimeout(gameLoop, gameSpeed);
}

//Play Game Loop
gameLoop();


























