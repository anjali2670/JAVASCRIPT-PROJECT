var value=0;
//get access to p tag
const display=document.querySelector('.counter-preview')
//incement operation
const incementBtn=document.querySelector('#increment')
incementBtn.addEventListener('click',increment)
function increment(){
    value = value+1;
    display.textContent = value
}
//decrement operation

const decmentBtn=document.querySelector('#decrement')
decmentBtn.addEventListener('click',decrement)
function decrement(){
    value = value-1
    display.textContent=value
} 
//implement the reset
const resetBtn=document.querySelector('#reset')
resetBtn.addEventListener('click',reset)
function reset(){
    value=0
    display.textContent=value
}