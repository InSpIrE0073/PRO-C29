class Ball {
    constructor(x, y, width, height){
      var options={
        frictionAir:0.005,
        density:1
      };
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.image=loadImage("polygon.png");
     this.width=width
     this.height= height
     World.add(world,this.body)
    }
    display(){
  var pos=this.body.position
  push();
  translate(pos.x,pos.y);
  rotate(this.body.angle);
 imageMode(RADIUS);
  fill("orange");
  image(this.image,0,0,this.width,this.height);
  pop();
  
    };
  };
  