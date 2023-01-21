const  carTrafficRed = document.getElementById('t-red');
const  carTrafficYellow = document.getElementById('t-yellow');
const  carTrafficGreen = document.getElementById('t-green');
const cnt = document.getElementById('counter');
const btn = document.getElementById('buttonW');

const circles = document.querySelectorAll('.light-circle');
console.log(circles)
let activeLight = 0;

const startChangeLight = setInterval((event) => {
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
let onTimer;

function stopTraffic() {
    cntValue--;
    cnt.innerHTML = cntValue;
    if (cntValue === 0) {
        setInterval((event) => {
            changeLight();
        }, 5000);
    } else {
        onTimer = setTimeout(stopTraffic, 1000)
    }
}



function pressBtn() {
    clearInterval(startChangeLight);


    carTrafficRed.classList.add(carTrafficRed.getAttribute('activeColor'));
    carTrafficYellow.classList.remove(carTrafficYellow.getAttribute('activeColor'));
    carTrafficGreen.classList.remove(carTrafficGreen.getAttribute('activeColor'));

    stopTraffic();
}




btn.addEventListener('click', pressBtn);


