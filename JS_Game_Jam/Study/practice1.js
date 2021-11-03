var answer_number = document.getElementById("inputNumber");
var numoftime = 0;
var num = Math.floor(Math.random() * 101);

function check() {
  if(answer_number.value > num){
    numoftime += 1;
    alert(answer_number.value + "보다 작습니다!");
    answer_number.value = "";
  }
  else if(answer_number.value < num){
    numoftime += 1;
    alert(answer_number.value + "보다 큽니다!");
    answer_number.value = "";
  }
  else{
    alert("정답입니다! 확인한 횟수 : " + numoftime);
    numoftime = 0;
    window.location.reload();
  }
}