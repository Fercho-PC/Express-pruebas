import srevidor from "./server/index";

srevidor.listen(3001, ()=>{
  console.log("Servidor corriendo en el puerto: 3001")


  console.log("Ruta:  http://localhost:3001/")
})