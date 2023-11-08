const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all() {
const item = document.getElementsByTagName('div')[3]
console.log (item.innerText)
item.innerText = "Голубикова"
document.getElementsByTagName('div')[4].innerText = "Мальвина"
document.getElementsByTagName('div')[5].innerText = "Ивановна"
}

node_for_click_all.addEventListener ("click", find_edit_all)