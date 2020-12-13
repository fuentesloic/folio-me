var arrow = document.getElementById('arrowUp');
var one = document.getElementById('one');
var oneHeight = one.clientHeight;
var position = 0;

window.addEventListener('scroll', function(){
  position = window.pageYOffset;
  if (position > oneHeight) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});
