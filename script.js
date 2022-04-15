'enable strict';

const BILL = 142.55;
const TIP_PERCENTAGE = 0.15;
const PEOPLE = 5;

const tip = function (bill, percentage, numberOfPeople) {
    return (bill * percentage) / numberOfPeople;
}

function billPerPerson(bill, tip, numberOfPeople) {
    return (bill / numberOfPeople) + tip;
}
