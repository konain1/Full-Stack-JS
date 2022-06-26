let changeWord =document.getElementById("changeWord");



  

const texts = ['discover','uncover','unleash'];

let count = 0;
let idx = 0;
let currentText = "";
let letters = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];

    letters = currentText.slice(0,++idx);

    changeWord.textContent =letters;

    if(letters.length == currentText.length){
        count++;
        idx = 0;
    }

    setTimeout(type,900);


})();


