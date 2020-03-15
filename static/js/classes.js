//----------CLASSES----------



/*
class Enemy {

    static numFormation = 4;
    static formation = "cluster";
    static width = 60;

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 60;
        this.hp = 120 * enemyHealthMultiplier;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed;
        this.weapon = "fireball";
        this.fireDelay = 2500 / (difficultyRate / 1.5);
        this.numShots = Math.floor(1 * (difficultyRate));
        this.keepFiring = true;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy One";
        this.type = "enemy";
        this.scoreValue = 50;
        this.xpValue = 10;
        this.moneyValue = 20;
        this.spawning = true;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }

}

*/








class Player {

    /*
        Passive 1 is Chaingun Damage
        Passive 2 is Bonus HP and Armor
        Passive 3 is Bonus Shields and Resistance
        Passive 4 is Missile Volley and Torpedo Damage
        Passive 5 is Torpedo Movement Speed
        Passive 6 is Ability Cooldown Reduction
        Passive 7 is Chaingun Ammunition Increase
        Passive 8 is Chaingun Reload Speed
    */

   static passive1 = 0;
   static passive2 = 0;
   static passive3 = 0;
   static passive4 = 0;
   static passive5 = 0;
   static passive6 = 0;
   static passive7 = 0;
   static passive8 = 0;

    static missileVolleyNumMissiles = 8;
    static width = 75;

    constructor(left, top){
        this.passive1 = 0;
        this.passive2 = 0;
        this.passive3 = 0;
        this.passive4 = 0;
        this.passive5 = 0;
        this.passive6 = 0;
        this.passive7 = 0;
        this.passive8 = 0;
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
        this.hp = 100 + (100 * playerHealthMult);
        this.hpMax = 100 + (100 * playerHealthMult);
        this.shieldsMax = 50 + (50 * playerShieldsMult);
        this.shields = 50 + (50 * playerShieldsMult);
        this.shieldsRecharging = false;
        this.shieldsInterrupt = false;
        this.armor = 5;
        this.speed = playerMoveSpeed;
        this.name = "Player";
        this.type = "Player";
        this.score = 0;
        this.kills = 0;
        this.xp = 0;
        this.abilityPointsEarned = 0;
        this.abilityPointsSpent = 0;
        this.money = 0;
        this.level = 0;
        this.currentWeapon = "chaingun";
        this.reloading = false;
        this.numFired = 0;
        this.ability1OnCooldown = false;
        this.ability2OnCooldown = false;
        this.ability3OnCooldown = false;
        this.ability4OnCooldown = false;
        this.ability5OnCooldown = false;
        this.ability6OnCooldown = false;
        this.ability1CooldownTime = 10000 + (10000 * abilityCooldownMult);  //abilityCooldownMult from gamevariables, is a map modifier
        this.ability2CooldownTime = 5000 + (5000 * abilityCooldownMult);
        this.ability3CooldownTime = 10000 + (10000 * abilityCooldownMult);
        this.ability4CooldownTime = 10000 + (10000 * abilityCooldownMult);
        this.ability5CooldownTime = 10000 + (10000 * abilityCooldownMult);
        this.ability6CooldownTime = 10000 + (10000 * abilityCooldownMult);
    }


    warp(left, top){
        this.left = left;
        this.top = top;
    }


}

class Enemy_1 {

    static numFormation = 4;
    static formation = "cluster";
    static width = 60;

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 60;
        this.hp = 120 * enemyHealthMultiplier;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed;
        this.weapon = "fireball";
        this.fireDelay = 2000 / (difficultyRate / 1.5);
        this.numShots = Math.floor(1 * (difficultyRate + 0.5));
        this.keepFiring = true;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy One";
        this.type = "enemy";
        this.scoreValue = 50;
        this.xpValue = 10;
        this.moneyValue = 20;
        this.spawning = true;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}

class Enemy_2 {

