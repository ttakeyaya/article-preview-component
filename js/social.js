let socialContainer = document.getElementById('social');

share.onclick = function(){
  if(socialContainer.style.opacity == 1){
    socialContainer.style.opacity = 0;
  }else{
    socialContainer.style.opacity = 1;
  }
}