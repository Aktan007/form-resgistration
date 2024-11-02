

const form = document.getElementById('form')
const container  = document.getElementById('container')
const enter = document.getElementById("enter")
const title = document.getElementById("title")
const background = document.getElementById('background')
background.style.display = 'none'
enter.style.display = "none"

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const userObj = {'name': form.name.value, 'email': form.email.value, 'password': form.password.value, 'confirm-password': form.confirm-password.value}
    if (localStorage.length === 0 ){
        localStorage.setItem("users", JSON.stringify( []))
    }
    const users = JSON.parse( localStorage.getItem('users'))
    users.push(userObj)
    localStorage.setItem("users", JSON.stringify(users))
    form.name.value = ""
    form.email.value = ""
    form.password.value = ""
    form.confirm-password.value == ""
    // container.innerHTML = ""
    // container.style.display = "none"
    form.style.display = "none"
    enter.style.display = "block"
    title.textContent = "Sign in"
    background.style.display = 'block'

})

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const users = JSON.parse( localStorage.getItem('users'))
    
})

