//We should select the button inside the html and add an eventListener to the button which listen to when the button get
//clicked and when clicked it calls the function handleClick

// First way of doing it

// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick()
// {
//   alert("I got clicked");
// }

function playAccordingToChar(inputChar)
{
  switch (inputChar) {
    case 'w': var tom1 = new Audio('sounds/tom-1.mp3');
              tom1.play();
    break;
    case 'a': var tom2 = new Audio('sounds/tom-2.mp3');
              tom2.play();
    break;
    case 's': var tom3 = new Audio('sounds/tom-3.mp3');
              tom3.play();
    break;
    case 'd': var tom4 = new Audio('sounds/tom-4.mp3');
              tom4.play();
    break;
    case 'j': var snare = new Audio('sounds/snare.mp3');
              snare.play();
    break;
    case 'k': var crash = new Audio('sounds/crash.mp3');
              crash.play();
    break;
    case 'l': var kick = new Audio('sounds/kick-bass.mp3');
              kick.play();
    break;
    default: console.log(inputChar);

  }
}

//Detecting button press
//Second Way of doing it
var buttons = document.querySelectorAll(".drum");
for(var i = 0;i<buttons.length;i++)
{
  buttons[i].addEventListener("click",function(){
    // this.style.color = "white";
    var buttonHTML = this.innerHTML;
    playAccordingToChar(buttonHTML);
    addAnimation(buttonHTML);
  });
}

//Detecting keypress

document.addEventListener("keydown",function(event){
  //console.log(event);
  playAccordingToChar(event.key);
  addAnimation(event.key);
});

function addAnimation(key)
{
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
