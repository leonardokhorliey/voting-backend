import { injectable } from "tsyringe";
import { Controller } from ".";
import { ElectionService } from "../services/election.service";

@injectable()
class ElectionController extends Controller {
    constructor(
        private electionService: ElectionService
      ) {
        super();
      }
   
    createElection = async(req, res)=>{
        let response = await this.electionService.addElection(req.body);
        return this.response(res, 201, false, response, "Created successfully");

    }
    

    getElections = async(req, res)=>{
        try{
            let response = await this.electionService.getAllElections();
            return this.response(res, 200, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    
    }

    updateElectionPhase = async(req, res) => {
        try{
            let { electionId, newElectionPhase } = req.body;
            let response = await this.electionService.setElectionPhase(electionId, newElectionPhase);
            return this.response(res, 201, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    }




}

export default ElectionController;