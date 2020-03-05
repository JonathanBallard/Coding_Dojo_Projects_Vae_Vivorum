    
    
import * as gamevariables from '/modules/gamevariables.js'


class Player {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
    }


    move(left, top){
        this.left = left;
        this.top = top;
    }

}



class Enemy_1 {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 70;
        this.width = 75;
    }


    move(left, top){
        this.left = left;
        this.top = top;
    }
    
}


class Missile {
    constructor(left, top){
        this.left = left;
        this.top = top;
        this.height = 10;
        this.width = 2;
        this.damage = gamevariables.missileDamage;
    }

    move(left, top){
        this.left = left;
        this.top = top;
    }
    
    
}























