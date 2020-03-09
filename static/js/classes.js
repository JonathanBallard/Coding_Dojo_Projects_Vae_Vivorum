//----------CLASSES----------
class Player {

    static missileVolleyNumMissiles = 8;

    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
        this.hp = 100;
        this.hpMax = 100;
        this.shieldsMax = 50;
        this.shields = 50;
        this.speed = playerMoveSpeed;
        this.name = "Player";
        this.type = "Player";
        this.score = 0;
        this.kills = 0;
        this.xp = 0;
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

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 60;
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy One";
        this.type = "enemy";
        this.scoreValue = 50;
        this.xpValue = 10;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}

class Enemy_2 {

    static numFormation = 6;
    static formation = "line";

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 93;
        this.hp = 200;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed * 0.8;
        this.rammingDamage = rammingDamage * 1.2;
        this.name = "Enemy Two";
        this.type = "enemy2";
        this.scoreValue = 50;
        this.xpValue = 25;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_3 {

    static numFormation = 4;
    static formation = "line";

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 76;
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed;
        this.rammingDamage = rammingDamage * 0.8;
        this.name = "Enemy Three"; //bomber?
        this.type = "enemy3";
        this.scoreValue = 50;
        this.xpValue = 12;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_4 {

    static numFormation = 4;
    static formation = "line";

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 107;
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy Four";
        this.type = "enemy4";
        this.scoreValue = 50;
        this.xpValue = 10;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_5 {

    static numFormation = 8;
    static formation = "cluster";

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 50;
        this.width = 44;
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed * 1.2;
        this.rammingDamage = rammingDamage * 0.5;
        this.name = "Enemy Five";
        this.type = "enemy5";
        this.scoreValue = 50;
        this.xpValue = 6;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_6 {

    static numFormation = 2;
    static formation = "line";

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 88;
        this.hp = 350;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed / 4;
        this.rammingDamage = rammingDamage * 2;
        this.name = "Enemy Six";
        this.type = "enemy6";
        this.scoreValue = 90;
        this.xpValue = 40;
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
        this.height = 10;
        this.width = 2;
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
        this.height = 5;
        this.width = 2;
        this.damage = 35;
        this.name = "Chaingun";
        this.type = "chaingunRound";
        this.weaponId = 1;
        this.direction = direction || "up";
        this.speed = 35;
        this.piercing = false;
    }
    
    
}





































