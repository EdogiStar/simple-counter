let count = 0;
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");
var resetBtn = document.getElementById("resetBtn");
let countEl = document.getElementById("countEl");

increaseBtn.addEventListener("click", function(){
    increase();
})

decreaseBtn.addEventListener("click", function(){
    decrease();
})

resetBtn.addEventListener("click", function(){
    reset();
})

function increase(){
    count++;
    countEl.textContent = count;
}

function decrease(){
    if(count > 0){
        count--;
    }
    countEl.textContent = count;
}

function reset(){
    count = 0;
    countEl.textContent = count;
}