import {pool} from "../../db.js"

class EventModel {

    createEvent = async (req, response) => {
        
        const {title, theme, description, start_date ,final_date} = req.body;
        const [rows] = await pool.query("INSERT INTO events (title,theme, description, start_date, final_date) VALUES (?,?,?,?,?)", [title,theme,description,start_date,final_date]);
        return ({"data" : rows});

    };

    listEvent = async(req,response) => {
        
        const [data] = await pool.query("SELECT * FROM events",)
        if (data.length <= 0)
        response.send({
            "status" : 404,
            "message": error.message
        })
        response.send({data});
    };
    
    idEvent = async (req,response)=>{
        const [data] = await pool.query("SELECT * FROM events WHERE id = ?",[req.params.id])
        if (data.length <= 0)
        response.send({
            "status" : 202,
            "message" : error.message
        })
        response.send({data})    
    };

    filterEventTitle = async (req,response) => {

        const {title} = req.body
        const [dato] = await pool.query("SELECT * FROM events WHERE title = ?", [title]);
            if(dato.length <= 0)
            response.status({
                "status" : 404,
                "message" : error.message
        });
        return({dato});
    };

    filterEventTheme = async(req,response) => {

        const {theme} = req.params
        const [rows] = await pool.query(" SELECT * FROM events WHERE theme = ?; ",[theme]);
        if(rows.length <= 0)
        response.send({
            "status" : 404,
            "message" : error.message
        });
        return ({rows});
    };

    filterEventYear = async (req,response) => {

        const {year} = req.params
        const [dato] = await pool.query("SELECT * FROM events WHERE year(start_date)=?;", [year]);
        return (dato);
    };

    // filterEventYearElderly = async(req,response)=>{
    //     const [rows] = await pool.query("SELECT start_date FROM events ORDER BY start_date DESC")
    //     return(rows)
    // };
    
    // filterEventYearMinor = async(req,response)=>{
    //     const [rows] = await pool.query("SELECT start_date FROM events ORDER BY start_date ASC")
    //     return (rows,title)
    // };
};

export default EventModel;