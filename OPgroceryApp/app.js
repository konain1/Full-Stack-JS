const addBtn = document.querySelector('.add-btn');

const taskBox = document.querySelector('.task-Box')

const ticketStack = document.querySelector('.ticket-Stack')




addBtn.addEventListener('click',()=>{

    
    if(taskBox.value != ''){
        makeTodo()
        taskBox.value = ''
    }else {
        alert('please write something first')
    }
   
})




function makeTodo(){


    let todoDiv = document.createElement('p');

    todoDiv.setAttribute('class','todoDiv');

    todoDiv.innerHTML = `
    <p>${taskBox.value}</p>
   `

    ticketStack.appendChild(todoDiv)
    
  }