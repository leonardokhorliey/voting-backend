import express, { Router } from "express";

import {container} from "tsyringe";
import ElectionController from "../controller/election.controller";
import { ElectionDto } from "../transfer-objects/election.dto";
import { validation } from "../middleware/validation";
const electionController: any = container.resolve(ElectionController);

const ElectionRouter : Router = express.Router();

ElectionRouter.post('/create', validation(ElectionDto), electionController.createElection);
ElectionRouter.get('/?position_id=:position_id', validation(ElectionDto), electionController.getElections);
ElectionRouter.put('/:id/update-phase', validation(ElectionDto), electionController.updateElectionPhase);

export default ElectionRouter;