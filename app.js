const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// Utilización de Handlebars (hbs) para el renderizado de la página web
app.set('view engine', 'hbs')

// Uso de parciales "código que se repite en más de un lugar o páginas web"
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático, público donde está el template
app.use(express.static('public'))

//enviando argumentos a home
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/sobremi', (req, res) => {
    res.render('sobremi')
})

app.get('/portafolio', (req, res) => {
    res.render('portafolio')
})

app.get('/curriculum', (req, res) => {
    res.render('curriculum')
})

app.get('/habilidades', (req, res) => {
    res.render('habilidades')
})

app.get('/cursos', (req, res) => {
    res.render('cursos')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})