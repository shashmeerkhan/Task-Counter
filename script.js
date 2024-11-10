function inc() {
  var x = document.getElementById("Number").innerHTML;
  x++;
  document.getElementById("Number").innerHTML = x;
}
function dec() {
  var x = document.getElementById("Number").innerHTML;
  x--;
  if (x < 0) {
    x = 0;
    alert("Counter cannot go below zero!");
  }
  document.getElementById("Number").innerHTML = x;
}
function reset() {
  document.getElementById("Number").innerHTML = 0;
}
