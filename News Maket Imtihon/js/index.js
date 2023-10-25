const responseBtn = document.querySelector('.navbar__menu__lists__link__btn');
const responseList = document.querySelector('.navbar__menu__lists');
const btn = document.getElementById('burger');
const xBtn = document.getElementById('xburger');


btn.addEventListener('click', () => {
    responseList.classList.toggle('navbar__menu__lists__respons');
    responseBtn.classList.toggle('navbar__menu__respons__btn');
    btn.style.display = 'none'
    xBtn.style.display = 'block'

})
xBtn.addEventListener('click', () => {
    btn.style.display = 'block'
    xBtn.style.display = 'none'
    responseList.classList.toggle('navbar__menu__lists__respons');
    responseBtn.classList.toggle('navbar__menu__respons__btn');

})
var typed = new Typed('.news__hero__text', {
    strings: [' Step-by-step guide to choosing great font pairs'],
    backSpeed: 40,
    typeSpeed: 60,
    loop: true

});