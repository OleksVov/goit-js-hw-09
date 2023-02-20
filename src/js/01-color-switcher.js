const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;}

stopButton.setAttribute("disabled", "disabled");

startButton.addEventListener('click', () => {
    timerId = setInterval(() => {
body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startButton.setAttribute("disabled", "disabled" );
    stopButton.removeAttribute('disabled');
});

stopButton.addEventListener('click', () => {
clearInterval(timerId);

startButton.removeAttribute('disabled');
stopButton.setAttribute("disabled", "disabled" );

});

