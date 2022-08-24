const particlearray = []   ;

class Particle{
    constructor(){
        this.x = bird.x ; 
        this.y = bird.y ;
        this.size = Math.random() * 7 + 3 ;
        this.speedy = (Math.random() * 1) - 0.5 ;
        this.color ='hsla(' + heu + ' , 100% , 50% , 0.8)';
    }       
    update(){   
        this.x -= gamespeed ; 
        this.y += this.speedy ;
    }
    draw(){
        ctx.fillStyle = this.color ;
        ctx.beginPath();
        ctx.arc(this.x , this.y ,this.size, 0 , Math.PI * 2 );
        ctx.fill();
    }
}
function handleparticle(){
    particlearray.unshift(new Particle)
    for(i = 0 ; i < particlearray.length ; i++){
        particlearray[i].update();
        particlearray[i].draw();
    }
    if(particlearray.length > 200 ){
        for(let i = 0 ; i< 20 ; i++){
            particlearray.pop(particlearray[i]);
        }
    }
}