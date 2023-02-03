import { response } from "express";
import  EventModel from "../Models/EventModel.js";

const event = new EventModel()

class ControllerEvent {

    eventCreate = async (req,response) => {
        try {
            const res = await event.createEvent(req,response );
            response.send(res);
        } catch (error) {
            response.send({
                "status" : 404,
                "message":error.message
            });
        };
    };

    listEvent = async (req, response) => {
        try {
            const res = await event.listEvent(req,response);
            response.send(res);
        } catch (error) {
            response.status(500).json({
                message: error.message
            });
        };
    };

    showEvent = async (req, response) => {
        try {
            const res = await event.idEvent(req,response);
            response.send(res);
        } catch (error) {
            response.status(500).json({
                message: error.message
            });
        };
    };

    filterEventTitle = async (req,response) => {
        try {
            const data = await  event.filterEventTitle(req,response);
            response.send(data);
        } catch (error) {
            response.status(500).json({
                "message" : error.message
            });
        };
    };

    filterEventTheme = async (req,response) => {
        try {
            const data = await event.filterEventTheme(req,response);
            response.send(data);
        } catch (error) {
            response.send({
                "status" : 409,
                "message" : error.message
            });
        };
    };


    filterEventYear = async (req, response) => {
        try {
            const data = await event.filterEventYear(req, response);
            response.send(data);
        } catch (error) {
            response.send({
                "status" : 404,
                "message" : error.message
            });
        };
    };

    // filterEventYearElderly = async (req,response) => {
    //     try {
    //         const data = await event.filterEventYearElderly(req,response);
    //         response.send(data);
    //     } catch (error) {
    //         response.send({
    //             "status" : 404,
    //             "message" : error.message
    //         });
    //     };
    // };

    // filterEventYearMinor = async (req,response) => {
    //     try {
    //         const data = event.filterEventYearMinor(req,response);
    //         response.send(data);
    //     } catch (error) {
    //         response.send({
    //             "status" : 404,
    //             "message" : error.message
    //         });
            
    //     };
    // };
};

export default ControllerEvent;