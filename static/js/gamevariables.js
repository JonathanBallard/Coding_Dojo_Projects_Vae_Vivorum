



// ----------GAME VARIABLES----------
var difficultyRate = 1; //Later turn this into a slider on dashboard, pass it through JSON to here
// GAME MAP SIZE
var gameHeight = $(document).height() * 0.8;
var gameWidth = $(document).width() * 0.7;
var viewportHeight = $(document).height() * 0.8;
var viewportWidth = $(document).width() * 0.7;
var map = $('#background');
var mapOffsetLeft = ($(document).width() - gameWidth) / 2;
var mapOffsetTop = ($(document).height() - gameHeight) / 2;

//COUNTER
var loopCounter = 0;


// OTHER
var keymap = {};
var endOfGame = false;
var muteToggle = false;
var gameWinScore = 4000 * (difficultyRate + 0.5);  //standard
// var gameWinScore = 2500;  //testing
var winLossModifier = 0.25;
var gameFinished = false;
var gameReady = false;

// SPEEDS
var gameSpeed = 100;
var playerMoveSpeed = 10;
var enemyMoveSpeed = Math.floor(10 * difficultyRate);
var weaponFireMoveSpeed = 25;
var preGamePause = 5000;

//ENEMIES
var enemiesKilled = 0;
var numEscapedEnemies = 0;

//RATES
var enemyHealthMultiplier = difficultyRate + 0.5;
var enemyDamageMultiplier = difficultyRate + 0.5;
var enemySpawnRate = 4000;
var enemySpawnTimer = enemySpawnRate / difficultyRate; //how often waves spawn
var shieldRechargeRate = 0.25 / (difficultyRate / 2); //How much shields recharge per tick
var shieldRechargeDelay = 3000;


//WEAPONS



//DAMAGE
var rammingDamage = 25;  //Base ramming damage, actual formula: rammingDamage + (enemy.speed / 2)
var rammingModifier = 0.5; //modifies xp and score gained for enemies killed with ramming



//AUDIO
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


// Class Modifiers from Map
var abilityCooldownMult = 0;
var playerHealthMult = 0;
var playerShieldsMult = 0;









// Read Map Data and apply
var mapName = $('#mapName').attr('data-val');
var mapBackground = $('#mapBackground').attr('data-val');
var mapDifficulty = $('#mapDifficulty').attr('data-val');
var modifier1Name = $('#modifier1Name').attr('data-val');
var modifier1Amount = $('#modifier1Amount').attr('data-val');
var modifier2Name = $('#modifier2Name').attr('data-val');
var modifier2Amount = $('#modifier2Amount').attr('data-val');
var modifier3Name = $('#modifier3Name').attr('data-val');
var modifier3Amount = $('#modifier3Amount').attr('data-val');


difficultyRate = mapDifficulty;
var mapPath = "../static/img/backgrounds/" + mapBackground

$('#background').css('background-image', "url(" + mapPath + ")")
console.log($('#background').css('background-image'));
console.log(mapPath);

function applyModifier(mod,amt){
    switch (mod) {
        case "Enemy Spawn Rate":
            enemySpawnRate += enemySpawnRate * amt;
            enemySpawnTimer = enemySpawnRate / difficultyRate;
            break;

        case "enemySpawnRate":
            enemySpawnRate += enemySpawnRate * amt;
            enemySpawnTimer = enemySpawnRate / difficultyRate;
            break;
    
        case "Enemy Move Speed":
            enemyMoveSpeed += enemyMoveSpeed * amt;
            break;

        case "Enemy Health Multiplier":
            enemyHealthMultiplier += enemyHealthMultiplier * amt;
            break;

        case "enemyHealthMultiplier":
            playerHealthMult = amt;
            break;

        case "Enemy Damage Multiplier":
            enemyDamageMultiplier += enemyDamageMultiplier * amt;
            break;

        case "Ramming Damage":
            rammingDamage += rammingDamage * amt;
            break;

        case "Victory Score":
            gameWinScore += gameWinScore * amt;
            break;

        case "Ability Cooldown":
            abilityCooldownMult = amt;
            break;

        case "Player Health Multiplier":
            playerHealthMult = amt;
            break;

        case "Player Shields Multiplier":
            playerShieldsMult = amt;
            break;

        case "Player Shields Recharge Delay":
            shieldRechargeDelay += shieldRechargeDelay * amt;
            break;
        
        case "playerShieldsRechargeDelayMultiplier":
            shieldRechargeDelay += shieldRechargeDelay * amt;
            break;
    
        default:
            console.log("Unrecognized Modifier:", mod, '=', amt);
            break;
    }
}


applyModifier(modifier1Name,modifier1Amount);
applyModifier(modifier2Name,modifier2Amount);
applyModifier(modifier3Name,modifier3Amount);


















