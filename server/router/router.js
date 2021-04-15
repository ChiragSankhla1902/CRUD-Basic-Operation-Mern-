import express from "express";
import {getDet,createDet,updateDet} from "../Controller/controller.js";

const route = express.Router();

route.get('/',getDet);
route.post('/contactus',createDet);
route.patch('/:id', updateDet);

export default route;