const header = document.querySelector('.header');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger-btn');
function scrolltotop(){
    if (window.scrollY > 10) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", scrolltotop);


hamburger.addEventListener("click", openfunction);

function openfunction () {
header.classList.toggle('open');
body.classList.toggle('noscroll');
}
