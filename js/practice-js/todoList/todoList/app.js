const todoDiv = document.getElementsByClassName('todoDiv');
const todoList = document.getElementsByClassName('todoList')[0];
const todoUl = document.getElementById('todoUl');
let search;
const sbtn = document.getElementById('sbtn');




// Events






sbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("submit button clicked");
    //create div
    let newDiv = document.createElement('div');
    todoUl.appendChild(newDiv)
    //create li
    newDiv.classList.add('newDiv');
    let li = document.createElement('li');
    //create button
    const chkbtn = document.createElement('button');
    chkbtn.classList.add('fontAwsBtn')

    chkbtn.innerHTML = '<i class="fas fa-trash"></i>'
    search = document.getElementById('search')
    //show value 
    li.innerText = search.value;

    newDiv.appendChild(li);
    newDiv.appendChild(chkbtn);
    // clear searchBox


    search.value ="";
    console.log("this is searchbox"+search.value);

    newDiv.addEventListener('click',deletion);


    


})


function deletion(e){
    // console.log(e.target)

    const item = e.target;
    console.log(item)

    if(item.classList[0] === 'fas')
    {
        const delBtn = document.querySelector(".fas")
        delBtn.addEventListener('click',()=>{
         
            
    }
        )
    }
}


