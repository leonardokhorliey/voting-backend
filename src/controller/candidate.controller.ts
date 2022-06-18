import { injectable } from "tsyringe";
import { Controller } from ".";
import { CandidateService } from "../services/candidate.service";

@injectable()
class CandidateController extends Controller {
    constructor(
        private candidateService: CandidateService
      ) {
        super();
      }
   
    createCandidate = async(req, res)=>{
        let response = await this.candidateService.addCandidate(req.body);
        return this.response(res, 201, false, response, "Created successful");

    }
    

    getCandidatesByPosition = async(req, res)=>{
        try{
            let position = req.body.positionId;
            let response = await this.candidateService.fetchCandidatesByPosition(position)
            return this.response(res, 200, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    
    }

    approveCandidate = async(req, res) => {
        try{
            let candidate = req.body.candidateId;
            let response = await this.candidateService.approveCandidate(candidate)
            return this.response(res, 201, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    }




}

export default CandidateController;