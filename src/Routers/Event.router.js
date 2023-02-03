import {Router} from "express";
import ControllerEvent from "../Controllers/EventController.js"

const EventRouter = Router();
const Controller = new ControllerEvent();

//CREATE AN EVENT()
EventRouter.post('/events',Controller.eventCreate);

//LIST ALL EVENTS
EventRouter.get('/events', Controller.listEvent);

//SHOW A SINGLE EVENT
EventRouter.get('/events/:id', Controller.showEvent);

//SEARCH FILTER TITLE
EventRouter.post('/events/filter/title', Controller.filterEventTitle);

//SEARCH FILTER THEME
EventRouter.get('/events/filter/theme/:theme', Controller.filterEventTheme);

//SEARCH FILTER YEAR
EventRouter.get('/events/filter/year/:year',Controller.filterEventYear);


//SEARCH  BY OLD DATE
// EventRouter.get('/events/filter/:elderly' ,Controller.filterEventYearElderly);

//SEARCH BY DATE YOUNG
// EventRouter.post('/events/filter/minor' , Controller.filterEventYearMinor);
export default EventRouter;