const dragnspriti = new Image() ; 
dragnspriti.src = './spritesheet.png'
class Bird{
    constructor(){
        this.x = 150 ; 
        this.y = 200 ; 
        this.vy = 0  ;
        this.originwidth = 941;
        this.originheight = 680 ; 
        this.width = this.originwidth/20;
        this.height = this.originheight/20 ;
        this.weight = 1 ;
        this.framex = 0 ;
    }
    update(){
        let curve = Math.sin(angle) * 20;
        if(this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve ; 
            this.vy = 0 ; 
        }else { 
        this.vy += this.weight  
        this.vy *= 0.9 ;
        this.y  += this.vy;
    }
        if(this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0 ;
        }      
          if(spacespeed && this.y > this.height * 3 ) this.flap()
    }
    draw(){
        ctx.fillStyle = 'red' ;
        // ctx.fillRect(this.x ,this.y ,this.width , this.height);
        ctx.drawImage(dragnspriti , this.framex * this.originwidth  , 0, this.originwidth , this.originheight , this.x -10 , this.y -20, this.width * 1.7 , this.height*1.7)
    }
    flap(){
        this.vy -= 2;
        if(this.framex > 3 )this.framex = 0 ;
        else if(this.framex % 3 === 0)this.framex++ ; 
    }
}
const bird = new Bird();