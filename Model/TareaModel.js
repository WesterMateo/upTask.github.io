const Sequelize = require('sequelize')
const BDConection = require('../Config/DataBaseConection')
const os = require('os')
const slug = require('slug')
const shortid = require('shortid')
const Tarea = BDConection.define('Tarea',{
    ID_Tarea: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descripcion: Sequelize.STRING(60),
    URL: Sequelize.STRING(60),
    Usuario: Sequelize.STRING(60)
},
{
    hooks:{ beforeCreate(Tarea) {
        Tarea.Usuario = os.hostname(),
        Tarea.URL = `${slug(Tarea.Descripcion,"_")}_${shortid.generate()}`
        }
    }
})
module.exports = Tarea