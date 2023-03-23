import express from 'express'
import * as dotenv from 'dotenv'

const url = 'https://zoeken.oba.nl/api/v1'

// activate dotenv
dotenv.config()


const activityURL = url + '/search/?q=special:all%20table:activiteiten&authorization=' + process.env.authorization + '&output=json'
const bookURL = url + '/search/?q=boek&authorization=' + process.env.authorizationB + '&refine=true&output=json'
const courseURL = url + '/search/?q=special:all%20table:jsonsrc&authorization=' + process.env.authorization + '&output=json'
// Maak een nieuwe express app
const app = express()

console.log(process.env.authorizationB)

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
    fetchJson(bookURL).then((data) => {
        response.render('index', data)
    })
})

//BOEKEN
app.get('/boeken', (request, response) => {
    fetchJson(bookURL).then((data) => {
        let dataClone = structuredClone(data);

        if (request.query.titles) {
            dataClone.results.titles = dataClone.results.titles.filter(function (title) {
                return results.titles.includes(request.query.titles)
            })
        }
        console.log("hier staat de log van dataclone", dataClone)
        response.render('index', dataClone)
    });
});

//ACTIVITEITEN
app.get('/activiteiten', (request, response) => {
    fetchJson(activityURL).then((data) => {
        let dataClone = structuredClone(data);

        if (request.query.titles) {
            dataClone.results.titles = dataClone.results.titles.filter(function (title) {
                return results.titles.includes(request.query.titles)
            })
        }

        response.render('index', dataClone)
    });
});

// DETAIL
app.get('/detail', (request, response) => {
    response.render('detail')
})

//COURSE
app.get('/cursussen', (request, response) => {
    fetchJson(courseURL).then((data) => {
        let dataClone = structuredClone(data);

        if (request.query.titles) {

            dataClone.results.titles = dataClone.results.titles.filter(function (title) {

                return results.titles.includes(request.query.titles)
            })
        }

        response.render('index', dataClone)
    });
});









// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => error)
}