
import PartakerModel from "../Models/ParticipantModel.js";

const participant = new PartakerModel();

class PartakerController {

    participantCreate = async (req,response) => {
        try {
            const res = await participant.createParticipant(req,response);
            return response.send({
                "status" : 200,
                "message" : "Participant created successfully",
                "data" : res,
            });
        } catch (error) {
            return response.send({
                "status" : 404,
                "message":error.message
            });
        }
    };

    participantList = async (req, response) => {
        try {
            const data = await participant.listParticipant(req,response);
            return response.send({
                "status" : 200,
                "message" : error.message,
                "data" : data,
            });

        } catch (error) {
            response.status(500).json({
                message: error.message
            });
        }
    };

    participantShow = async (req, response) => {
        try {
            const data = await participant.idParticipant(req,response);
            response.send(data);
        } catch (error) {
            response.status(500).json({
                message: error.message
            });
        }
    };

    participantFilterName = async (req,response) => {
        try {
            const data = await  participant.filterParticipantName(req,response);
            response.send(data);
        } catch (error) {
            response.status(500).json({
                "message" : error.message
            });
        }
    };

    participantFilterIdentification = async (req,response) => {
        try {
            const data = await participant.filterIdentification(req,response);
            response.send(data);
        } catch (error) {
            response.send({
                "status" : "404",
                "message" : error.message
            });
        };
    };
};

export default PartakerController;