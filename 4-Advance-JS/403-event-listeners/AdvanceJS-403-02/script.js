for(var i=0;i<document.querySelectorAll('.drum').length;i++){ 
  document.getElementsByClassName('drum')[i].addEventListener('click',function(){
    var buttontext=this.innerHTML;
    makesound(buttontext);
  })
}
  document.addEventListener("keypress",function(e){
    console.log("key has been pressed")
    
    makesound(e.key);
  })
  function makesound(buttontext){
    if(buttontext=='w'){
        var tom1=new Audio("Assets/sounds/tom-1.mp3");
        tom1.play();
    }
    if (buttontext == "a") {
      var tom2 = new Audio("Assets/sounds/tom-2.mp3");
      tom2.play();
    }
    if (buttontext == "s") {
      var tom3 = new Audio("Assets/sounds/tom-3.mp3");
      tom3.play();
    }
    if (buttontext == "d") {
      var tom4 = new Audio("Assets/sounds/tom-4.mp3");
      tom4.play();
    }
    if (buttontext == "j") {
      var snare = new Audio("Assets/sounds/snare.mp3");
      snare.play();
    }
    if (buttontext == "k") {
      var kick = new Audio("Assets/sounds/kick-bass.mp3");
      kick.play();
    }
    if (buttontext == "l") {
      var crash = new Audio("Assets/sounds/crash.mp3");
      crash.play();
    }
  }