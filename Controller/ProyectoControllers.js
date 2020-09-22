const TareaModel = require('../Model/TareaModel')
exports.ServicioController = (req,res) =>{
    return res.send(`Estas en la pagina de servicios`)
}

exports.HomeController = async (req,res) =>{
    const tareas = await TareaModel.findAll()
    return res.render('Index', {
            nombrePagina: 'Inicio',
            tareas
    })
}

exports.NosotrosController = (req,res) =>{
    return res.render('Nosotros',{
            nombrePagina: 'Nosotros'
    })
}
exports.NuevaTareaController = (req,res) =>{
    return res.render('NuevaTarea',{
            nombrePagina: 'Nueva tarea'
    })
}

exports.NuevaTareaCreadaController = async (req,res) =>{
    const { nombre } = req.body
    let Errores = []
    let Exito = []
    if (!nombre)
    {
        Errores.push({'Excepcion': 'Agrega el nombre de la tarea'})
    }

    if (Errores.length > 0)
    {
        return res.render('NuevaTarea',{
            nombrePagina : 'Nueva tarea',
            Errores
        })
    }else
    {      
        await TareaModel.create({
            Descripcion: nombre            
        }).then(() => {Exito.push({'Msg': 'Datos guardados correctamente'})})
        .catch((err) => {console.log(err)})
         res.render('NuevaTarea',{
            nombrePagina: 'Nueva tarea',
            Exito
         })
    }
    
}