
let buttons = document.querySelectorAll(".drum")

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function (){

    playSound(this.innerHTML);
    showAnimations(this.innerHTML);

    });
}


function playSound(key)
{
	switch (key)
	{
		case 'w':    let tom1 = new Audio("sounds/tom-1.mp3");
                     tom1.play();
		             break;
	    
        case 'a':    let tom2 = new Audio("sounds/tom-2.mp3");
                     tom2.play();
		             break;

		case 's':    let tom3 = new Audio("sounds/tom-3.mp3");
                     tom3.play();
		             break;

		case 'd':    let tom4 = new Audio("sounds/tom-4.mp3");
                     tom4.play();
		             break;

        case 'j':    let snare = new Audio("sounds/snare.mp3");
                     snare.play();
		             break;

		case 'k':    let crash = new Audio("sounds/crash.mp3");
                     crash.play();
		             break;
	    
        case 'l':    let kick = new Audio("sounds/kick-bass.mp3");
                     kick.play();
		             break;

	    default:    console.log(this);
	}
}

function showAnimations(key)
{
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
    	document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}

document.addEventListener("keydown", function(e){  // passing keyboard event as e
	playSound(e.key);
	showAnimations(e.key);
});