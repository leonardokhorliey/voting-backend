import express, { Router } from "express";

import {container} from "tsyringe";
import  VoteController from "../controller/vote.controller"
import { VoteDto } from "../transfer-objects/vote.dto";
import { validation } from "../middleware/validation";
const voteController: any = container.resolve(VoteController)

const VoteRouter : Router = express.Router();

VoteRouter.post('/register', validation(VoteDto), voteController.sendVote);

export default VoteRouter;