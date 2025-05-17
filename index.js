let count = 0
const decreasebutton = document.getElementById('decreasebutton')
const resetbutton = document.getElementById('resetbutton')
const increasebutton = document.getElementById('increasebutton')
const counterlabel = document.getElementById('counterlabel')


decreasebutton.onclick = function(){
    count--;
    Updatedisplay()
}

resetbutton.onclick = function(){
    count = 0;
    Updatedisplay()
}

increasebutton.onclick = function(){
    count ++;
    Updatedisplay()
}

function Updatedisplay (){
    counterlabel.textContent = count
}