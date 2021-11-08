var canvas = document.getElementById("canvas_id");
var back = document.getElementById("gameRound");
var canvas_2d = canvas.getContext("2d");

var back_width = back.scrollWidth;
var back_height = back.scrollHeight;

let object_time = 5000;
var timer = 0;
var frame = 60;

canvas.width = back_width;
canvas.height = back_height;

canvas_2d.fillStyle = "red";

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

function createOJ(){
  setInterval(function(){randnCreate()},object_time);  
} // 5초마다 생성


createOJ();


timestemp();

 if(timer == 30){
   cancelAnimationFrame(timestemp);
}