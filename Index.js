const express = require('express')
const  router  = require('./Router')
const path = require('path')
const app = express()


//Agrego las carpeta con los archivos publicos
app.use(express.static(path.join(__dirname, './public')))

//Agrego el view engine
app.set('view engine', 'pug')

//Agrego las rutas para las vistas
app.set('views', path.join(__dirname, './View'))

//Agrego el Router
app.use('/', router())

app.listen(3000,()=>{
    console.log(`Escuchando peticiones en el puerto 3000`)
})