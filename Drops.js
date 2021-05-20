class createDrop {
    constructor(x, y,r) {

        var options ={
          friction:0.001,
          restitution:0.1
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y,r,options);       
        
        World.add(world, this.body);

    }
    display() {

       // var pos = this.body.position;
       // var angle = this.body.angle;

      //  push();
       // translate(pos.x, pos.y);
       // rotate(angle);
       
        noStroke();
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.r,this.r);
       // pop();
    }


update (){
 if(this.body.position.y>height){
     Matter.Body.setPosition(this.body,{x:random (0,400),y:random (0,400)})
 }
}}