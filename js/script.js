'use strict';

let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;

let cron;

document.controle.start.onclick = () => start();
document.controle.pause.onclick = () => pause();
document.controle.reset.onclick = () => reset();

function start(){
    pause();
    cron = setInterval(() => { timer(); }, 10);
}
function pause(){
    clearInterval(cron);
}
function reset(){
    hora = 0;
    minuto = 0;
    segundo = 0;
    milisegundo = 0;

    document.getElementById('hora').innerText = '00';

    document.getElementById('minuto').innerText = '00';

    document.getElementById('segundo').innerText = '00';

    document.getElementById('milisegundo').innerText = '000';
}

function timer(){
    if((milisegundo += 10) == 1000) {
        milisegundo = 0;
        segundo++;
    }
    if(segundo == 60){
        segundo = 0;
        minuto++;
    }
    if(minuto == 60){
        minuto = 0;
        hora++
    }

    document.getElementById('hora').innerText = returnData(hora);

    document.getElementById('minuto').innerText = returnData(minuto);

    document.getElementById('segundo').innerText = returnData(segundo);

    document.getElementById('milisegundo').innerText = returnData(milisegundo);
}
function returnData(input){
    return input > 10 ? input : `0${input}`
}