let count = 0
const decreasebutton = document.getElementById('decreasebutton')
const resetbutton = document.getElementById('resetbutton')
const increasebutton = document.getElementById('increasebutton')
const counterLabel = document.getElementById('counterLabel')


increasebutton.onclick = function(){
    count ++;
    counterLabel.textContent = count

}

resetbutton.onclick = function(){
    count = 0
    counterLabel.textContent = count
}

decreasebutton.onclick = function(){
    count --;
    counterLabel.textContent = count
}