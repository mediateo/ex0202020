let sliderRed;
let sliderGreen;
let sliderBlue;
let cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  sliderRed = createSlider(0, 255, 10);
  sliderGreen = createSlider(0, 255, 10);
  sliderBlue = createSlider(0, 255, 10);

  sliderRed.position(20, 20);
  sliderGreen.position(20, 40);
  sliderBlue.position(20, 60);
}

function draw() {
  background(sliderRed.value(), sliderGreen.value(), sliderBlue.value());
  ellipse(width / 2, height / 2, (sliderRed.value() + sliderGreen.value() + sliderBlue.value()) / 3);
}

function windowResized() {
  cnv = resizeCanvas(windowWidth, windowHeight);
}