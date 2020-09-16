exports.ServicioController = (req,res) =>{
    return res.send(`Estas en la pagina de servicios`)
}

exports.HomeController = (req,res) =>{
    return res.render('Index', {
            nombrePagina: 'Inicio'
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

exports.NuevaTareaCreadaController = (req,res) =>{
    console.log(req.body)
    const { nombre } = req.body
    let Errores = []

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
        return res.send('Datos enviados')
    }
    
}