
const buttons = document.querySelectorAll('button');
const form = document.getElementById('form')
const formValue= document.getElementById('formValue');




for(let btn of buttons){

    btn.addEventListener('mouseenter',(e)=>{
        e.target.classList.toggle('first');
       
    })

    btn.addEventListener('mouseleave',(e)=>{


        e.target.classList.toggle('first');
    })

    
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.dir(form)
    // console.log(form.elements[0].value)

    let show = form.elements[0].value

    formValue.innerHTML = show

    
})


