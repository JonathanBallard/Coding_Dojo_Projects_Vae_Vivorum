
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
var difficultyRate = 1; //Later turn this into a slider on dashboard, pass it through JSON to here
var enemySpawnRate = 4000;
var enemySpawnTimer = enemySpawnRate / difficultyRate;

//WEAPONS
var numFired = 0;
var missileMagazineSize = 25;
var missileReloadSpeed = 1100;
var missileFireDelay = 50;


//DAMAGE
var rammingDamage = 1000000;  //should 1shot everything for the moment, change to do partial damage later
var missileDamage = 1000000; //should 1shot everything for the moment, change to do partial damage later
