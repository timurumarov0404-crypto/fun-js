const getNumber = (max= 11, min = 0) =>Math.floor(Math.random() *(max - min)+min)
const oN = (n) => {
    let str =n+""
    return str.length === 2 ? str : "0" + str }

const data = []
let n = getNumber(41,1)
while(n--){
    data.push(oN(getNumber(100)))
}
const box = document.querySelector(".box")

for (const val of data) {
    box.innerHTML += `<div class="card">${val}</div>`
}