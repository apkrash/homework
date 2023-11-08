function verify() {

let a = document.getElementById("500rub").value
let b = document.getElementById("amount").value

if (a > b) {
document.getElementById(amount).value = "0"
}

if (a < b) {
document.getElementById(amount).value = Math.floor(b/a)
}

const node_for_check_all = document.getElementById("check_all").value
node_for_check_all.addEventListener ("click", verify)











}