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
        percentage = percentage + 33;
        progressLine.style.background = `linear-gradient(to right, #3498db ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    }
    if (nextActiveCircle === circles.length - 1) {
        btnNext.setAttribute('disabled', 'true');
    }
}

function prevStep() {
    if (nextActiveCircle > 0) {
        btnNext.removeAttribute('disabled');
        circles[nextActiveCircle].classList.remove('active');
        percentage = percentage - 33;
        progressLine.style.background = `linear-gradient(to right, #3498db ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
        nextActiveCircle--;
    }
    if (nextActiveCircle === 0) {
        btnPrev.setAttribute('disabled', 'true');
    }
}

