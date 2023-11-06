// Get all links in the navigation bar
var navLinks = document.querySelectorAll('#mainNav .nav li a');

// Loop through the links and add the active class to the current/clicked link
for (var i = 0; i < navLinks.length; i++) {
 navLinks[i].addEventListener('click', function() {
  // Remove the active class from all links
  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove('active');
  }
  // Add the active class to the clicked link, but not if it's the .navbar-brand
  if (!this.classList.contains('navbar-brand')) {
    this.classList.add('active');
  }
 });
}
