import { response } from "express";
import {pool} from "../../db.js"

class PartakerModel {

    createParticipant = async (req, response) => {

        const {name, identification, age} = req.body;
        const [rows] = await pool.query("INSERT INTO participants (name, identification, age) VALUES (?,?,?)", [name, identification, age]);
        return ({"data" : rows})
    };

    listParticipant = async(req,response) => {

        const [data] = await pool.query("SELECT * FROM participants")
        if (data.length <= 0)
        response.send({
            "status" : 202,
            "message": error.message,
        })
        return data
    };
    
    idParticipant = async (req,response)=>{
        
        const [data] = await pool.query("SELECT * FROM participants WHERE id = ?",[req.params.id])
            if (data.length <= 0)
            response.send({
                "status" : 202,
                "message": error.message,
            });
            return (data)
    };


    filterParticipantName = async (req,response) => {

        const {name} = req.body
        const [dato] = await pool.query("SELECT * FROM participants WHERE name = ?", [name]);
            if(dato.length <= 0)
            response.status({
                "status" : 404,
                "message" : error.message
        });
        return({dato});
    };

    filterIdentification = async(req,res) => {
        const {identification} = req.params
        const [rows] = await pool.query(" SELECT * FROM participants WHERE identification = ?; ",[identification]);
        if(rows.length <= 0)
        response.send({
            "status" : 404,
            "message" : error.message
        });
        return rows[0];
    };
};

export default PartakerModel;
