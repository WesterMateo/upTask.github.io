const express = require('express')
const  router  = require('./Router')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()


//Agrego las carpeta con los archivos publicos
app.use(express.static(path.join(__dirname, './public')))

//Agrego el view engine
app.set('view engine', 'pug')

//Agrego las rutas para las vistas
app.set('views', path.join(__dirname, './View'))

//Agrego body-parser para leer los datos de los POST
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Agrego el Router
app.use('/', router())

app.listen(1000,()=>{
    console.log(`Escuchando peticiones en el puerto 1000`)
})