const box = document.querySelector('.box');
const login = document.querySelector('.login');
const register = document.querySelector('.register');

register.addEventListener('click', ()=> {
    box.classList.add('active');
});

login.addEventListener('click', ()=> {
   box.classList.remove('active');
});

console.log(alert('This page is yet to be mobile responsive, but works fine on a desktop view'))