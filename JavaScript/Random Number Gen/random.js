const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const btn = document.getElementById('genrate-btn');

const max = 100;
const min = 1;

let random1;
let random2;
let random3;

btn.onclick = () =>{
    random1 = Math.floor(Math.random() * max) + min;
    random2 = Math.floor(Math.random() * max) + min;
    random3 = Math.floor(Math.random() * max) + min;

    label1.textContent = random1;
    label2.textContent = random2;
    label3.textContent = random3;
}