    static numFormation = 6;
    static formation = "echelon";
    static width = 93;

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 93;
        this.hp = 300 * enemyHealthMultiplier;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 5;
        this.speed = enemyMoveSpeed * 0.8;
        this.weapon = "fireball";
        this.fireDelay = 3000 / (difficultyRate / 1.5);
        this.numShots = Math.floor(8 * (difficultyRate));
        this.keepFiring = false;
        this.rammingDamage = rammingDamage * 1.2;
        this.name = "Enemy Two";
        this.type = "enemy2";
        this.scoreValue = 110;
        this.xpValue = 25;
        this.moneyValue = 40;
        this.spawning = true;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_3 {

    static numFormation = 4;
    static formation = "line";
    static width = 76;

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 76;
        this.hp = 70 * enemyHealthMultiplier;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed;
        this.weapon = "fireball";
        this.fireDelay = 4000 / (difficultyRate / 1.5);
        this.numShots = Math.floor(3 * (difficultyRate));
        this.keepFiring = true;
        this.rammingDamage = rammingDamage * 0.8;
        this.name = "Enemy Three"; //bomber?
        this.type = "enemy3";
        this.scoreValue = 30;
        this.xpValue = 12;
        this.moneyValue = 5;
        this.spawning = true;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_4 {

    static numFormation = 4;
    static formation = "line";
    static width = 107;

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 107;
        this.hp = 225 * enemyHealthMultiplier;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed;
        this.weapon = "fireball";
        this.fireDelay = 1000 / (difficultyRate / 1.5);
        this.numShots = Math.floor(2 * (difficultyRate));
        this.keepFiring = true;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy Four";
        this.type = "enemy4";
        this.scoreValue = 50;
        this.xpValue = 10;
        this.moneyValue = 20;
        this.spawning = true;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_5 {

    static numFormation = 8;
    static formation = "hollowX";
    static width = 44;

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 50;
        this.width = 44;
        this.hp = 100 * enemyHealthMultiplier;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed * 1.2;
        this.weapon = "fireball";
        this.fireDelay = 2000 / (difficultyRate / 1.5);
        this.numShots = Math.floor(1 * (difficultyRate + 0.5));
        this.keepFiring = false;
        this.rammingDamage = rammingDamage * 0.5;
        this.name = "Enemy Five";
        this.type = "enemy5";
        this.scoreValue = 30;
        this.xpValue = 6;
        this.moneyValue = 3;
        this.spawning = true;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_6 {

    static numFormation = 2;
    static formation = "line";
    static width = 88;

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 88;
        this.hp = 300 * enemyHealthMultiplier;
        this.shields = 50;
        this.shieldsMax = 50;
        this.shieldsRecharging = false;
        this.armor = 5;
        this.speed = enemyMoveSpeed / 4;
        this.weapon = "fireball";
        this.fireDelay = 500 / (difficultyRate / 1.5);
        this.numShots = Math.floor(4 * (difficultyRate));
        this.keepFiring = true;
        this.rammingDamage = rammingDamage * 2;
        this.name = "Enemy Six";
        this.type = "enemy6";
        this.scoreValue = 90;
        this.xpValue = 40;
        this.moneyValue = 50;
        this.spawning = true;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}

// WEAPONS
class Missile {

    static magazineSize = 24;
    static fireDelay = 50;
    static reloadSpeed = 1600;

    constructor(left, top, direction){
        this.left = left;
        this.top = top;
        this.height = 13;
        this.width = 7;
        this.damage = 125;
        this.name = "Missile";
        this.type = "missile";
        this.weaponId = 0;
        this.direction = direction || "up";
        this.speed = 20;
        this.piercing = false;
    }
    
    
}


class ChaingunRound {

    static magazineSize = 200;
    static fireDelay = 50;
    static reloadSpeed = 2600;

    constructor(left, top, direction){
        this.left = left;
        this.top = top;
        this.height = 15;
        this.width = 7;
        this.damage = 25;
        this.name = "Chaingun";
        this.type = "chaingunRound";
        this.weaponId = 1;
        this.direction = direction || "up";
        this.speed = 35;
        this.piercing = false;
    }
    
    
}

class Fireball {

    constructor(left, top, direction){
        this.left = left;
        this.top = top;
        this.height = 8;
        this.width = 7;
        this.damage = 25 * enemyDamageMultiplier;
        this.name = "Fireball";
        this.type = "fireball";
        this.weaponId = 2;
        this.direction = direction || "down";
        this.speed = 25 + (difficultyRate * 8);
        this.piercing = false;
    }
    
    
}
class Torpedo {

    constructor(left, top, direction){
        this.left = left;
        this.top = top;
        this.height = 13;
        this.width = 7;
        this.damage = 650;
        this.name = "Torpedo";
        this.type = "torpedo";
        this.weaponId = 3;
        this.direction = direction || "up";
        this.speed = 10;
        this.piercing = true;
    }
    
    
}




































