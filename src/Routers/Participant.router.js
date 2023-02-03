import { Router } from "express";
import PartakerController from "../Controllers/ParticipantController.js";

const ParticipantRouter = Router();
const Controller = new PartakerController();
//CREATE PARTICIPANT
ParticipantRouter.post('/partipants', Controller.participantCreate);

//LIST ALL PARTICIPANTS
ParticipantRouter.get('/partipants', Controller.participantList);

// //SHOW A SINGLE PARTICIPANT
ParticipantRouter.get('/partipants/:id', Controller.participantShow);

// //SEARCH BY NAME A PARTICIPANT
ParticipantRouter.post('/partipants/filter/name', Controller.participantFilterName);

// //SEARCH BY IDENTIFICATION A PARTICIPANT
ParticipantRouter.get('/partipants/filter/:identification', Controller.participantFilterIdentification);

export default ParticipantRouter;