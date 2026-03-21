const getNumber = (max= 11, min = 0) =>Math.floor(Math.random() *(max - min)+min)
const oN = (n) => {
    let str =n+""
    return str.length === 2 ? str : "0" + str }
const colors = ["#034159","#02735E","#038C3E","#0CF25D"]
const data = []
let n = Math.floor(getNumber(61,6)/6)*6
while(n--){
    data.push(getNumber(100))
}
const box = document.querySelector(".box")

box.innerHTML= "<div class=\"card\"><div/>"

for (const val of data) {
    box.innerHTML += `<div 
    class="card" 
    style="background-color:${colors[getNumber(colors.length)]}" >
    ${oN(val)}</div>`
}

function showTime(day=new Date (2027, 0, 1)){
    let now = new Date()
    let d, h, m, s
    let time = Math.floor((day - now)/1000)
    m= Math.floor((time)/60)
    s= time - m*60
    h= Math.floor(m/60)
    m-=h*60
    d= Math.floor(h/24)
    h-=d*24
    return ` ${d} д. ${h} ч. ${m} мин. ${s} сек. `
}
box.firstElementChild.innerText=`До окончания осталось ${showTime()}`
setInterval(function(){box.firstElementChild.innerText=`До окончания осталось ${showTime()}`},1000)