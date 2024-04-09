const inputText = document.getElementById('inputText');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
let year;

submitBtn.onclick = () => {
    year = inputText.value;
    year = Number(year);

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            // console.log(`${year} is Leap Year`);
            result.textContent = `${year} is Leap Year`;
        }
        else {
            // console.log(`${year} not a leap year`);
            result.textContent = `${year} not a leap year`;
        }
    } else {
        if (year % 4 == 0) {
            // console.log(`${year} is leap year`);
            result.textContent = `${year} is leap year`;
        } else {
            // console.log(`${year} not a leap year`)
            result.textContent = `${year} not a leap year`;
        }
    }
}