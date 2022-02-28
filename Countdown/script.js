let isModal =false;

const days = document.getElementById('counter-days'); 
const hours = document.getElementById('counter-hours'); 
const minutes = document.getElementById('counter-minutes'); 
const seconds = document.getElementById('counter-seconds'); 


function toggleModal(){
    const divModal = document.getElementById('modal-overlay');
    if(!isModal){
        isModal=true;
        divModal.classList.add("active");
    }else{
        isModal=false;
        divModal.classList.remove("active")
    }
}

function tick(){
    let amountSeconds = days.innerText*24;
    amountSeconds= (amountSeconds + Number(hours.innerText))*60;
    amountSeconds = (amountSeconds + Number(minutes.innerText))*60;
    amountSeconds+=Number(seconds.innerText) ;
    alert(amountSeconds)
}
window.onload(tick())