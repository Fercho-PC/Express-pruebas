

const comprarJuego = async (req, res) => {
    console.log("Hola estas en comprar juegos")
    res.status(300).send({
        message:"Hola estas en comprar juego"
    });
}

const verJuego = async (req, res) => {
    console.log("Estas en ver juego")
    res.status(300).send({
        message:"Estas en ver juego"
    });    
}

const listaJuego = async (req, res) => {
    console.log("estas en la lista de juegos")
    res.status(300).send({
        message:"Estas en la lista de juegos"
    });

}

const infoJuego = async (req, res) => {
    console.log("Informacion del juego")
    res.status(300).send({
        message:"estas en la informacion del juego"
    });
}

export {
    comprarJuego,
    verJuego,
    listaJuego,
    infoJuego
};