class Player {
    constructor(x,y,r,scale,image){
        this.Player = createSprite(x,y)
        this.radius = r
        this.Player.addImage(image)
        this.Player.scale = scale
        this.Player.x = x
        this.Player.y = y
       
 
    }
    move(speed1){
        console.log("speed"+ speed1)

        if(keyDown("Up")){
            this.Player.y = this.Player.y - speed1
            console.log("move11`")
        }
        if (keyDown("left")){
            this.Player.x = this.Player.x - speed1
        
        }
        if (keyDown("right")){
            this.Player.x = this.Player.x + speed1
        }
        if (keyDown("down")){
            this.Player.y = this.Player.y + speed1
        }
    }
    move2(speed1){
        console.log("move")
        if(keyDown("w")){
            this.Player.y = this.Player.y - speed1
            console.log("move11`")
        }
        if (keyDown("a")){
            this.Player.x = this.Player.x - speed1
        
        }
        if (keyDown("d")){
            this.Player.x = this.Player.x + speed1
        }
        if (keyDown("s")){
            this.Player.y = this.Player.y + speed1
        }
    }
    touch(player){
        console.log("YES")
        for(var i = 0;i < circlesGroup.length ; i++){
            if(this.Player.isTouching(circlesGroup.get(i))){
                console.log("yes")
                circlesGroup.get(i).destroy()
                this.Player.scale = this.Player.scale + 0.01
                speed = speed - 0.1
                
                if(player == "one"){
                    score1 = score1 + 1
                }
                if (player == "two"){
                    score2 = score2 + 1
                }
            }
            
        }
           
    }
    touchVirus(player){
        for(var i = 0; i < virusGroup.length ; i++){
                if(this.Player.isTouching(virusGroup.get(i))){
                    if (this.Player.scale > 1.6 * virusGroup.get(i).scale){

                    
                    virusGroup.get(i).destroy()
                   
                    speed = speed + 0.3
                    gamestate = gamestate + 1
                    console.log(gamestate)
                    this.Player.scale = this.Player.scale/2
                }
            }
        }
    }
}