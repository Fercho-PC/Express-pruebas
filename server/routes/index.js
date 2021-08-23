import {
    mostrarUsuarios,
    insertarUsuarios,
    actualizarUsuarios,
    eliminarUsuarios    
} from "../controllers/user";
import { Router } from "express";
const router =Router();

router.get("/usuarios/",mostrarUsuarios);
router.post("/usuarios/",insertarUsuarios);
router.put("/usuarios/:id",actualizarUsuarios);
router.delete("/usuarios/:id",eliminarUsuarios);


module.exports = router;