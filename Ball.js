class Ball{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
    var options = {
		'restitution':1.3,
        'friction':6,
		'density':1
    }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("orange");
			fill("pink");
			//draw the ellipse here to display the rubber ball
              ellipse(0,0,this.r,this.r)
			pop()
	}

}