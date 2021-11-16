const canvas = document.getElementById("canvas_id");
const back = document.getElementById("gameRound");
const canvas_2d = canvas.getContext("2d");

let object_time;
let timer = 0;
const frame = 60; //컴퓨터 디스플레이 프레임 수에 맞게 변경
let keys = [];

let upkey = false;
let downkey = false;
let rightkey = false;
let leftkey = false;


canvas.width = back.scrollWidth;
canvas.height = back.scrollHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let width = 50;
let height = 50;
let speed = 1;

canvas_2d.fillStyle = "red";

document.addEventListener("keydown",onKey,false);
document.addEventListener("keyup",Keyup,false);



function drawrect() {
  canvas_2d.beginPath();

  canvas_2d.rect(x,y,width,height);
  canvas_2d.strokeStyle = "lightgreen";
  canvas_2d.fillRect = "lightgreen";
  canvas_2d.stroke(); 
  
  canvas_2d.closePath();
}

function randnCreate(){
  

  var locate_x = (Math.random()*850).toFixed(2);
  var locate_y = (Math.random()*450).toFixed(2);

  canvas_2d.fillRect(locate_x, locate_y, 50, 50);
}

// 5초마다 오브젝트 생성, 7초안에 터치를 못하면 사라지도록
// 30초가 지나면 3초마다 생성, 5초안에 터치를 못하면 사라지도록
// 60초가 지나면 1초마다 생성, 3초안에 터치를 못하면 사라지도록
// 오브젝트와 터치 시 1점 획득, 30초, 60초 마다 얻어지는 점수가 달라지도록
// 유저의 움직임은 화살표와 awsd
// 클래스 문으로 만들어보기(공부)
function timestemp(){
  ani = requestAnimationFrame(timestemp);
  if(ani % frame == 0){
    timer ++;
  }
} // 게임 플레이 시간 생성

function onKey(key) {
  keys[key.keyCode] = true;

  if(key.keyCode == 37 ){
    leftkey = true;
  }
  if(key.keyCode == 38){
    downkey = true;
  }
  if(key.keyCode == 39){
    rightkey = true;
  }
  if(key.keyCode == 40){
    upkey = true;
  }
}

function Keyup(key) {
  keys[key.keyCode] = false;

  if(key.keyCode == 37){
    leftkey = false;
  }
  if(key.keyCode == 38){
    downkey = false;
  }
  if(key.keyCode == 39){
    rightkey = false;
  }
  if(key.keyCode == 40){
    upkey = false;
  }
}


function draw() {
  canvas_2d.clearRect(0, 0, canvas.width, canvas.height);

  drawrect();
  // randnCreate();
  
  if(leftkey == true){
    x = x-speed;
  }
  if(downkey == true){
    y -= speed;
  }
  if(rightkey == true){
    x = x+speed;
  }
  if(upkey == true){
    y += speed;
  }
}

function createOJ(object_time){
  setInterval(function(){randnCreate()},object_time);  
} // 5초마다 생성

setInterval(draw,10);
// createOJ(5000);
timestemp();

 if(timer == 30){
   cancelAnimationFrame(timestemp);
}