const screen = document.getElementById('screen');


const buttons = document.querySelectorAll('button');


for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        let btnText = e.target.innerText;

        console.log(btnText);
    })
}