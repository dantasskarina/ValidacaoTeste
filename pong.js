// variaveis bola
let xbal = 100;
let ybal = 200;
let dbal = 15;
let raio = dbal / 2;

//variaveis velocidade
let vXBall = 6;
let vYBall = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showBall();
  vMoviment();
  vBoard();
}

function showBall() {
  circle(xbal, ybal, dbal);
}

function vMoviment() {
  xbal += vXBall;
  ybal += vYBall;
}

function vBoard() {
  if (xbal + raio > width || xbal - raio < 0) {
    vXBall *= -1;
  }
  if (ybal + raio > height || ybal - raio < 0) {
    vYBall *= -1;
  }
}



// execução no https://editor.p5js.org/dantasskarina/sketches/dwHIjpLgG