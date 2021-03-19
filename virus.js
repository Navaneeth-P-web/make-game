class Virus {
    constructor(x,y,scale){
        this.Virus = createSprite(x,y)
        this.Virus.addImage(virusi)
        virusGroup.add(this.Virus)
        this.Virus.scale = scale
    }
}