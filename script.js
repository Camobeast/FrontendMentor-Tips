let amountNum = document.getElementById("amountNum");
let totalNum = document.getElementById("totalNum");
let bill = 0;
let billField = document.getElementById("dollar");
let person = 0;
let peopleField = document.getElementById("person");
let customTip = 0;
let customField = document.getElementById("custom");
let totalCost = 0;
let totalBill = 0;
let tip = 0;


function tipFunc(value) {
    tip = Number(value);
    console.log(tip);
}

billField.addEventListener("keyup", function() {
    bill = Number(billField.value);
});

peopleField.addEventListener("keyup", function() {
    person = Number(peopleField.value);
    totalCost = bill / person;
    console.log(totalCost);
});

customField.addEventListener("keyup", function() {
    customTip = Number(customField.value);
});

document.addEventListener("keyup", function() {
    totalBill = (bill + (bill / 100) * tip) / person;
    console.log((200 + 200 / 100 * 10) / 2)
})


