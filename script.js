let bill = 0;
let person = 0;
let customTip = 0;
let totalCost = 0;
let totalBill = 0;
let tip = 0;
let tipAmount = 0;
let amountNum = document.getElementById("amountNum");
let totalNum = document.getElementById("totalNum");
let billField = document.getElementById("dollar");
let peopleField = document.getElementById("person");
let customField = document.getElementById("custom");
let resetButton = document.getElementById("reset");
let tipButton = document.querySelectorAll(".tip")

document.getElementById("amountNum").innerText = "$" + (tipAmount).toFixed(2);
document.getElementById("totalNum").innerText = "$" + (totalBill).toFixed(2);

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

resetButton.addEventListener("click", function() {
    location.reload();
    return false;
});

document.addEventListener("keyup", function() {
    totalBill = (bill + (bill / 100) * tip) / person;
    tipAmount = ((bill / 100) * tip) / person;
    if (!isFinite(tipAmount)) {
        tipAmount = 0;
    };
    if (!isFinite(totalBill)) {
        totalBill = 0;
    }
    document.getElementById("amountNum").innerText = "$" + (tipAmount).toFixed(2);
    document.getElementById("totalNum").innerText = "$" + (totalBill).toFixed(2);
})


