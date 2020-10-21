class chain{
    constructor(A,B)
    {
        var options = 
        {
            bodyA : A,
            bodyB : B,
            stiffness : 0.9,
            length : 100
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world , this.chain);
    }

    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke("black");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}