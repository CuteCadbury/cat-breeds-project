
const selectBreed = document.querySelector('#selectBreed')

let catObjects 

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


selectBreed.addEventListener("change", (e) => {
    e.preventDefault()

    const found = catObjects.find(catObj => e.target.value === catObj.id)
    console.log(found)

    const card = document.createElement("div")
    card.className = 'card'
    card.innerHTML = `
    <div class="card-img">
    <img src = https://cdn2.thecatapi.com/images/${found.reference_image_id}.jpg>
    </div>
    <h3 id="cat-breed">${found.name}</h3>
    <li id="description"><b>Description:</b> ${found.description} </li>
    <li id="temperament"><b>Temperament:</b> ${found.temperament} </li>
    <li id="lifespan"><b>Life_span:</b> ${found.lifespan} </li>
    <li id="origin"><b>Origin:</b> ${found.origin} </li>
    `
    const cardCollection = document.getElementById("breed-collection")
    cardCollection.append(card)

    const deleteBtn = document.createElement("button")
    deleteBtn.addEventListener('click', () => {
        card.remove()
    })

    deleteBtn.innerText = 'Delete'
    card.append(deleteBtn)
})


