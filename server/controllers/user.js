const mostrarUsuarios = async (req, res) => {
    console.log("hola estas en usuarios")
    res.status(200).send({
        message:"Hola mundo"
    });
}
const insertarUsuarios = async (req, res) => {
    console.log("Estas insertando un usuario")
    res.status(200).send({
        message:"Estas insertando un usuario"
    });
}
const actualizarUsuarios = async (req, res) => {
    console.log("Estas actualizando un usuario")
    res.status(200).send({
        message:"Estas actualizando un usuario"
    });
}
const eliminarUsuarios = async (req, res) => {
    console.log("Estas eliminando un usuario")
    res.status(200).send({
        message:"Estas eliminando un usuario"
    });
}

export {
    mostrarUsuarios,
    eliminarUsuarios,
    insertarUsuarios,
    actualizarUsuarios
};