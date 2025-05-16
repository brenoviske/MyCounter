let count = 0
const decreasebutton = document.getElementById('decreasebutton')
const resetbutton = document.getElementById('resetbutton')
const increasebutton = document.getElementById('increasebutton')
const counterlabel = document.getElementById('counterlabel')


increasebutton.onclick = function(){
    count ++;
    counterlabel.textContent = count

}

resetbutton.onclick = function(){
    count = 0
    counterlabel.textContent = count
}

decreasebutton.onclick = function(){
    count --;
    counterlabel.textContent = count
}