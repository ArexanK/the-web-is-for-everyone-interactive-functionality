import express from 'express'
import * as dotenv from 'dotenv'

const url = 'https://zoeken.oba.nl/api/v1'
const postURL = 'https://api.oba.fdnd.nl/api/v1/'

// activate dotenv
dotenv.config()

//opbouw verschillende URL van de API
const activityURL = url + '/search/?q=special:all%20table:activiteiten&authorization=' + process.env.authorization + '&output=json'
const bookURL = url + '/search/?q=boek&authorization=' + process.env.authorizationB + '&refine=true&output=json'
const courseURL = url + '/search/?q=special:all%20table:jsonsrc&authorization=' + process.env.authorization + '&output=json'
const reservURL = postURL + '/reserveringen'

// opboouw boek url van de api voor detail page

const urlSearch = "?q=";
const urlDefault = "boek";
const urlKey = "&authorization=1e19898c87464e239192c8bfe422f280";
const urlOutput = "&refine=true&output=json";



// Maak een nieuwe express app
const app = express()


// Stel afhandeling van formulieren in
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

console.log(process.env.authorizationB)

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
    fetchJson(bookURL).then((books) => {
        fetchJson(activityURL).then((activities) => {
            fetchJson(courseURL).then((courses) => {
                response.render('homepage', {
                    books: books.results,
                    activities: activities.results,
                    courses: courses.results
                })
            })
        })
    })
})

//BOEKEN
//maakt route voor boeken pagina
app.get('/boeken', (request, response) => {
    fetchJson(bookURL).then((data) => {
        let dataClone = structuredClone(data);
        let backup = {
            results: []
        }
        if (request.query.titles) {
            dataClone.results.titles = dataClone.results.titles.filter(function (title) {
                return results.titles.includes(request.query.titles)
            })
        }
        // console.log(dataClone)
        response.render('category', dataClone)
    });
});

//ACTIVITEITEN
//maakt route voor activiteiten pagina
app.get('/activiteiten', (request, response) => {
    fetchJson(activityURL).then((data) => {
        let dataClone = structuredClone(data);

        if (request.query.titles) {
            dataClone.results.titles = dataClone.results.titles.filter(function (title) {
                return results.titles.includes(request.query.titles)
            })
        }

        response.render('category', dataClone)
    });
});

// DETAIL
app.get('/detail', async (request, response) => {
    let isbn = request.query.resultIsbn || "9789045117621";
    const bookUrl = url + urlSearch + urlDefault + urlKey + urlOutput;

    // fetchJson(booksUrl).then((data) => {

    const booksUrl =
        url + urlSearch + isbn + urlKey + urlOutput;

    const data = await fetch(bookUrl)
        .then((response) => response.json())
        .catch((err) => err);

    response.render('detail', data)
})

//Cursussen
//maakt een route voor cursussen pagina
app.get('/cursussen', (request, response) => {
    fetchJson(courseURL).then((data) => {
        let dataClone = structuredClone(data);

        if (request.query.titles) {

            dataClone.results.titles = dataClone.results.titles.filter(function (title) {

                return results.titles.includes(request.query.titles)
            })
        }

        response.render('category', dataClone)
    });
});


//Reserveringen
//maakt route voor de resevering pagina
app.get('/reserveren', (request, response) => {
    response.render('reserveren')
})

app.post('/reserveren', (request, response) => {
    const postURL = 'https://api.oba.fdnd.nl/api/v1/'
    const url = `${postURL}/reserveren`

    console.log(request.body)

    postJson(url, request.body).then((data) => {
        let newReservering = {
            ...request.body
        }
        console.log(newReservering);
        if (data.id) {
            response.redirect('/')



        } else {
            response.redirect('/')
        }
    })
})







// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 6002)
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

export async function postJson(url) {
    return await fetch(url, {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .catch((error) => error)
}