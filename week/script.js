function lightDark() {
    halfmoon.toggleDarkMode();
}

const milesElements = document.querySelectorAll('.miles');

const sundayMilesElement = document.getElementById('sunday-miles');
const mondayMilesElement = document.getElementById('monday-miles');
const tuesdayMilesElement = document.getElementById('tuesday-miles');
const wednesdayMilesElement = document.getElementById('wednesday-miles');
const thursdayMilesElement = document.getElementById('thursday-miles');
const fridayMilesElement = document.getElementById('friday-miles');
const saturdayMilesElement = document.getElementById('saturday-miles');

const totalMilesElement = document.getElementById('total-miles');

const calculate = () => {
    let totalMiles = 0;

    for (let i = 0; i < milesElements.length; i++) {
        totalMiles += Number(milesElements[i].value);
    }

    totalMilesElement.innerText = Math.round(totalMiles * 1e2) / 1e2;

    saveValues();
}

milesElements.forEach((milesElement, index) => {
    milesElement.addEventListener('change', calculate);
    milesElement.addEventListener('keyup', calculate);
});

const saveValues = () => {
    localStorage.setItem('sundayMiles', sundayMilesElement.value);
    localStorage.setItem('mondayMiles', mondayMilesElement.value);
    localStorage.setItem('tuesdayMiles', tuesdayMilesElement.value);
    localStorage.setItem('wednesdayMiles', wednesdayMilesElement.value);
    localStorage.setItem('thursdayMiles', thursdayMilesElement.value);
    localStorage.setItem('fridayMiles', fridayMilesElement.value);
    localStorage.setItem('saturdayMiles', saturdayMilesElement.value);
}

const initialValues = () => {
    if (localStorage.getItem('sundayMiles') !== null) {
        sundayMilesElement.value = localStorage.getItem('sundayMiles');
    }
    if (localStorage.getItem('mondayMiles') !== null) {
        mondayMilesElement.value = localStorage.getItem('mondayMiles');
    }
    if (localStorage.getItem('tuesdayMiles') !== null) {
        tuesdayMilesElement.value = localStorage.getItem('tuesdayMiles');
    }
    if (localStorage.getItem('wednesdayMiles') !== null) {
        wednesdayMilesElement.value = localStorage.getItem('wednesdayMiles');
    }
    if (localStorage.getItem('thursdayMiles') !== null) {
        thursdayMilesElement.value = localStorage.getItem('thursdayMiles');
    }
    if (localStorage.getItem('fridayMiles') !== null) {
        fridayMilesElement.value = localStorage.getItem('fridayMiles');
    }
    if (localStorage.getItem('saturdayMiles') !== null) {
        saturdayMilesElement.value = localStorage.getItem('saturdayMiles');
    }

}

window.addEventListener('load', initialValues);
window.addEventListener('load', calculate);