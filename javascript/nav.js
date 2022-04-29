document.querySelector('.burgerbtn').onclick = function (e) {
  var menu = document.querySelector('.menu');
  var burgerbtn = document.querySelector('.burgerbtn');
  
  menu.classList.toggle('is-active');
  burgerbtn.classList.toggle('is-active');
  
  e.preventDefault();
}