    
    
import * as gamevariables from '/modules/gamevariables.js'



export class Missile {
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























