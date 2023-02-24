

document.addEventListener('DOMContentLoaded', () => {
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


// //submit button when clicked
// let submitBtn = document.getElementById("submit-btn")

// // let searchInput = document.getElementById("breed-input")

// submitBtn.addEventListener("click", () => {
//     let catBreed = breedInput.value
//     let catUrl = `https://api.thecatapi.com/v1/breeds`
//     console.log(catUrl)
// })

//delete when 'Delete' is clicked
// const deleteBtn = document.getElementById("delete-btn")

// deleteBtn.querySelector('.delete-btn').addEventListener('click', () => {
//     deleteBtn.remove()
// })
