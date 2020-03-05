


// IMPORTS
import { Player, Enemy_1, Missile } from '/modules/ships.js'
import * as gamevariables from '/modules/gamevariables.js'




$(document).ready(function(){


    console.log($(document).width());
    console.log($(document).height());
})










//Create Game World Size
$('#background').width(gamevariables.gameWidth);
$('#background').height(gamevariables.gameHeight);



console.log('GAME.JS LOADED');


//REPLACE WITH CLASS OBJECTS
var player = {
    left: gamevariables.gameWidth / 2,
    top: gamevariables.gameHeight / 4,
}

//REPLACE WITH LIST OF CLASS OBJECTS
var enemies = [
    {left: 350, top: 200},
    {left: 450, top: 250},
    {left: 550, top: 450},
    {left: 650, top: 350},

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
        enemies[i].top = enemies[i].top + gamevariables.enemyMoveSpeed;  //Do movement
    }
}

function moveFires(){
    //Move friendly fires
    for(var i = 0; i < friendly_fires.length; i++){
        friendly_fires[i].top = friendly_fires[i].top - gamevariables.weaponFireMoveSpeed;
    }

    //Move enemy fires
    for(var i = 0; i < enemy_fires.length; i++){
        enemy_fires[i].top = enemy_fires[i].top + gamevariables.weaponFireMoveSpeed; //currently only move down
    }
}

function collisionDetection(obj1, obj2){

    


}


function escapedEnemies(){
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].top > gamevariables.gameHeight + 70){  //if out of bounds
            enemies.splice(i,1)  // Remove only the enemy in question
            gamevariables.numEscapedEnemies++;
        }
    }


}




document.onkeydown = function(e) {
    console.log(e.keyCode);

    //left = 37, right = 39
    if(e.keyCode == 65 && player.left > 300){ //left
        player.left -= gamevariables.playerMoveSpeed;
    }
    if(e.keyCode == 68 && player.left < 600){  //right
        player.left += gamevariables.playerMoveSpeed;
    }
    if(e.keyCode == 83 && player.top <= 620){  //down
        player.top += gamevariables.playerMoveSpeed;
    }
    if(e.keyCode == 87 && player.top >= 450) {  //up
        player.top -= gamevariables.playerMoveSpeed;
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
    setTimeout(gameLoop, gamevariables.gameSpeed);
}


gameLoop();

























