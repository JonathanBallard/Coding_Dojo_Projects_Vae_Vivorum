//----------CLASSES----------
class Player {

    static missileVolleyNumMissiles = 8;
    static width = 75;

    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
        this.hp = 100;
        this.hpMax = 100;
        this.shieldsMax = 50;
        this.shields = 50;
        this.shieldsRecharging = false;
        this.armor = 5;
        this.speed = playerMoveSpeed;
        this.name = "Player";
        this.type = "Player";
        this.score = 0;
        this.kills = 0;
        this.xp = 0;
        this.level = 0;
        this.currentWeapon = "chaingun";
        this.numFired = 0;
        this.ability1OnCooldown = false;
        this.ability2OnCooldown = false;
        this.ability3OnCooldown = false;
        this.ability4OnCooldown = false;
        this.ability5OnCooldown = false;
        this.ability6OnCooldown = false;
        this.ability1CooldownTime = 10000;
        this.ability2CooldownTime = 10000;
        this.ability3CooldownTime = 10000;
        this.ability4CooldownTime = 10000;
        this.ability5CooldownTime = 10000;
        this.ability6CooldownTime = 10000;
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
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed;
        this.weapon = "fireball";
        this.fireDelay = 2500;
        this.numShots = 1;
        this.keepFiring = true;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy One";
        this.type = "enemy";
        this.scoreValue = 50;
        this.xpValue = 10;
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
        this.hp = 200;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 5;
        this.speed = enemyMoveSpeed * 0.8;
        this.weapon = "fireball";
        this.fireDelay = 3000;
        this.numShots = 8;
        this.keepFiring = false;
        this.rammingDamage = rammingDamage * 1.2;
        this.name = "Enemy Two";
        this.type = "enemy2";
        this.scoreValue = 50;
        this.xpValue = 25;
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
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed;
        this.weapon = "fireball";
        this.fireDelay = 4000;
        this.numShots = 1;
        this.keepFiring = true;
        this.rammingDamage = rammingDamage * 0.8;
        this.name = "Enemy Three"; //bomber?
        this.type = "enemy3";
        this.scoreValue = 50;
        this.xpValue = 12;
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
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed;
        this.weapon = "fireball";
        this.fireDelay = 1000;
        this.numShots = 2;
        this.keepFiring = true;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy Four";
        this.type = "enemy4";
        this.scoreValue = 50;
        this.xpValue = 10;
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
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 0;
        this.speed = enemyMoveSpeed * 1.2;
        this.weapon = "fireball";
        this.numShots = 1;
        this.fireDelay = 2500;
        this.keepFiring = false;
        this.rammingDamage = rammingDamage * 0.5;
        this.name = "Enemy Five";
        this.type = "enemy5";
        this.scoreValue = 50;
        this.xpValue = 6;
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
        this.hp = 350;
        this.shields = 0;
        this.shieldsMax = 0;
        this.shieldsRecharging = false;
        this.armor = 5;
        this.speed = enemyMoveSpeed / 4;
        this.weapon = "fireball";
        this.fireDelay = 500;
        this.numShots = 4;
        this.keepFiring = true;
        this.rammingDamage = rammingDamage * 2;
        this.name = "Enemy Six";
        this.type = "enemy6";
        this.scoreValue = 90;
        this.xpValue = 40;
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
    static reloadSpeed = 600;

    constructor(left, top, direction){
        this.left = left;
        this.top = top;
        this.height = 15;
        this.width = 7;
        this.damage = 35;
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
        this.damage = 25;
        this.name = "Fireball";
        this.type = "fireball";
        this.weaponId = 2;
        this.direction = direction || "down";
        this.speed = 25;
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
        this.piercing = false;
    }
    
    
}




































