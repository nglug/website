var x = 0

function buttonClick() {
if (x == 0) {
    document.getElementById("navbar").style.top = "0px";
    x ++;
    document.getElementById("main").style.marginTop = "50px";


} else {
    document.getElementById("navbar").style.top = "-50px";
    x --;
    document.getElementById("main").style.marginTop = "0px";

}

}

function change() {
  if (document.getElementById("number").innerHTML < 0) {
    document.getElementById("number").style.color = "red"
  } else if (document.getElementById("number").innerHTML > 0) {
    document.getElementById("number").style.color = "green"
  } else {
    document.getElementById("number").style.color = "grey"
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buttonUp() {
  document.getElementById("number").innerHTML = Number(document.getElementById("number").innerHTML) + 1
}
function buttonDown() {
  document.getElementById("number").innerHTML = Number(document.getElementById("number").innerHTML) - 1
}

function nah(x) {
  x.style.left = getRandomInt(90) + "%";
  x.style.top = getRandomInt(90) + "%";
}