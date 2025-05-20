const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const sumbtiBtn = document.getElementById('sumbtiBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

sumbtiBtn.onclick = () => {
    if (myCheckbox.checked) {
        subResult.textContent = `You Checked The box`;
    }
    else {
        subResult.textContent = `You dosent Checked The box`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You Check the Visa Card`;
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = `You Check the Master Card`;
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = `You Check the PayPal Card`;
    }
    else {
        paymentResult.textContent = `You must select a payment type.`;
    }
}