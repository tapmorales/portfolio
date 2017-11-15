;(function(){
  'use strict';
  
  var btn = document.querySelector('.header-nav__hamburgger');
  var html = document.querySelector('html');
  var menOpened = false;
  
  btn.addEventListener('click', toggleMenu);
  
  function toggleMenu(e){
    if(menOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  
  function closeMenu(){
    menOpened = false;
    html.classList.remove('menu-opened');
  }
  function openMenu(){
    openMenu = true;
    html.classList.add('menu-opened');
  }
}())