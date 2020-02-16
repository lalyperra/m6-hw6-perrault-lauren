//Trigger for hover
var navLinks = document.getElementsByClassName('nav-link');

//function applies to (show dropdown)
var dropdowns = document.getElementsByClassName('dropdown');


function toggleDropdown() {
  this.children[1].classList.toggle('show');
}

//event listeners for li li li li
for (i=0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('mouseenter', toggleDropdown);
  navLinks[i].addEventListener('mouseleave', toggleDropdown);
}
