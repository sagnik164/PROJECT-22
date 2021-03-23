var fixSprite1,fixSpite2,fixSprite3,fixSprite4;
var movingSprite;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,590,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";




    //create box sprite and give velocity
    movingSprite=createSprite(rndom(10,750),300,20,20)
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

if(movingSprite.x<0){
    music.stop()
    movingSprite.velocityX=3;
}
else if(movingSprite.x>800){
    music.stop()
    movingSprite.velocityX=-3;
}
    //add condition to check if box touching surface and make it box
if(isTouching(movingSprite,fixSprite4)){
    music.play();
    movingSprite.shapeColor="yellow";
    bounceOff(movingSprite,fixSprite4)
}
else if(isTouching(movingSprite,fixSprite3)){
    music.stop();
    movingSprite.shapeColor="blue";
    bounceOff(movingSprite,fixSprite3)
}

else if(isTouching(movingSprite,fixSprite2)){
    music.stop();
    movingSprite.shapeColor="green";
    bounceOff(movingSprite,fixSprite2)
    movingSprite.velocityX=0;
}
else if(isTouching(movingSprite,fixSprite1)){
    music.stop();
    movingSprite.shapeColor="red";
    bounceOff(movingSprite,fixSprite1)
}





if(movingSprite.y<0){
    music.stop()
    movingSprite.velocityY=3;
}





drawsprites();
}

