const bill = document.getElementById('bill');
const tip = document.querySelectorAll('.grid-item');
const customTip = document.getElementById('custom-tip');
const people = document.getElementById('noofpeople');
const tipPerPerson = document.getElementById('tip-amount');
const totalTip = document.getElementById('total-amount');

function calculateTip () {
    let userInput = bill.value;
    let userTip = parseInt(tip.innerText);
    let customTips = customTip.value;

    if(typeof userInput === 'number' && typeof people === 'number') {
        tipPerPerson.innerText = userInput * tip;
        totalTip.innerText = tipPerPerson * people;
    }
}

tip.addEventListener('click', calculateTip());

