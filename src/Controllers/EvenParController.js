import  EvenParModel from "../Models/EvenParModel.js";

const evenPar = new EvenParModel()

class EvenParController {

    evenParCreate = async (req,response) => {
        try {
            const res = await evenPar.createJoint(req,response);
            response.send(res);
        } catch (error) {
            response.send({
                "status" : 404,
                "message":error.message
            });
        }
    };
}

export default EvenParController;

