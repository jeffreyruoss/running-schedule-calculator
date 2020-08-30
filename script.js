(()=>{

const inputs = document.querySelectorAll('.form-control');

const numWeeksInput = document.getElementById('number-of-weeks');
const percentIncreaseInput = document.getElementById('percent-increase');
const startingWeekMilesInput = document.getElementById('starting-week-miles');

const tbody = document.getElementById('tbody');

let numWeeks, percentIncrease, startingWeekMiles;

const calculate = (e) => {
    numWeeks = numWeeksInput.value;
    percentIncrease = percentIncreaseInput.value;
    startingWeekMiles = startingWeekMilesInput.value;
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

window.addEventListener('load', calculate);

})();