const canvas = document.getElementById("canvas_id");
const back = document.getElementById("gameRound");
const canvas_2d = canvas.getContext("2d");

let object_time;
let timer = 0;
const frame = 60; //컴퓨터 디스플레이 프레임 수에 맞게 변경

canvas.width = back.scrollWidth;
canvas.height = back.scrollHeight;

canvas_2d.fillStyle = "red";


const UserImg = new Image();
UserImg.src = "4gak.png";
let x = 425;
let y = 225;
UserImg.onload = function (){
  canvas_2d.drawImage(UserImg, x, y,50,50);
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

function createOJ(object_time){
  setInterval(function(){randnCreate()},object_time);  
} // 5초마다 생성


createOJ(5000);
User();

timestemp();

 if(timer == 30){
   cancelAnimationFrame(timestemp);
}