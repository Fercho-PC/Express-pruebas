import { db } from "../config/dataBase";

const mostrarUsuarios = async (req, res) => {

    try {
        const results = await db.user.findAll();
        res.status(200).send(results);
    } catch (error) {
        res.status(200).send({
            message:error.message,
        });
    }
}


const insertarUsuarios = async (req, res) => {

    try {
        await db.user.create(
            {
                title:req.body.title,
                description: req.body.description,
                published: req.body.published,
            });
            res.status(200).send({
                message:"Registrado satisfactoriamente"
            });
    } catch (error) {
        res.status(200).send({
            message:error.message,
        });
    }    
}


const actualizarUsuarios = async (req, res) => {
    try {
        await db.user.update(
            {
                title:req.body.title,
                description: req.body.description,
                published: req.body.published,
            },
            {
                where:{ id: req.params.id },
            }
        );
        res.status(200).send({
            message:error.message,
        });
    } catch (error) {
        res.status(200).send({
            message: error.message,
        });
    }
   
    
}
const eliminarUsuarios = async (req, res) => {


    try {
        await db.user.destroy({
            where: { id: req.params.id},
        });
        res.status(200).send(results);
    } catch (error) {
        res.status(200).send({
            message:error.message,
        });
    }
    
}

export {
    mostrarUsuarios,
    eliminarUsuarios,
    insertarUsuarios,
    actualizarUsuarios
};