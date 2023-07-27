

const myInput = document.getElementById('input')
const myDiv = document.getElementById('div')


myInput.addEventListener('input',function(event){

    
    myInput.addEventListener('keypress',function(e){
        if(e.keyCode === 13){
            const taskText = myInput.value.trim();

            if(taskText === '' ) return;

            makeElements(taskText); 
            // heelojsajbs
        }
    })

})


  



function makeElements(task){
    const li = document.createElement('li');
    li.classList.add('li');
    const span = document.createElement('span')
    const btn = document.createElement('button');
    btn.textContent = 'x';
    li.appendChild(btn);
    span.textContent = task
    li.insertAdjacentElement('afterbegin',span)
    myDiv.appendChild(li)
    myInput.value = ''

    deleteHandler(btn,li);


}

function deleteHandler(button,li){
    button.addEventListener('click',function(){
        li.remove();
    })
}