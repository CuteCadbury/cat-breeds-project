//Dropdown
document.addEventListener('DOMContentLoaded', () => {
    const selectBreed = document.querySelector('#selectBreed')
    //or const selectBreed = document.getElementById('selectBreed')

    fetch('https://api.thecatapi.com/v1/breeds')
   .then(res => res.json())
   .then(data => {
    let result=""
    data.forEach(breeds => {
        result += `<option>${breeds.name}</option>`
    })
    selectBreed.innerHTML = result
   })
   .catch(err => console.log(err))
})

// let submitBtn = document.querySelector("#submit-btn")
// let searchInput = document.getElementById("breed-input")

// //    submit button when clicked
// let submitBtn = document.querySelector("#submit-btn")
// let searchInput = document.getElementById("breed-input")

// submitBtn.addEventListener("click", () => {
// let catBreed = searchInput.value
// let catUrl = "https://api.thecatapi.com/v1/breeds"

// fetch("https://api.thecatapi.com/v1/breeds")
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })

let breeds =[]

function getBreedName(){
    fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => res.json())
    .then(res => {
        breeds = Object.keys(res.message)
        addBreedNameToDom(breeds)
    })
}

function addBreedNameToDom(breeds){
    const div = document.getElementById("card card-shadow")
    breeds.map(breed => {
        const h3 = document.getElementById("cat-breed")
        const li1 = document.getElementById("description")
        const li2 = document.getElementById("temperament")
        const li3 = document.getElementById("lifespan")
        const li4 = document.getElementById("origin")
        const button = document.getElementById("delete-btn")

        h3.textContent = breed
        li1.textContent = breed
        li2.textContent = breed
        li3.textContent = breed
        li4.textContent = breed
        button.textContent = breed

        div.append(h3, li1, li2. li3, li4, button)
    })
}

//delete when 'Delete' is clicked
// 1.
// const deleteBtn = document.getElementById("delete-btn")

// deleteBtn.getElementById('.delete-btn').addEventListener('click', () => {
//     console.log(deleteBtn)
// })

// 2.
// document.querySelector("delete-btn").addEventListener("click", () => {
//     alert("Deleted!")
// })





// <!------------------GitHub Search App Try----------------->
// const form = document.getElementById("search-wrapper")

// form.addEventListener("submit", () => {
//     e.preventDefault()

// })

// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.querySelectorById('search-wrapper'))
// })

