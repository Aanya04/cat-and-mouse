var cat,catImg1,catImg2, catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;
var background ,bgImg;

function preload() {
    bgImg = loadImage("garden.png")
    catImg1 = loadAnimation("cat1.png")
    catImg2 = loadAnimation("cat2.png","cat3.png")
    catImg3 = loadAnimation("cat4.png")
    mouseImg1 = loadAnimation("mouse4.png")
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png")
    mouseImg3 = loadAnimation("mouse1.png")
    
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800,600)
    cat.addAnimation(catImg1)

    mouse = createSprite(200,600)
    mouse.addAnimation(mouseImg1)

    backg = createSprite(500,400)
    backg.addImage(bgImg)
}

function draw() {

    background(255);
    if(cat.x-mouse.x < cat.widtth-mouse.width/2){

        cat.addAnimation("catImg3")
        mouse.addAnimation("mouseImg3")
    }

    drawSprites();
}


function keyPressed(){

 if(keyCode== LEFT_ARROW){
     mouse.addAnimation("mouseTeasing",mouseImg2)
     mouse.changeAnimatrion("mouseTeasing")
     cat.velocityX = -2
     cat.addAnimation("catRunning",catImg2)
     cat.changeAnimation("catRunning")
 }


}
