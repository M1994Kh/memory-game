var x = document.getElementById("audio1");
var y = document.getElementById("audio2");
function play1() {
  x.play();
}
function play2() {
    y.play();
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