const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext('2d');
canvas.width=  600 ;
canvas.height = 400 ; 
let spacespeed = false ; 
let angle = 0 ; 
let heu =  0 ; 
let gamespeed =2 ; 
let score = 0  ;
let frame =0 ; 

const gradiant = ctx.createLinearGradient(0 , 0 , 0 , 70);
gradiant.addColorStop('0.4' , '#fff') // white
gradiant.addColorStop('0.5' , '#000')
gradiant.addColorStop('0.55' , '#4040ff')
gradiant.addColorStop('0.6' , '#fff')
gradiant.addColorStop('0.9' , '#000') 

const background = new Image();
background.src = 'https://opengameart.org/sites/default/files/Preview4.jpg' ;
const Bg = {
    x1 : 0 ,
    x2 : canvas.width, 
    y : 0 ,
    width: canvas.width , 
    height : canvas.height,  
}
function handlebackground(){
    if(Bg.x1 <= -Bg.width + gamespeed) Bg.x1 = Bg.width ; 
    else Bg.x1 -= gamespeed ;
    if(Bg.x2 <= -Bg.width + gamespeed) Bg.x2 = Bg.width ; 
    else Bg.x2 -= gamespeed ;
    ctx.drawImage(background , Bg.x1 ,Bg.y , Bg.width , Bg.height);
    ctx.drawImage(background , Bg.x2 ,Bg.y , Bg.width , Bg.height);
}

function animate(){
    ctx.clearRect(0 , 0 ,canvas.width , canvas.height );
    handlebackground();
    ctx.fillRect(10 , canvas.height - 90, 50 ,50 );
    bird.draw();
    bird.update();
    handleparticle() 
    ctx.fillStyle = gradiant ;
    ctx.font = '90px Georgia' ;
    ctx.strokeText(score , 450 , 70);
    ctx.fillText(score, 450 , 70);
    handlecollection()
    angle += 0.12 ;
    handleobstacle();
    if(handlecollection())return ;
    requestAnimationFrame(animate);
    heu++;
    frame++;
}
animate()
window.addEventListener("keydown" , function(e){
     if (e.code === 'Space') spacespeed = true ;
     
})
window.addEventListener("keyup" , function(e){
    if (e.code === 'Space') spacespeed = false ;
    bird.framex = 0;
})
const bang = new Image();
bang.src = 'https://pixeldrain.com/api/file/NmppP2ng' ;
function handlecollection(){
    for(let i = 0 ; i < obstacleArray.length ; i++){
        if(bird.x < obstacleArray[i].x + obstacleArray[i].width &&
            bird.x + bird.width > obstacleArray[i].x &&
            ((bird.y < 0 + obstacleArray[i].top && bird.y + bird.height > 0 ) || 
                (bird.y > canvas.height - obstacleArray[i].bottom && bird.y + bird.height < canvas.height))){
                      ctx.drawImage(bang , bird.x , bird.y ,50 , 50);
                       ctx.font = '25px Georgia' ;
                       ctx.fillStyle = 'black' ;
                      ctx.fillText('Game over , your score is ' + score , 160 , canvas.height /2 -10);
                    return true ;
                }
    }
}

