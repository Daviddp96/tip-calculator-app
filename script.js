const BILL = 142.55;
const TIP_PERCENTAGE = 0.15;
const PEOPLE = 5;



function tipPerPerson(bill, percentage, numberOfPeople) {
    return (bill * percentage) / numberOfPeople;
}

function billPerPerson(bill, tip, numberOfPeople) {
    return (bill / numberOfPeople) + tip;
}

let tip = tipPerPerson(BILL, TIP_PERCENTAGE, PEOPLE);

console.log(tip);
console.log(billPerPerson(BILL, tip, PEOPLE));