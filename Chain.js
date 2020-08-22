class Chain {
    constructor(body1,body2){
       var options = {
           bodyA: body1,
           bodyB: body2,
           stiffness: 0.7,
           length: 50

       }
        this.body = Constraint.create(options);
        World.add(world,this.body);

        this.firstBody = body1;
        this.secondBody = body2;
}
    display(){
        line(this.firstBody.position.x,this.firstBody.position.y,this.secondBody.position.x,this.secondBody.position.y);
    }
}