const bill = document.getElementById('bill__field');
const tipsBtns = document.querySelectorAll('label[class=percentage][for]');
const tipsRadios = document.querySelectorAll('input[type=radio]')
const custom = document.getElementById('customPercent');
const people = document.getElementById('people__field');
const tipOutput = document.getElementById('tip-output');
const totalOutput = document.getElementById('total-output');


let billValue = 0.0;
let tipValue = 0.15;
let customValue = 0.0;
let peopleValue = 5;

bill.addEventListener('input', setBillValue);
custom.addEventListener('input', setCustomTip);
people.addEventListener('input', setPeopleValue);

function setBillValue() {
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
    tipValue = parseFloat(custom.value);
    console.log(tipValue);
    calc();
}

function setPeopleValue() {
    peopleValue = parseFloat(people.value);
    if(peopleValue == 0) {
        //display error
        //set all output to 0
    }
    console.log(peopleValue)
    calc();
}

tipsBtns.forEach(btn => {
    btn.addEventListener('click', function selectTip() {
        tipValue = parseFloat(btn.textContent.trim())/100;
        console.log(tipValue);
        calc();
    })
    
});

function calc() {
    let tipPerPerson = billValue * tipValue / peopleValue;
    let billPerPerson = billValue / peopleValue + tipPerPerson;

    tipOutput.innerHTML = (Math.floor(tipPerPerson * 100) / 100).toFixed(2);
    totalOutput.innerHTML = (Math.round(billPerPerson * 100) / 100).toFixed(2);
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