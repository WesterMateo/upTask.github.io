const TareaModel = require('../Model/TareaModel')
exports.GetServicioController = (req,res) =>{
    return res.send(`Estas en la pagina de servicios`)
}

exports.GetHomeController = async (req,res) =>{
    const tareas = await TareaModel.findAll()
    return res.render('Index', {
            nombrePagina: 'Inicio',
            tareas
    })
}

exports.GetNosotrosController = async (req,res) =>{
    tareas = await TareaModel.findAll()
    return res.render('Tarea',{
            nombrePagina: 'Tarea',
            tareas
    })
}
exports.GetNuevaTareaController = async (req,res) =>{
    const tareas = await TareaModel.findAll()
    return res.render('NuevaTarea',{
            nombrePagina: 'Nueva tarea',
            tareas
    })
}
exports.GetTareasController = async (req, res, next) => {
    const tareas = await TareaModel.findAll()
    const tarea = await TareaModel.findOne({
        where: {
            URL: req.params.URL
        }
    })
    if (!tarea) return next()
    return res.render('Tarea',{
        nombrePagina: 'Tarea',
        tarea,
        tareas
})
}

exports.PostNuevaTareaController = async (req,res) =>{
    const tareas = await TareaModel.findAll()
    const { descripcion } = req.body
    let Errores = []
    let Exito = []
    if (!descripcion) {
        Errores.push({'Excepcion': 'Agrega el nombre de la tarea'})
    }
    else {
        if (descripcion.length > 30)
        {
            Errores.push({'Excepcion': 'El nombre de la tarea no debe ser tan largo'})
        }
    }

    if (Errores.length > 0)
    {
        return res.render('NuevaTarea',{
            nombrePagina : 'Nueva tarea',
            Errores,
            tareas
        })
    }else
    {      
        await TareaModel.create({
            Descripcion: descripcion            
        }).then(() => {Exito.push({'Msg': 'Datos guardados correctamente'})})
        .catch((err) => {console.log(err)})
         res.render('NuevaTarea',{
            nombrePagina: 'Nueva tarea',
            Exito,
            tareas
         })
    }
    
}