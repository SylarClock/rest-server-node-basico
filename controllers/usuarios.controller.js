const { response } = require('express')

const usuariosGet = (req, res = response) => {

    const {q, nombre, apiKey} = req.query;

    res.json({
        msg: "Peticion get",
        q, 
        nombre, 
        apiKey
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: "Post API - ",
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id

    res.json({
        msg: "Put API - ",
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "Patch API - "
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete API - "
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}