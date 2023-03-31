var x = document.getElementById("audio1");
var y = document.getElementById("audio2");
var z = document.getElementById("audio3");
var w = document.getElementById("audio4");

function play1a() {
  x.play();
}
function play1() {
    y.play();
}
function play2a() {
  z.play();
}
function play2() {
    w.play();
}
function rtrn()    {
    
}
var elts = document.getElementsByClassName('test')
Array.from(elts).forEach(function(elt){
  elt.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || elt.value.length == 1) {
      // Focus on the next sibling
      elt.nextElementSibling.focus()
    }
  });
})
