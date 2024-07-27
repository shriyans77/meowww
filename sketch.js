function setup() {
  createCanvas(400,400);
  background(220);
  
  let kittyCat = new Animal ('meoww');
  kittyCat.showUp();
  kittyCat.talk();
}