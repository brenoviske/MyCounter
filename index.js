
// Getting the elements by their ID

const decreasebutton = document.getElementById('decreasebutton')
const resetbutton = document.getElementById('resetbutton')
const increasebutton = document.getElementById('increasebutton')
const counterlabel = document.getElementById('counterlabel')



// Adding a counter 

let count = 0 

// Making the backend logic

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

// Displaying a new function 

function Updatedisplay (){
    counterlabel.textContent = count
}