const bill = document.getElementById('bill__field');
const tipsBtns = document.querySelectorAll('label[class=percentage][for]');
const tipsRadios = document.querySelectorAll('input[type=radio]')
const custom = document.getElementById('customPercent');
const people = document.getElementById('people__field');
const tipOutput = document.getElementById('tip-output');
const totalOutput = document.getElementById('total-output');
const errorMessage = document.querySelector('.error-message');
const resetButton = document.getElementById("reset__btn");


let billValue = 0.0;
let tipValue = 0.0;
let customValue = 0.0;
let peopleValue = 0;

bill.addEventListener('input', setBillValue);
custom.addEventListener('input', setCustomTip);
people.addEventListener('input', setPeopleValue);
resetButton.addEventListener('click', disableButton);

function disableButton() {
    tipOutput.innerHTML = "$0.00";
    totalOutput.innerHTML = "$0.00";
    bill.value = "";
    people.value = "";
    tipsRadios.forEach(btn => {
        if(btn.checked == true) {
            btn.checked = false;
        }
    });
    resetButton.setAttribute('disabled', "");
}

function setBillValue() {
    resetButton.removeAttribute('disabled');
    billValue = parseFloat(bill.value);
    console.log(billValue)
    calc();
}

function setCustomTip() {
    tipsRadios.forEach(btn => {
        if(btn.checked == true) {
            btn.checked = false;
        }
    });
    if(custom.value == null) {
        return;
    }
    tipValue = parseFloat(custom.value) / 100;
    console.log(tipValue);
    calc();
}

function setPeopleValue() {
    peopleValue = parseFloat(people.value);
    if(peopleValue == 0) {
        console.log('error');
        errorMessage.style.display = 'block';
        people.classList.add('error');
    } else {
        errorMessage.style.display = 'none';
        people.classList.remove('error');
        console.log(peopleValue)
        calc();
    }
}

tipsBtns.forEach(btn => {
    btn.addEventListener('click', function selectTip() {
        tipValue = parseFloat(btn.textContent.trim())/100;
        console.log(tipValue);
        calc();
    })
    
});

function calc() {
    if (peopleValue > 0 && billValue > 0) {
        let tipPerPerson = billValue * tipValue / peopleValue;
        let billPerPerson = billValue / peopleValue + tipPerPerson;
        tipOutput.innerHTML = "$" + (Math.floor(tipPerPerson * 100) / 100).toFixed(2);
        totalOutput.innerHTML = "$" + (Math.round(billPerPerson * 100) / 100).toFixed(2);
    } else {
        tipOutput.innerHTML = "$0.00";
        totalOutput.innerHTML = "$0.00";
    }
}


// 1. Get the Bill
    //  1.1 Make sure Bill doesn't include dashes or symbols that aren't numbers. 
    //  1.1.1 Display error and leave output as 0.00
// 2. Get the Tip Percentage
    //  2.1 If Percentage = Custom => 1.1 & 1.1.1
// 3. Get the ammount of people
    //  3.1 People can't be 0 nor negative => 1.1.1
// 4. Calculate the tip per person & display it
// 5. Calculate bill per person + tips & display it 

// Displaying
//  Fields should output numbers trunked to 2 decimals.


// ERROR MESSAGES:
// PEOPLE CAN'T BE 0
// PERCENTAGE CAN'T BE NEGATIVE
// BILL CAN'T BE NEGATIVE
// PEOPLE CAN'T BE NEGATIVE
// CUSTOM TIP CAN'T BE NEGATIVE