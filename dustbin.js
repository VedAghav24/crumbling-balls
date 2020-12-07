class Dustbin{
    constructor( angle) {
        var options = {
       
    isStatic:true
        }
       
        this.bodycenter=Bodies.rectangle(width/2, 670, 150, 10, {isStatic:true} );
        World.add(world, this.bodycenter);
        
        this.bodycenter1=Bodies.rectangle(width/2-75, 650, 10, 50 , {isStatic:true} );
        World.add(world,this.bodycenter1);
        
        this.bodycenter2=Bodies.rectangle(width/2+75, 650, 10, 50 , {isStatic:true} );
        World.add(world, this.bodycenter2);
        
    }
      display(){
       rectMode(CENTER)
        rect(this.bodycenter.position.x,this.bodycenter.position.y,150,5)

  rect(this.bodycenter1.position.x,this.bodycenter1.position.y,10,50)

    rect(this.bodycenter2.position.x,this.bodycenter2.position.y,10,50)
       
    
      }
}
