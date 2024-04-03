let counterDisplay = document.querySelector('#counter');
let counterMinus = document.querySelector('#minus');
let counterPlus = document.querySelector('#plus');

let count = 0;

updateDisplay();

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinus.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplay.innerHTML = count;
};


let countLikes = document.querySelector('#heart')
function addLike () {
    numCount ++
    countLikes.innerText = numCount
}