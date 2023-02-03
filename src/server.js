import  express from "express";
import {pool} from "../db.js";
import eventsRoutes from "./Routers/Event.router.js";
import participantsRoutes from "./Routers/Participant.router.js";
import EvePartRouter from "./Routers/EvenPar.router.js";

const app = express();

app.listen(3000);

app.get('/nessaPrueba', (res, response) => response.send ("hello ya llegamos perros"));
app.get('/nessa/prueba', async (res, response) => {
    const [result] = await pool.query('SELECT "pong" AS result')
    response.json(result[0])
});

app.use(express.json());
app.use(participantsRoutes);
app.use(eventsRoutes);
app.use(EvePartRouter);

console.log("HELLO PERROS ESTAMOS LISTO PARA EL AMASACRE ");

