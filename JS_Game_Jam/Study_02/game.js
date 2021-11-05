var canvas = document.getElementById("canvas_id");
var back = document.getElementById("gameRound");
var canvas_2d = canvas.getContext("2d");


back_width = back.scrollWidth;
back_height = back.scrollHeight;


canvas.width = 50;
canvas.height = 50;

canvas_2d.fillStyle = "red";

function randnCreate(){
  var locate_x = Math.random().toFixed(2);
  var locate_y = Math.random().toFixed(2);

  canvas_2d.fillRect(locate_x,locate_y,100,100);
  if(back_width <= locate_x){
    locate_x = (locate_x/2).toFixed(2);
  }
  else if(back_height <= locate_y){
    locate_y = (locate_y/2).toFixed(2);
  }
  else if((back_width <= locate_x) && (back_height <= locate_y)){
    locate_x = (locate_x/2).toFixed(2);
    locate_y = (locate_y/2).toFixed(2);
  }
}


randnCreate();