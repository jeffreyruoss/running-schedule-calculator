(()=>{

const inputs = document.querySelectorAll('.form-control');

const startingWeekMilesInput = document.getElementById('starting-week-miles');
const percentIncreaseInput = document.getElementById('percent-increase');
const numWeeksInput = document.getElementById('number-of-weeks');

const tbody = document.getElementById('tbody');

let numWeeks, percentIncrease, startingWeekMiles;

const initialValues = () => {
    if (localStorage.getItem('startingWeekMiles') === null) {
        startingWeekMilesInput.value = 20;
    } else {
        startingWeekMilesInput.value = localStorage.getItem('startingWeekMiles');
    }
    if (localStorage.getItem('percentIncrease') === null) {
        percentIncreaseInput.value = 10;
    } else {
        percentIncreaseInput.value = localStorage.getItem('percentIncrease');
    }
    if (localStorage.getItem('numWeeks') === null) {
        numWeeksInput.value = 10;
    } else {
        numWeeksInput.value = localStorage.getItem('numWeeks');
    }
}

const saveValues = () => {
    localStorage.setItem('startingWeekMiles', startingWeekMiles);
    localStorage.setItem('percentIncrease', percentIncrease);
    localStorage.setItem('numWeeks', numWeeks);
}

const calculate = (e) => {
    numWeeks = numWeeksInput.value;
    percentIncrease = percentIncreaseInput.value;
    startingWeekMiles = startingWeekMilesInput.value;
    saveValues();
    createRows();
}

const createRows = () => {
    tbody.innerHTML = '';
    let miles;
    for (let i = 0; i < numWeeks; i++ ) {
        const tr = document.createElement('tr');
        tr.classList.add('week');

        if (i === 0) {
            miles = Number(startingWeekMiles);
        } else {
            miles = miles + (miles * (percentIncrease / 100));
        }
        miles = Math.round(miles * 1e2) / 1e2;

        tr.innerHTML = `<td>${i+1}</td><td>${miles}</td>`;
        tbody.appendChild(tr);
    }
}

inputs.forEach((input, index) => {
    input.addEventListener('change', calculate);
    input.addEventListener('keyup', calculate);
});

window.addEventListener('load', initialValues);
window.addEventListener('load', calculate);

})();