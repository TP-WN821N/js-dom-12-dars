let btn = document.getElementById('add_btn')
let total_date = JSON.parse(localStorage.getItem("key")) || []

document.addEventListener('DOMContentLoaded', () => {
  createDom()

})

btn.addEventListener('click', () => {
  btnClicked()
  createDom()
})

function btnClicked() {
  total_date.push({
    id: total_date.length, total_value: 0
  })
  getLocalStorage()
}

function createDom() {
  let box = document.getElementById('box')
  box.innerHTML = ""
  total_date.forEach((item, i) => {
    box.innerHTML += ` 
      <div class="flex gap-4 items-center bg-white py-1 px-2">
        <button onclick="dicFn(${i})" class="w-8 h-8 flex justify-center align-middle bg-blue-600 text-white text-3xl">+</button>
        <p class="text-3xl" id="total_${i}">${total_date[i].total_value}</p>
        <button onclick="incFn(${i})" class="w-8 h-8 flex justify-center items-center bg-blue-600 text-white text-3xl">-</button>
      </div>
    `
  })
}

function dicFn(i) {
  total_date[i].total_value += 1
  document.getElementById(`total_${i}`).innerHTML = +document.getElementById(`total_${i}`).innerHTML + 1
  getLocalStorage()
}

function incFn(i) {
  total_date[i].total_value -= 1
  document.getElementById(`total_${i}`).innerHTML -= 1
  getLocalStorage()
}

function getLocalStorage() {
  localStorage.setItem('key', JSON.stringify(total_date))
}