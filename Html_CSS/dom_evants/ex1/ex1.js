const btn = document.getElementById("colorBtn")
btn.onclick = function() {
    const newDiv = document.createElement("div")
    newDiv.style.backgroundColor = 'red'
    newDiv.innerHTML='אני אדום!'
    document.body.appendChild(newDiv)
}

const newP = document.createElement("p")
newP.innerHTML="אני פסקה חדשה!"
document.body.appendChild(newP)


/*EX1__________________________________________________________*/

const ball = document.getElementById("ball");

const btn_right = document.getElementById("right");
btn_right.onclick = function(){
    const currentLeft = parseInt(ball.style.left) || 0;
    ball.style.left = (currentLeft + 15) + "px";
};

const btn_left = document.getElementById("left");
btn_left.onclick = function(){
    const currentLeft = parseInt(ball.style.left) || 0;
    ball.style.left = (currentLeft - 15) + "px"; 
};

const btn_down = document.getElementById("down");
btn_down.onclick = function(){
    const currentTop = parseInt(ball.style.top) || 0; 
    ball.style.top = (currentTop + 15) + "px";
};

const btn_up = document.getElementById("up");
btn_up.onclick = function(){
    const currentTop = parseInt(ball.style.top) || 0; 
    ball.style.top = (currentTop - 15) + "px";
}