class Drop{
    constructor(){
        this.x = random(width)
        this.y = random(-500, -50)
        this.z = random(0, 20)
        this.yspeed = map(this.z, 0, 20, 4, 20)
        this.len = map(this.z, 0, 20, 10, 20)
    }
    fall(){
        this.y += this.yspeed
        let grav = map(this.z, 0, 20, 0.01, 0.2)
        this.yspeed = this.yspeed + grav
        if(this.y > height){
            this.y = random(-200, -100)
            this.yspeed = map(this.z, 0, 20, 4, 10)
        }
    }
    show(){
        let thick = map(this.z, 0, 20, 1, 3)
        strokeWeight(thick)
        stroke(138, 43, 226)
        line(
            this.x,
            this.y,
            this.x,
            this.y + this.len
        )
    }
}