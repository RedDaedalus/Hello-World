elem = document.getElementById("paragraph");
elem.innerHTML = "Hello World";

var i = 0;

function print() {
  elem.innerHTML = i;
  i++;
}

setInterval(print, 1000);