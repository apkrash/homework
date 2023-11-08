function makeChange(amount) {
const denominations = [500, 100, 10, 2];
const change = [];

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