// menu button for mobile
let sidemenu = document.getElementById("sidemenu");


function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-250px";
}

// close menu when anywhere is clicked
document.onclick = function(e){
    if(e.target.id !== "sidemenu" && e.target.id !== "close"){
        sidemenu.classList.remove('sidemenu');
    }
}


// Reveal elements on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 80;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Reload to top page
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});