exports.ServicioController = (req,res) =>{
    return res.send(`Estas en la pagina de servicios`)
}

exports.HomeController = (req,res) =>{
    return res.render('Index', {
            nombrePagina: 'Home'
    })
}

exports.NosotrosController = (req,res) =>{
    return res.render('Nosotros',{
            nombrePagina: 'Nosotros'
    })
}
exports.NuevoProyectoController = (req,res) =>{
    return res.render('NuevoProyecto',{
            nombrePagina: 'Nuevo proyecto'
    })
}