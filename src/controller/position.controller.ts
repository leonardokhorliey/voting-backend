import { injectable } from "tsyringe";
import { Controller } from ".";
import { PositionService } from "../services/position.service";

@injectable()
class PositionController extends Controller {
    constructor(
        private positionService: PositionService
      ) {
        super();
      }
   
    createPosition = async(req, res)=>{
        let response = await this.positionService.addPosition(req.body);
        return this.response(res, 201, false, response, "Created successfully");

    }
    

    getPositionsByElection = async(req, res)=>{
        try{
            let { electionId } = req.body
            let response = await this.positionService.fetchPositionsByElection(electionId);
            return this.response(res, 200, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    
    }

}

export default PositionController;