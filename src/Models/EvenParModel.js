import {pool} from "../../db.js"

class EvenParModel{

    createJoint = async (req,response) => {
        const {part_id,even_id} = req.body;
        const [rows] = await pool.query("INSERT INTO part_even (part_id,even_id) VALUES (?,?)", [part_id,even_id]);
        return ({"data" : rows});
    };
};

export default EvenParModel;