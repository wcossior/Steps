const circles = document.querySelectorAll('.circle');
let nextActiveCircle = 0;
let btnNext = document.querySelector('#btnNext');
let btnPrev = document.querySelector('#btnPrev');
let progressLine = document.querySelector('.progressLine');
let percentage = 0;

function nextStep() {
    if (nextActiveCircle < circles.length - 1) {
        nextActiveCircle++;
        btnPrev.removeAttribute('disabled');
        circles[nextActiveCircle].classList.add('active');
        percentage = percentage + 100/(circles.length-1);
        progressLine.style.width = `${percentage}%`;
    }
    if (nextActiveCircle === circles.length - 1) {
        btnNext.setAttribute('disabled', 'true');
    }
}

function prevStep() {
    if (nextActiveCircle > 0) {
        btnNext.removeAttribute('disabled');
        circles[nextActiveCircle].classList.remove('active');
        percentage = percentage - 100/(circles.length-1);
        progressLine.style.width = `${percentage}%`;
        nextActiveCircle--;
    }
    if (nextActiveCircle === 0) {
        btnPrev.setAttribute('disabled', 'true');
    }
}

