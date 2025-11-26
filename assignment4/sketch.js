let cloud1X = 150;
let cloud2X = 350;

let boatX = 250;     
let boatSpeed = 1; 
let boatScale = 1;
let boatScaleSpeed = 0.005;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(180, 220, 255); // 하늘 색

  // 태양: 색상 변화
  colorMode(HSB, 360, 100, 100);
  let sunColor = lerpColor(color(60, 100, 100), color(20, 100, 100), sin(frameCount * 0.01) * 0.5 + 0.5);
  noStroke();
  fill(sunColor);
  ellipse(500, 80, 120, 120);
  colorMode(RGB); // 다시 RGB 모드로 복귀

  // 산
  fill(80, 150, 80);
  triangle(50, 300, 200, 100, 350, 300);
  fill(60, 120, 60);
  triangle(250, 300, 400, 120, 550, 300);

  // 바다: 고정
  fill(100, 180, 255, 200); 
  rect(0, 300, 600, 100);

  // 물결: 움직임
  stroke(255);
  strokeWeight(2);
  let waveOffset = sin(frameCount * 0.05) * 5;
  line(50 + waveOffset, 340, 200 + waveOffset, 340);
  line(250 + waveOffset, 350, 400 + waveOffset, 350);
  line(150 + waveOffset, 365, 300 + waveOffset, 365);
  line(350 + waveOffset, 370, 550 + waveOffset, 370);

  // 구름: 움직임
  cloud1X = 150 + sin(frameCount * 0.01) * 50;
  cloud2X = 350 + cos(frameCount * 0.008) * 60;
  fill(255);
  noStroke();
  drawCloud(cloud1X, 80);
  drawCloud(cloud2X, 60);

  // 배: 움직임, 크기 변화
boatX += boatSpeed; // 배 이동
if (boatX > width + 50) boatX = -50; // 화면을 넘어가면 왼쪽으로 리셋
let floatY = sin(frameCount * 0.05) * 3;
let boatScale = 1 + 0.05 * sin(frameCount * 0.05); // 1을 기준으로 ±0.05 범위로 변화

  push();
  translate(boatX, 325 + floatY);
  scale(boatScale);
  noStroke();
  fill(150, 75, 0);
  quad(-40, 0, 40, 0, 20, 30, -20, 30);
  stroke(80);
  strokeWeight(2);
  line(0, -50, 0, 0);
  noStroke();
  fill(255);
  triangle(1, -50, 1, -10, 40, -10);
  pop();
}

// 구름 그리는 함수
function drawCloud(x, y) {
  ellipse(x - 30, y, 80, 50);
  ellipse(x, y, 100, 60);
  ellipse(x + 30, y, 80, 50);
}