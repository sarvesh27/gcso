var car,wall,speed,weight,deformation;



function setup() {
  
createCanvas(1600,400);

car = createSprite(50,200,50,50);



speed=random(55,90);
weight=random(400,1500);

car.velocityX=speed;
wall=createSprite(1500,200,60,height/2);
}
function draw() {
  background(255,255,255);  
  
  

if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  
  
 var deformation=0.5*weight*speed*speed/22509;
  

  if(deformation<100){
    car.shapeColor="green";
    car.x=1450;
    }
    
    if(deformation>100&&deformation<180){
    car.shapeColor="yellow";
    car.x=1450;
    
    }
    
    if(deformation>180){
    car.shapeColor="red";
    car.x=1450;
    }

}  



  drawSprites();
}