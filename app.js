let time = 0;
const intervalID = setInterval(() => {
    const timeField = document.getElementById('time');
    timeField.innerText = time++;
}, 1000)

document.getElementById('btn-start').addEventListener('click', function () {
    console.log('btn start clicked');
    setInterval();
})

document.getElementById('btn-pause').addEventListener('click', function () {
    console.log('pause clicked');
    clearInterval(intervalID);
})

document.getElementById('btn-reset').addEventListener('click', function () {
    console.log('reset clicked');
    const timeField = document.getElementById('time');
    timeField.innerText = 0;
    clearInterval(intervalID);
})