// var typed = new Typed(".multiple-text", {
//     strings: ["Fullstack Developer", "Graphic designer", "Wordpress loader"],
// typeSpeed: 100,
// backSpeed: 100,
// backDelay: 1000,
// loop: true
// });

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');

}