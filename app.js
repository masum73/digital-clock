let time = 1;
let min = 1;
let hour = 1;
let intervalID = null;
function startTimer () {
    return setInterval(() => {
        const timeField = document.getElementById('time');
        timeField.innerText = time++;
        if(time === 60){
            timeField.innerText = 0; 
            time = 0;
            const minField = document.getElementById('min');
            minField.innerText = min++; 
            if( min === 60){
                minField.innerText = 0;
                min = 0;
                const hourField = document.getElementById('hour');
                hourField.innerText = hour++;
            }
            if( hour === 24){

                timeField.innerText = 0; 
                minField.innerText = 0;
                const hourField = document.getElementById('hour');
                hourField.innerText = 0; 
                time = 0; 
                min = 0; 
                hour = 0;
            }
        }
    }, 1000)
}
document.getElementById('btn-start').addEventListener('click', function () {
    console.log('btn start clicked');
    intervalID = startTimer();
})

document.getElementById('btn-pause').addEventListener('click', function () {
    console.log('pause clicked');
    clearInterval(intervalID);
})

document.getElementById('btn-reset').addEventListener('click', function () {
    console.log('reset clicked');
    const timeField = document.getElementById('time');
    timeField.innerText = 0;
    time = 1;
    clearInterval(intervalID);
})