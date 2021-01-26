function initialTime(segundos) {
    let date = new Date(segundos * 1000);
    return date.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    });
}
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let segundos = 0;
let clock;

function startTimer(){
    clock = setInterval(function (){
        segundos++
        timer.innerHTML = initialTime(segundos);
    }, 1000);
}


start.addEventListener('click', (event) => {
    clearInterval(clock);
    timer.classList.remove('paused');
    startTimer();
});

pause.addEventListener('click', (event) => {
    if (segundos !== 0){
        timer.classList.add('paused');
    } 
    clearInterval(clock);
});

reset.addEventListener('click', (event) => {
    clearInterval(clock);
    timer.classList.remove('paused');
    segundos = 0;
    timer.innerHTML = `00:00:00`;
});

