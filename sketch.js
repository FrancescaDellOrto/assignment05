var song;
var img;


function preload () {
  vin= loadImage("assets/immagini/vinile.jpg")
  img= loadImage("assets/immagini/hiphop.png");
}
function setup() {
  song = loadSound('assets/musica/prova.mp3');
  createCanvas(400, 400);
  imageMode(CENTER);
  

  }

function draw(){
    background(255,255,255)
  
    image(vin,width/2,height/2, 350, 350);

translate(200, 200);
  	rotate(radians(frameCount));
  if ( song.isPlaying() ) { 
  image(img,width/100,height/100, 320, 320);
  
  
}

}

function mousePressed() {

    if ( song.isPlaying() ) { 
    song.stop();

  } else {
    song.play();
  
 }
}


