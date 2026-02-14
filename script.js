let increaseNum = document.getElementById("btn1");
let decreaseNum = document.getElementById("btn3");
let resetNum = document.getElementById("btn2");
let countNum = document.getElementById("countNumber");
let count = 0;
increaseNum.onclick = function () {
  count++;
  countNum.innerHTML = count;
};
decreaseNum.onclick = function () {
  count--;
  countNum.innerHTML = count;
};
resetNum.onclick = function (){
    count = 0;
     countNum.innerHTML = count;
}