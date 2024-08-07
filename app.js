let form = document.getElementById('form')
let tBody = document.getElementById('tbody')


let userDate = JSON.parse(localStorage.getItem("user")) || []
document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    btnClicked()
  })
  creteUsers(userDate)
})

function btnClicked() {
  userDate.push({
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    age: form.age.value,
    email: form.email.value
  })
  form.reset()
  console.log(userDate);
  creteUsers(userDate)
  getLocalStorage()
}


function creteUsers(arr) {
  tBody.innerHTML = ""
  arr.forEach((item, i) => {
    tBody.innerHTML += `
      <tr>
        <td class="border text-center">${i + 1}</td>
        <td class="border text-center">${item.first_name}</td>
        <td class="border text-center">${item.last_name}</td>
        <td class="border text-center">${item.age}</td>
        <td class="border text-center">${item.email}</td>
        <td onclick="deleteUser(${i})" class="h-8 w-8 bg-gray-200 flex items-center justify-center ml-2 my-0.5 cursor-pointer rounded">
          <i class="fa-solid fa-trash"></i>
        </td>
      </tr>
    `
  })
}

function getLocalStorage() {
  localStorage.setItem('user', JSON.stringify(userDate))
}


// Search
let search = document.getElementById('search')
let new_users
search.addEventListener('input', () => {
  new_users = userDate.filter((item, i) => item.first_name.toLowerCase().includes(search.value.toLowerCase()))
  getLocalStorage()
  creteUsers(new_users)
})


function deleteUser(i) {
  userDate.splice(i, 1)
  creteUsers(userDate)
  getLocalStorage()
}

