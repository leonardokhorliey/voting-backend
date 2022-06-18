import { injectable } from "tsyringe";
import { Controller } from ".";
import { VoteService } from "../services/vote.service";

@injectable()
class VoteController extends Controller {
    constructor(
        private voteService: VoteService
      ) {
        super();
      }
   
    sendVote = async(req, res)=>{
        let response = await this.voteService.addVote(req.body);
        return this.response(res, 201, false, response, "Created successfully");

    }
    

    getCandidateVotesCount = async(req, res)=>{
        try{
            let { candidateId } = req.body;
            let response = await this.voteService.getCandidatesVoteCount(candidateId);
            return this.response(res, 200, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    
    }



}

export default VoteController;