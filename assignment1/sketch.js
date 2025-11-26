function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(180, 220, 255); // 하늘

  // 태양
  noStroke();
  fill(255, 200, 0);
  ellipse(500, 80, 120, 120);

  // 산들
  fill(80, 150, 80);
  triangle(50, 300, 200, 100, 350, 300);

  fill(60, 120, 60);
  triangle(250, 300, 400, 120, 550, 300);

  // 호수
  fill(100, 180, 255, 200);
  rect(0, 300, 600, 100);

  // 경계선
  stroke(0);
  strokeWeight(5);
  line(0, 300, 600, 300);

  // 구름
  noStroke();
  fill(255);
  ellipse(150, 80, 80, 50);
  ellipse(190, 80, 100, 60);
  ellipse(230, 80, 80, 50);

  ellipse(350, 60, 70, 40);
  ellipse(380, 60, 90, 50);
  ellipse(420, 60, 70, 40);

  // 물결
  stroke(255);
  strokeWeight(2);
  line(50, 340, 200, 340);
  line(250, 350, 400, 350);
  line(150, 365, 300, 365);
  line(350, 370, 550, 370);

  // 배 몸통
  noStroke();
  fill(150, 75, 0);
  quad(210, 320, 290, 320, 270, 350, 230, 350);

  // 돛대
  stroke(80);
  strokeWeight(2);
  line(250, 270, 250, 320); // 몸통과 띄워줌

  // 돛 (높이를 줄인 삼각형)
  noStroke();
  fill(255);
  triangle(251, 270, 251, 310, 290, 310); // 아랫부분 짧고 자연스러운 돛
}