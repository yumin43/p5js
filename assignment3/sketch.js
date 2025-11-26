let x = 300;
let y = 200;
let scaleSize = 1;
let bgColor = 230;
let isSmiling = false;
let moveSpeed = 10; // 이동 속도
let glassesOffsetY = 0; // 안경 위아래 이동값

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(bgColor);

  handleKeyboardInput();
  drawCharacter();
}

function drawCharacter() {
  push();
  translate(x, y);
  scale(scaleSize);
  
  // 머리카락
  fill(90, 50, 10);
  noStroke();
  arc(0, -40, 180, 150, PI, 0);
  rect(-90, -40, 180, 220);
  
  // 가르마
  stroke(60, 40, 15);
  strokeWeight(2);
  line(20, -110, 0, 40);
  
  // 목
  noStroke();
  fill(245, 214, 179);
  rect(-20, 70, 40, 40);
  
  // 얼굴
  fill(255, 224, 189);
  noStroke();
  ellipse(0, 0, 140, 160);

  // 귀
  fill(255, 224, 189);
  ellipse(-75, 0, 20, 35);
  ellipse(75, 0, 20, 35);

  // 안경 (위아래 이동)
  push();
  translate(0, glassesOffsetY);
  noFill();
  stroke(0);
  strokeWeight(4);
  ellipse(-30, -10, 40, 40);
  ellipse(30, -10, 40, 40);
  line(-10, -10, 10, -10);
  line(-70, -17, -50, -10);
  line(50, -10, 70, -17);
  pop();

  // 눈 (마우스 따라감)
  let eyeOffsetX = map(mouseX, 0, width, -3, 3);
  let eyeOffsetY = map(mouseY, 0, height, -3, 3);

  fill(255);
  stroke(0);
  strokeWeight(1.5);
  ellipse(-30, -10, 25, 20);
  ellipse(30, -10, 25, 20);

  fill(80, 50, 20);
  ellipse(-30 + eyeOffsetX, -10 + eyeOffsetY, 10, 10);
  ellipse(30 + eyeOffsetX, -10 + eyeOffsetY, 10, 10);

  // 귀걸이
  fill(192);
  noStroke();
  ellipse(-75, 10, 5, 5);
  ellipse(75, 10, 5, 5);

  // 눈썹
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(-30, -35, 35, 15, PI, TWO_PI);
  arc(30, -35, 35, 15, PI, TWO_PI);

  // 코
  strokeWeight(1.5);
  noFill();
  arc(-5, 15, 20, 20, -PI/4, PI/4);

  // 입 (웃음 토글)
  noStroke();
  fill(220, 50, 90);
  if (isSmiling) {
    arc(0, 45, 40, 20, 0, PI);
  } else {
    arc(0, 55, 40, 20, PI, TWO_PI);
  }

  // 옷
  fill(255, 212, 0);
  rect(-110, 100, 220, 150, 50);

  noStroke();
  fill(245, 214, 179);
  arc(0, 100, 60, 40, 0, PI);

  // 팔
  stroke(255, 180, 0);
  strokeWeight(2);
  line(-60, 160, -60, 280);
  line(60, 160, 60, 280);
  
  pop();
}

// ----------------------
// 키보드 입력 처리
// ----------------------
function handleKeyboardInput() {
  // 좌우 이동
  if (keyIsDown(LEFT_ARROW)) x -= moveSpeed;
  if (keyIsDown(RIGHT_ARROW)) x += moveSpeed;

  // 안경 이동 (↑ ↓)
  if (keyIsDown(UP_ARROW)) glassesOffsetY -= moveSpeed / 2;
  if (keyIsDown(DOWN_ARROW)) glassesOffsetY += moveSpeed / 2;

}

// ----------------------
// 키 입력: GIF 저장
// ----------------------
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('myGif', 10); // 10초짜리 GIF 저장
  }
}

// ----------------------
// 마우스 클릭 시 웃음 전환
// ----------------------
function mousePressed() {
  isSmiling = !isSmiling;
}