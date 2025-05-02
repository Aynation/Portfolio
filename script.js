// theme
let dark = document.getElementById('theme');

dark.addEventListener('click', function() {
    document.body.classList.toggle('light-mode')
    if(document.body.classList.contains('light-mode')){
        dark.src = 'Images/moon.png'
    } else{
        dark.src = 'Images/sun.png'
    }
})

// hamburger
const hamburger = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('active');
});
navLinks.addEventListener('click', () =>{
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
})

// tab-titles
let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
// type-it
document.addEventListener("DOMContentLoaded", function() {
    // Initialize TypeIt
    new TypeIt("#typed-text", {
        speed: 200,
        waitUntilVisible: true,
        loop: true
      })
      .type("Developer.")
      .pause(200)
      .delete(14)
      .type("Designer.")
      .delete(10)
      .pause(200)
       // Text to be typed
      .go(); // Start typing
});