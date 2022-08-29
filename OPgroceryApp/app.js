const addBtn = document.querySelector('.add-btn');

const taskBox = document.querySelector('.task-Box')

const ticketStack = document.querySelector('.ticket-Stack')

const members = document.querySelectorAll('.member');

// console.log(members[0])
let membersName = ['ariz','konain','kaif','shakti','nawab','nabeel']

addBtn.addEventListener('click',()=>{

    
    if(taskBox.value != '' ){
        makeTodo()
        taskBox.value = ''
    }else {
        alert('please write something first')
    }
   
})

function selectMember(){
    
    for(let i = 0;i<members.length;i++){
        members[i].addEventListener('click',()=>{
          let youAre = members[i].getAttribute('class').split(' ')[1]
        yourRecords(youAre);
        //   console.log(youAre)
          
        })
    }
}
selectMember();


function yourRecords(iAm){
  let yourRecordsDi = document.createElement('div');
  yourRecordsDi.setAttribute('class','yourRecordsDiv');
  
}







function makeTodo(){


    let todoDiv = document.createElement('p');

    todoDiv.setAttribute('class','todoDiv');

    todoDiv.innerHTML = `
    <p>${taskBox.value}</p>
   `

    ticketStack.appendChild(todoDiv)
    
  }