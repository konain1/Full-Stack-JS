const canvas = document.querySelector('canvas')


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d')

// c.fillRect(100,100,100,100)

// c.fillRect(200,300,100,100)

// c.fillRect(300,100,100,100)

// c.fillRect(400,300,100,100)

// making random cicles without moving object
// for(var i = 0;i<10;i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.beginPath();
   
//     c.arc(x,y,30,Math.PI * 2,false);
//     c.strokeStyle = 'rgb(5,3,222)';
   
//     c.stroke();
// }


// making moving circules
// var x = 300;
// var y = 300;
// var radius = 30;
// var dx = 1 //  this is x velocity
// var dy = 1 // this is y velocity;


// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(x,y,radius,Math.PI * 2,false);
//     c.strokeStyle='red';
//     c.stroke();
    
//     if(x + radius > innerWidth || x - radius < 0 ){
//         dx = -dx;
//     }
//     if(y + radius > innerHeight || y - radius < 0 ){
//         dy = -dy;
//     }
//     x+=dx;
//     y+=dy;
//     c.fill();
// }

// animate();

// Making random circules

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
            c.beginPath();
            c.arc(this.x,this.y,this.radius,Math.PI * 2,false);
            c.strokeStyle='red';
            c.fill();
            c.stroke();


    }

    this.update = function(){

        if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
                    this.dx = -this.dx;
             }
         if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ){
                    this.dy = -this.dy;
             }
                this.x += this.dx;
               
                this.y += this.dy;
               
                this.draw();
                // console.log(this.draw())
                

    }
  

    


}

var call = new Circle(250,200,1,1,70);

// call.update();




function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    call.update();
    
}
animate();