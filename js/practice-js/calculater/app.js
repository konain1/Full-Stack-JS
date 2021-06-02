const screen = document.getElementById('screen');


const buttons = document.querySelectorAll('button');


for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        let btnText = e.target.innerText;

        console.log(btnText);

        if(btnText == 'x'){
            screen.value += '*'
            console.log(screen.value)
        }
        else if(btnText == 'C'){
            screen.value = "";
        }
        else if(btnText === '='){
            try{
            screen.value = eval(screen.value)
            }catch(e){
                screen.value = 'invalid selection'
            }
        }
        else {
            screen.value += btnText
        }
    })
}