const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.onclick = () => {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = () => {
    count = 0;
    countLabel.textContent = count;
}

increaseBtn.onclick = () => {
    count++;
    countLabel.textContent = count;
}