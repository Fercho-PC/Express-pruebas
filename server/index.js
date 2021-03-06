import morgan from "morgan";
import express from "express";
import router from "./routes/";
import db from "./database/";

const servidor =express();

// parse requests of content-type - application/json
servidor.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
servidor.use(express.urlencoded({ extended: true }));

servidor.use(morgan("dev"));
servidor.use(router);

db.sequelize.sync({ force: false }).then(() => {
    console.log("*** Base de datos conectada ***");
});

module.exports = servidor;
