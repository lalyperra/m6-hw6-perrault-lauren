# m6-hw6-perrault-lauren
 So many issues.  I'm turning this in with the errors I had since we weren't able to trouble-shoot before class and I didn't think it was fair to just copy what we did in class and turn that in.  I tried a lot of different methods but none of them were working for me. 
 Examples below: 
 //change all the boxes backgrounds on any hover
document.getElementsByClassName("row").addEventListener("hover", function () {
 row.style.backgroundColor = "green";
});
//change all the boxes backgrounds on any hover
var boxes = document.getElementsByClassName('row');
function myFunction() {
  this.children[i].classList.toggle('show');
}
for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('mouseenter', fade);
  boxes[i].addEventListener('mouseleave', none);
}
//click any box and remove hidden class to display reset message in html
boxes.addEventListener(‘click’, showElem);
  function showElem() {
    alert(document.getElementById("hide").style.visibility);
  }
OR MAYBE?
var hide = document.querySelector(‘#hide’);
   hide.style.display = block; 

Resources Used: 
https://codepen.io/felquis/pen/damDA 
https://www.w3schools.com/jsref/event_onmouseover.asp
https://www.w3schools.com/jsref/event_ontoggle.asp
https://www.w3schools.com/jsref/event_onload.asp
https://www.w3schools.com/jsref/met_element_addeventlistener.asp
https://www.w3schools.com/howto/howto_js_remove_class.asp
https://css-tricks.com/snippets/jquery/addingremoving-class-on-hover/
https://davidwalsh.name/html5-hidden
