class Iron{
    constructor(x,y,width,height,options){
        var options = {
        density :34,
        restitution:0.8,
        friction:5
        
        }
        
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height
        World.add(world,this.body)
        
        }
        display(){
            var pos = this.body.position;
            ;
            var angle = this.body.angle;
        
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            strokeWeight(5);
            stroke('blue')
            fill('yellow')
            rectMode(CENTER)
            rect(0, 0, this.width, this.height);
            pop();
          };
        
        }

















