class Animal {
  constructor(v = "brr", x = 100, y = 100, col ='purple'){
    this.voice = v;
    this.locX = x;
    this.locY = y;
    this.col = col;
    
    this.showUp();
  }
    talk(){
    text(this.voice,this.locX,this.locY);
    }
  showUp(){
    stroke(this.col);
    strokeWeight(10);
    point(this.locX,this.locY);
    strokeWeight(0);
    this.talk();
  }
}