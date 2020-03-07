//----------CLASSES----------
class Player {
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
    }


    warp(left, top){
        this.left = left;
        this.top = top;
    }


}

class Enemy_1 {

    static numFormation = 4;
    static formation = "quad";

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
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy Two";
        this.type = "enemy2";
        this.scoreValue = 50;
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
        this.rammingDamage = rammingDamage;
        this.name = "Enemy Three";
        this.type = "enemy3";
        this.scoreValue = 50;
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
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}
class Enemy_5 {

    static numFormation = 8;
    static formation = "line";

    constructor(left, top, direction, facing){
        this.left = left;
        this.top = top;
        this.height = 50;
        this.width = 44;
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy Five";
        this.type = "enemy5";
        this.scoreValue = 50;
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
        this.hp = 100;
        this.shields = 0;
        this.shieldsMax = 0;
        this.speed = enemyMoveSpeed;
        this.rammingDamage = rammingDamage;
        this.name = "Enemy Six";
        this.type = "enemy6";
        this.scoreValue = 90;
        // this.formation = "line";
        // this.numFormation = 4; //number of ships to spawn at one time
        this.direction = direction;
        this.facing = facing || "enemyDownFace";  //options are:  enemy, enemyLeftFace, enemyRightFace, enemyUpFace
    }
    
}


class Missile {
    constructor(left, top, direction){
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
        this.direction = direction || "up";
        this.speed = 20;
    }

    warp(left, top){
        this.left = left;
        this.top = top;
    }
    
    
}