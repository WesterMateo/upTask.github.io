const  express  = require('express')
const router = express.Router()
//Importamos el controlador
const ProyectoControllers = require('../Controller/ProyectoControllers')
//Importamos el validador
const { body } = require('express-validator/check')





module.exports = ()=>{
    router.get('/', ProyectoControllers.HomeController)
    router.get('/servicio', ProyectoControllers.ServicioController)
    router.get('/nosotros', ProyectoControllers.NosotrosController)
    router.get('/nueva_tarea', ProyectoControllers.NuevaTareaController)
    //Parte de los POST
    router.post('/nueva_tarea',
        body('Descripcion').not().isEmpty().trim().escape(),
        ProyectoControllers.NuevaTareaCreadaController)
    return router
}