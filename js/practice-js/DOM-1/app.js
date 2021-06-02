

// const p = document.querySelectorAll('.para');

const h = document.querySelectorAll('h1')

const p = document.getElementsByClassName('para');

const htag = document.getElementsByTagName('h3');

const inp = document.querySelectorAll(' input[type="text"] ')

const image = document.querySelector('img');

const pa = document.querySelectorAll('p');

const mydiv = document.getElementsByClassName('mydiv');




// h1.setAttribute('class','test');


htag[0].style.color="red";

inp[0].setAttribute('type','radio');

htag[0].style.backgroundColor = "yellow";


for(let i of p){

    i.style.backgroundColor='aqua';
}

image.setAttribute('src','https://images.unsplash.com/photo-1621570359764-f297bc0d471b?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')


const strong = document.createElement('strong');


strong.textContent = ' this is apend and createElement methods'

mydiv.append('strong')