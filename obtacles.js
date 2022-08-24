const obstacleArray = [] ;

class Obstacle{
    constructor(){
        this.top = (Math.random() * canvas.height / 3) + 20 ;
        this.bottom = (Math.random() * canvas.height / 3) + 20 ;
        this.width = 20 ; 
        this.x = canvas.width ;
        this.color ='hsl(' + heu + ' , 100% , 50% )';
        this.counted = false  ;
    }
    draw(){
        ctx.fillStyle = this.color ;
        ctx.fillRect(this.x ,0 , this.width , this.top);
        ctx.fillRect(this.x ,canvas.height - this.bottom , this.width , this.bottom);
    }
    update(){
        this.x -= gamespeed; 
        if(!this.counted && this.x < bird.x){
            score++ ;
            this.counted = true ;
        }
        this.draw();
    }
}
function handleobstacle(){
    if(frame % 50 === 0){
          obstacleArray.unshift(new Obstacle);
    }
    for(i = 0 ; i < obstacleArray.length ; i++){
        obstacleArray[i].update();
    }
    if(obstacleArray.length > 20){
        obstacleArray.pop(obstacleArray[0])
    }
}