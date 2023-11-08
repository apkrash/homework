function makeChange() {
const denominations = [500];
const change = document.getElementById("500rub").value;

for (let i = 0; i < denominations.length; i++) {
const denomination = denominations[i];
const count = Math.floor(amount / denomination);
amount -= count * denomination;

for (let j = 0; j < count; j++) {
change.push(denomination);
}
}

return change;
}

const result = makeChange(amount)

const amount= document.getElementById("amount")
amount.elementAmount.addEventListener('input', verify);



