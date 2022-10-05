let daysEl= document.getElementById("days");
let hoursEl= document.getElementById("hours");
let minutesEl= document.getElementById("minutes");
let secondsEl= document. getElementById("seconds");

const event="1 Jan 2023";

function countDown(){
    let eventDate=new Date(event);
    let currentDate= new Date();

    let totalSeconds= (eventDate- currentDate)/1000;
    
    let days=Math.floor(totalSeconds/3600/24);
    let hours=Math.floor(totalSeconds/3600)%24;
    let minutes= Math.floor(totalSeconds/60)%60;
    let seconds= Math.floor(totalSeconds)%60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML= formatTime(hours);
    minutesEl.innerHTML= formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);

}

function formatTime(time){
    return time<10? `0${time}` : time;
}
countDown();
setInterval(countDown, 1000);
