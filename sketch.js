var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(91,590,180,20);
    surface1.shapeColor="orange";
     
    surface2 = createSprite(290,590,180,20);
    surface2.shapeColor="blue";

    surface3 = createSprite(490,590,180,20);
    surface3.shapeColor="green";

    surface4=createSprite(705,590,200,20);
    surface4.shapeColor="purple";
    //create box sprite and give velocity
    
    box=createSprite(random(20,750));
    box.shapeColor="white";
    box.velocityY= 7;
    box.velocityX= 5;
    box.scale=0.3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites();
     box.bounceOff(edges);
     
    //add condition to check if box touching surface and make it box

     if(surface2.isTouching(box)){
       box.shapeColor="blue";
       box.velocityY=0;
       music.stop();
     }

     if(surface1.isTouching(box)){
         box.bounceOff(surface1)
         music.play();
     } 

     if(surface4.isTouching(box)){
        box.bounceOff(surface4)
        music.play();
    } 
    if(surface3.isTouching(box)){
        box.bounceOff(surface3)
        music.play();
    } 

    drawSprites();
}
