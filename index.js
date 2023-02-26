//Dropdown
document.addEventListener('DOMContentLoaded', (e) => {
    const selectBreed = document.querySelector('#selectBreed')
    //const selectBreed = document.getElementById('selectBreed')



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



//delete when 'Delete' is clicked
// const deleteBtn = document.getElementById("delete-btn")

// deleteBtn.querySelector('.delete-btn').addEventListener('click', () => {
//     deleteBtn.remove()
// })

document.querySelector("delete-btn").addEventListener("click", () => {
    alert("Deleted!")
})
