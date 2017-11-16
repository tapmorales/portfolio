;(function(){
  'use strict';
  
  var btn = document.querySelector('.header-nav__hamburgger');
  var html = document.querySelector('html');
  var menu = document.querySelector('#mainMenu')
  var menOpened = false;
  var classMenu = 'menu-opened';
  
  html.addEventListener('click', function(e){
    console.log(this);
    console.log(e.target);
    
    if(e.target === html && menOpened){
      closeMenu();
    }
  })
  
  btn.addEventListener('click', toggleMenu);
  
  function toggleMenu(e){
    if(menOpened){
      closeMenu();
    } else {
      openMenu();
    }
  }
  
  function closeMenu(){
    menOpened = false;
    html.classList.remove(classMenu);
    btn.blur();
    menu.setAttribute('aria-expanded', false);
    btn.setAttribute('aria-expanded', false);
  }
  
  function openMenu(){
    menOpened = true;
    html.classList.add(classMenu);
    menu.setAttribute('aria-expanded', true);
    btn.setAttribute('aria-expanded', true);
  }
}())