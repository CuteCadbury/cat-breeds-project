//Dropdown 
const selectBreed = document.querySelector('#selectBreed')
//or const selectBreed = document.getElementById('selectBreed')
let catObjects 

selectBreed.addEventListener("change", (e) => {
    console.log(e.target.value)
    const found = catObjects.find(catObj => e.target.value === catObj.id)
    console.log(found)

    const card = document.getElementById("breed-collection")
    // const result = document.getElementById("breed-collection")
    // result.textContent = `e.target.value`
    // card.className = 'card'
    card.innerHTML = `
    <div class = "card">
    <h3 id="cat-breed">${selectBreed.name}</h3>
    <li id="description"><b>Description:</b> ${selectBreed.description} </li>
    <li id="temperament"><b>Temperament:</b> ${selectBreed.temperament} </li>
    <li id="lifespan"><b>Life_span:</b> ${selectBreed.lifespan} </li>
    <li id="origin"><b>Origin:</b> ${selectBreed.origin} </li>
    <button class="delete-btn">Delete</button>
    `
    // document.getElementById('selectBreed').append(card)
    }
)

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.thecatapi.com/v1/breeds')
   .then(res => res.json())
   .then(catArray => {
    catObjects = catArray

    catArray.forEach(catObject => {
        const catOPtion = document.createElement("option")

        catOPtion.value = catObject.id
        catOPtion.innerText = catObject.name
        selectBreed.append(catOPtion)
    })
   })
   .catch(err => console.log(err))

})

// function addBreedNameToDom(){
//     card.className = 'card'
//     card.innerHTML = `
//     <div class = "card card-shadow">
//     <h3 id="cat-breed">${catObjects.name}</h3>
//     <li id="description"><b>Description:</b> ${catObjects.description} </li>
//     <li id="temperament"><b>Temperament:</b> ${catObjects.temperament} </li>
//     <li id="lifespan"><b>Life_span:</b> ${catObjects.lifespan} </li>
//     <li id="origin"><b>Origin:</b> ${catObjects.origin} </li>
//     <button class="delete-btn">Delete</button>
//     `
//     document.getElementById('selectBreed').appendChild(card)
//     }

// <!--------------------------------------------------------->

// function addBreedNameToDom(){
//     card.className = 'card card-shadow'
//     card.innerHTML = `
//     <div class = "card card-shadow">
//     <h3 class="cat-breed">${catObjects.name}</h3>
//     <li class="description"><b>Description:</b> ${catObjects.description} </li>
//     <li class="temperament"><b>Temperament:</b> ${catObjects.temperament} </li>
//     <li class="lifespan"><b>Life_span:</b> ${catObjects.lifespan} </li>
//     <li class="origin"><b>Origin:</b> ${catObjects.origin} </li>
//     <button class="delete-btn">Delete</button>
//     `
//     document.getElementById('selectBreed').appendChild(card)
//     }

// let breeds =[]

// function getBreedName(){
//     fetch("https://api.thecatapi.com/v1/breeds")
//     .then(res => res.json())
//     .then(res => {
//         breeds = Object.keys(res.message)
//         addBreedNameToDom(breeds)
//     })
// }

// function addBreedNameToDom(breeds){
//     const div = document.getElementById("card card-shadow")
//     breeds.map(breed => {
//         const h3 = document.getElementById("cat-breed")
//         const li1 = document.getElementById("description")
//         const li2 = document.getElementById("temperament")
//         const li3 = document.getElementById("lifespan")
//         const li4 = document.getElementById("origin")
//         const button = document.getElementById("delete-btn")

//         h3.textContent = breed
//         li1.textContent = breed
//         li2.textContent = breed
//         li3.textContent = breed
//         li4.textContent = breed
//         button.textContent = breed

//         div.append(h3, li1, li2. li3, li4, button)
//     })
// }


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