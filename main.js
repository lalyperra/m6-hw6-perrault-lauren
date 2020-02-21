//click delivers message -- box1
var box1 = document.getElementById('box1');

box1.addEventListener("click", myFunction);

  function myFunction() {
    alert("Oooh - so close, but no cigar");
  }

 //box2
var box2 = document.getElementById('box2');

box2.addEventListener("click", myFunction);
  function myFunction() { 
    alert("DING DING DING - We have a winner");
  }

  //box3
var box3 = document.getElementById('box3');

box3.addEventListener("click", myFunction);
  function myFunction() {
    alert("Oops, better luck next time");
  }

//click any box and remove hidden class to display Start Over message div
var boxes = document.getElementById('boxes');

document.addEventListener('click', myFunction);
  function myFunction() {
    document.getElementById("hide").style.display = "block";
  }

//change all the boxes backgrounds on any hover
function  Myfunction {
      boxes.hover(function() {
      this.css("background-color", "yellow");
      }
    }