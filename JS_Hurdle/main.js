const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let timer = 0;
let hurdleArray = [];
let space = false;
let spaceTimer = 0;
// requestId
let animation;
const human = {
  x: 300,
  y: 500,
  width: 50,
  height: 50,
  draw: function() {
    ctx.fillStyle = 'green';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(humanImg, this.x, this.y);
  }
};
const humanImg = new Image();
humanImg.src = 'human.png';
canvas.width = 1300;
canvas.height = 800;

// 장애물
class Hurdle {
  // 생성자.
  constructor() {
    this.x = 1000;
    this.y = 500;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const timeObj = {
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  draw: function() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+ timer, 8, 20);
  }
};

const DrawFrame = function() {
  // 프레임마다 실행할 함수 
  animation = requestAnimationFrame(DrawFrame);
  timer++;
  
  // x, y, width, height canvas 지움.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 화면 frame 마다 1초 일 경우 그리기. 내꺼는 144임.
  // 288 프레임 (2초) 마다 장애물을 집어 넣음.
  if (timer % 288 === 0) {
    // 클래스 선언 시.
    const hurdle = new Hurdle();
    hurdleArray.push(hurdle);
  }

  // 한 번에 그려줌.
  hurdleArray.forEach((h, index, array) => {
    // x 좌표가 0 미만이면 제거.(배열이 커져서 리소스 낭비)
    if (h.x === (human.x - human.width)) array.splice(index, 1);
    h.x--;
    Crush(human, h);
    h.draw();
  });

  // space 가 true 일 때 점프
  if (space) {
    human.y -= 2;
    spaceTimer++;
  } else {
    if (human.y < 500) {
      human.y += 2;
      spaceTimer = 0;
    } 
  }
  // timer에 따라 상태값 변경
  if (spaceTimer > 100) space = false;
  human.draw();
  timeObj.draw();
};

DrawFrame();

// 이벤트 리스너
document.addEventListener('keydown', e => {
  console.log(e);
  if (e.code === 'Space' && human.y === 500) space = true;
});

// 충돌계산
const Crush = function(human, h) {
  const X = h.x - (human.x + human.width);
  const Y = h.y - (human.y + human.height);

  if (X < 0 && Y < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
};