var video, button;

function setup() {
  createCanvas(320, 240);

  video = createCapture(VIDEO);
  video.size(320, 240);
  // video.hide();

  button = createButton('Snap!');
  button.style('display: block; margin: 2% auto;');


}

function draw(){
  image(video, 0, 0, width, height);

}
