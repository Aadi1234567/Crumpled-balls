class Ball {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, [options],[maxSides]);
      this.radius = radius;
      this.maxSides = maxSides;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x,pos.y,pos.radius,pos.maxSides);
      rotate(angle);
      circleMode(CENTER);
      stroke("green");
      fill("white");
      strokeWeight(4);
      circle(0, 0, this.radius, this.maxSides);
      pop();
    }
  };
  