import {
    mostrarUsuarios,
    insertarUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,    
    
} from "../controllers/user";

import {
    comprarJuego,
    verJuego,
    listaJuego,
    infoJuego
} from "../controllers/juegos";

import { Router } from "express"
const router =Router();

router.get("/usuarios/",mostrarUsuarios);
router.post("/usuarios/",insertarUsuarios);
router.put("/usuarios/",actualizarUsuarios);
router.delete("/usuarios/",eliminarUsuarios);

//Mis rutass

router.post("/juego/",comprarJuego)
router.get("/juego/",verJuego)
router.get("/juego/",listaJuego)
router.post("/juego/",infoJuego)


module.exports= router;