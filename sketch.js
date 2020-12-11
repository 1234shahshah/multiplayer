var qball;
var database
var position
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    qball = createSprite(250,250,10,10);
    qball.shapeColor = "red";
    var qballposition=database.ref("ball/position")
    qballposition.on("value",readposition)

}

function draw(){
    background("white");
    if (position!==undefined)

{


    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
    }
}

function writePosition(x,y){
 database.ref("ball/position").set({
     "x":position.x+x,
     "y":position.y+y                   
 })
}

function readposition(data)
{
position=data.val()
qball.x = position.x, 
    qball.y = position.y
}