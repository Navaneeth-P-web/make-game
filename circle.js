class Circle {
    constructor(x,y,r,imageName,scale,velocityX,velocityY){
        this.radius = r
        this.sprite1 = createSprite(x,y,r)
        this.sprite1.addImage(imageName)
        this.sprite1.scale= scale
        circlesGroup.add(this.sprite1)
    }
}