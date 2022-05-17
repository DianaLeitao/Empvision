document.querySelector('.burgerbtn').onclick = function (e) {
  var menu = document.querySelector('.menu');
  var burgerbtn = document.querySelector('.burgerbtn');
  var pagecontent = document.querySelector('.page-content');

  if(pagecontent.style.visibility !=="hidden"){
    pagecontent.style.visibility = "hidden";
  }else {
    pagecontent.style.visibility = "visible";
  }
  
  menu.classList.toggle('is-active');
  burgerbtn.classList.toggle('is-active');
  
  e.preventDefault();
}