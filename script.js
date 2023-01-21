const  carTrafficRed = document.getElementById('t-red');
const  carTrafficYellow = document.getElementById('t-yellow');
const  carTrafficGreen = document.getElementById('t-green');
const cnt = document.getElementById('counter');

const circles = document.querySelectorAll('.light-circle');
console.log(circles)
let activeLight = 0;

const startChangeLight = setInterval(() => {
    changeLight();
}, 5000)

function changeLight() {
    circles[activeLight].className = 'light-circle';
    activeLight++;

    if (activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute('activeColor'));
}

let cntValue = 10;

function handlerWalkingStart(event) {
    clearInterval(startChangeLight);

    carTrafficRed.classList.add(carTrafficRed.getAttribute('activeColor'));
    carTrafficYellow.classList.remove(carTrafficYellow.getAttribute('activeColor'));
    carTrafficGreen.classList.remove(carTrafficGreen.getAttribute('activeColor'));

        let timer = setInterval(() => {
            cntValue -= 1;
            cnt.innerHTML = cntValue;
            if (cntValue === 0) {
                clearInterval(timer);
                cntValue = 10;
            }

            if (cntValue === 0) {
                changeLight();
                setInterval(() => {
                    changeLight();
                }, 5000)
            }
        }, 1000)
}

