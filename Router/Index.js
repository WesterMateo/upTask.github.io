const  express  = require('express')
const router = express.Router()
//Importamos el controlador
const ProyectoControllers = require('../Controller/ProyectoControllers')
//Importamos el validador
const { body } = require('express-validator/check')





module.exports = ()=>{
    router.get('/', ProyectoControllers.GetHomeController)
    router.get('/servicio', ProyectoControllers.GetServicioController)
    router.get('/nosotros', ProyectoControllers.GetNosotrosController)
    router.get('/nueva_tarea', ProyectoControllers.GetNuevaTareaController)
    router.get('/tareas/:URL', ProyectoControllers.GetTareasController)
    //Parte de los POST
    router.post('/nueva_tarea',
        body('Descripcion').not().isEmpty().trim().escape(),
        ProyectoControllers.PostNuevaTareaController)
    return router
}