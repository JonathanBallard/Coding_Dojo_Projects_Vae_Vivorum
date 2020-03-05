import * as gamevariables from '/modules/gamevariables.js'





export class Player {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
        this.hp = 100;
        this.shields = 50;
        this.speed = gamevariables.playerMoveSpeed;
    }


    move(left, top){
        this.left = left;
        this.top = top;
    }

}




