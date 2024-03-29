const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')

const validateHTTPStatus = dogData => {
    if(!dogData.ok){
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    console.log(dogData);
    const ver = dogData.json()
    console.log(ver);
    return ver
    
}

const setDogImg = ({ message: url }) => {
    dogImg.setAttribute('src', url)
}

const handleRequestError = error => {
    console.log(error.message)
}



fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImg)
    .catch(handleRequestError)









// fetch(url)
// .then(dogData => {
//     if(!dogData.ok){
//         throw new Error(`HTTP error, status ${dogData.status}`)
//     }
//     return dogData.json()
// })
// .then(({ message }) => {
//     dogImg.setAttribute('src', message)
// })
// .catch(error => {
//     console.log(error.message)
// })