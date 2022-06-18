import express, { Router } from "express";

import {container} from "tsyringe";
import CandidateController from "../controller/candidate.controller";
import { CandidateDto } from "../transfer-objects/candidate.dto";
import { validation } from "../middleware/validation";
const candidateController: any = container.resolve(CandidateController);

const CandidateRouter : Router = express.Router();

CandidateRouter.post('/create', validation(CandidateDto), candidateController.createCandidate);
CandidateRouter.get('/?position_id=:position_id', validation(CandidateDto), candidateController.getCandidatesByPosition);
CandidateRouter.put('/:id/update', validation(CandidateDto), candidateController.approveCandidate);

export default CandidateRouter;