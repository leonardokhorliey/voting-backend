import express, { Router } from "express";

import {container} from "tsyringe";
import  PositionController from "../controller/position.controller"
import { PositionDto } from "../transfer-objects/position.dto";
import { validation } from "../middleware/validation";
const positionController: any = container.resolve(PositionController)

const PositionRouter : Router = express.Router();

PositionRouter.post('/create', validation(PositionDto), positionController.createPosition);
PositionRouter.get('/getPositions/?election_id=:election_id', validation(PositionDto), positionController.getPositionsByElection);

export default PositionRouter;