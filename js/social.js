let socialSection = document.getElementById('social');
let profileSection = document.querySelector('.preview__profile__container')
let container = document.querySelector('.preview__profile');

let viewport = window.innerWidth;

window.onresize = function(){
  viewport = window.innerWidth;
  socialSection.style.display ="none";
  profileSection.style.display ="flex";
  container.style.backgroundColor ="white";
}
share.onclick = function(){

  if(viewport < 772){
    if(socialSection.style.display =="flex" && profileSection.style.display =="none"){
     socialSection.style.display ="none";
     profileSection.style.display ="flex";
     container.style.backgroundColor ="white"
   }else{
     socialSection.style.display ="flex";
     profileSection.style.display ="none";
     container.style.backgroundColor = "hsl(217, 19%, 35%)";
    }
  }else{
    if(socialSection.style.display == "none" || socialSection.style.display==""){
      socialSection.style.display="flex";
    }else{
      socialSection.style.display="none";
    }
  }
}