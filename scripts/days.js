const dateStart = new Date("2026-08-03");

function updateCounter(){

    const today = new Date();

    const days = Math.floor(
        (today-dateStart)/(1000*60*60*24)
    );

    const element=document.getElementById("days");

    element.textContent=days;

    if(days<10){
        element.style.color="red";
    }else if(days<20){
        element.style.color="orange";
    }else{
        element.style.color="green";
    }
}

updateCounter();