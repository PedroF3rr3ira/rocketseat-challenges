let isModal =false;

const days = document.getElementById('counter-days'); 
const hours = document.getElementById('counter-hours'); 
const minutes = document.getElementById('counter-minutes'); 
const seconds = document.getElementById('counter-seconds'); 
let amountSeconds;

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
   if(amountSeconds>0){
       amountSeconds--;
       setCounter();
   }else{
   days.innerHTML="00";
   hours.innerHTML="00";
   minutes.innerHTML="00";
   seconds.innerHTML='00';}
}

function setCounter(){
    let daysF = Math.floor(amountSeconds/(24*60*60))//
    let hoursF = Math.floor((amountSeconds%(24*60*60))/(60*60));
    let minutesF = Math.floor(((amountSeconds%(24*60*60))%(60*60))/60);
    let secondsF = Math.floor(((amountSeconds%(24*60*60))%(60*60))%60);
    
    const timeString = [daysF,hoursF,minutesF,secondsF].map(
        unit=> String(unit).padStart(2,'0')
    )
    days.innerHTML = timeString[0];
    hours.innerHTML = timeString[1];
    minutes.innerHTML = timeString[2];
    seconds.innerHTML = timeString[3];
}

function initAmountSeconds(){
    amountSeconds = days.innerText*24;
    amountSeconds= (amountSeconds + Number(hours.innerText))*60;
    amountSeconds = (amountSeconds + Number(minutes.innerText))*60;
    amountSeconds+=Number(seconds.innerText);
    
}
initAmountSeconds()
setCounter();
setInterval(tick,1000)