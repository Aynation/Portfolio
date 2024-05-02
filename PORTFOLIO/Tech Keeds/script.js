const box = document.querySelector('.box');
const login = document.querySelector('.login');
const register = document.querySelector('.register');

register.addEventListener('click', ()=> {
    box.classList.add('active');
});

login.addEventListener('click', ()=> {
   box.classList.remove('active');
});
