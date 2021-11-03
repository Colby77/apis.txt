// const { default: axios } = require("axios")

const getResidentsBtn = document.querySelector('button')
const body = document.querySelector('body')

const buttonClick = () => {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    // .then(res => console.log(res.data))
    .then(res => {
       console.log('hello')
        console.log(res.data.results[0].residents)
        res.data.results[0].residents.forEach((element) => {
            axios.get(element)
            .then(res => {
                let newh2 = document.createElement('h2')
                console.log(res.data)
                newh2.textContent = res.data.name
                body.appendChild(newh2)

            })
        })
           })
       
    .catch(err => console.log(err))
}

getResidentsBtn.addEventListener('click', buttonClick)