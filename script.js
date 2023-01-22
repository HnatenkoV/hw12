const  carTrafficRed = document.getElementById('t-red');
const  carTrafficYellow = document.getElementById('t-yellow');
const  carTrafficGreen = document.getElementById('t-green');
const cnt = document.getElementById('counter');
const btn = document.getElementById('buttonW');

const circles = document.querySelectorAll('.light-circle');
console.log(circles)
let activeLight = 0;

let startChangeLight;
function changeLightOn() {
    startChangeLight = setInterval(changeLight, 5000)
}
changeLightOn();

// const test = document.getElementById('test');
//
// test.addEventListener('click', () => {
//     clearInterval(startChangeLight);
// });

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
        changeLightOn();
        cntValue = 10
        btn.removeAttribute('disabled');
    } else {
        onTimer = setTimeout(stopTraffic, 1000);
        clearInterval(startChangeLight);
        btn.setAttribute('disabled','disabled');
    }
}

function pressBtn() {
    clearInterval(startChangeLight);
    clearTimeout(onTimer);


    carTrafficRed.classList.add(carTrafficRed.getAttribute('activeColor'));
    carTrafficYellow.classList.remove(carTrafficYellow.getAttribute('activeColor'));
    carTrafficGreen.classList.remove(carTrafficGreen.getAttribute('activeColor'));


    stopTraffic();
}




btn.addEventListener('click', pressBtn);


