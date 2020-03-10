
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
var endOfGame = false;
var muteToggle = false;
var gameWinScore = 2000 * difficultyRate;

// SPEEDS
var gameSpeed = 100;
var playerMoveSpeed = 10;
var enemyMoveSpeed = 10;
var weaponFireMoveSpeed = 25;

//ENEMIES
var enemiesKilled = 0;
var numEscapedEnemies = 0;

//RATES
var enemyHealthMultiplier = difficultyRate + 0.5;
var enemyDamageMultiplier = difficultyRate + 0.5;
var difficultyRate = 1; //Later turn this into a slider on dashboard, pass it through JSON to here
var enemySpawnRate = 4000;
var enemySpawnTimer = enemySpawnRate / difficultyRate; //how often waves spawn
var shieldRechargeRate = 0.25 / (difficultyRate / 2); //How much shields recharge per tick
var shieldRechargeDelay = 3000;


//WEAPONS



//DAMAGE
var rammingDamage = 25;  //Base ramming damage, actual formula: rammingDamage + (enemy.speed / 2)
var rammingModifier = 0.5; //modifies xp and score gained for enemies killed with ramming
// var missileDamage = 1000000; //should 1shot everything for the moment, change to do partial damage later



//AUDIO
document.getElementById("backgroundMusic").volume = 0.4;
document.getElementById("explosion7").volume = 0.3;
document.getElementById("explosion6").volume = 0.3;
document.getElementById("explosion2").volume = 0.3;
document.getElementById("playerWinSound").volume = 0.3;
document.getElementById("playerDeathSound").volume = 0.3;
document.getElementById("missileVolleySound").volume = 0.3;
document.getElementById("chaingunSound").volume = 0.05;
document.getElementById("torpedoSound").volume = 0.3;
document.getElementById("chaingunEmptySound").volume = 0.3;














