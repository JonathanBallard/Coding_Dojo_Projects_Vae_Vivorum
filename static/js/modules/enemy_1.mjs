import * as gamevariables from '/modules/gamevariables.js'






export class Enemy_1 {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
        this.hp = 100;
        this.shields = 0;
        this.speed = gamevariables.enemyMoveSpeed;
        this.impactDamage = gamevariables.impactDamage;
    }


    move(left, top){
        this.left = left;
        this.top = top;
    }
    
}