const burger = document.querySelector('.burger_open');
const burger2 = document.querySelector('.burger_close');
const menu = document.querySelector('.menu');
const menuNav = document.getElementById('menu-nav');
let showMenu = false

menu.addEventListener('click', toggle);

function toggle(){
    if(!showMenu){
        burger.classList.add('show');
       menuNav.style.display = "block";
        burger2.classList.add('open');


        showMenu = true;
    }else{
        burger.classList.remove('show');
        menuNav.style.display = "none";
        burger2.classList.remove('open');
      

        showMenu = false;
    }
}