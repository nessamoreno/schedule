import {Router} from "express";
import EvenParController from "../Controllers/EvenParController.js"

const EvePartRouter = Router();
const Controller = new EvenParController();

//CREATE AN EVENT()
EvePartRouter.post('/evenPar', Controller.evenParCreate);

export default EvePartRouter;