import { Repository } from "../repository";
import { Candidate } from "../models/Candidate";
import { sequelize } from "../../sequelize";

export class CandidateService extends Repository<Candidate>{
    constructor() {
        super(Candidate);
    }

    public addCandidate = async (candidateData) => {
        return await this.create(candidateData);
    }

    public fetchCandidates = async () => {
        return await this.findAll();
    }

    public fetchCandidatesByPosition = async (positionId : number) => {
        let candidates = await sequelize.query(
            `SELECT Candidates.*, count(Votes.id) FROM Candidates JOIN Votes
            ON Candidates.id = Votes.candidate_id
            WHERE position_id=:position_id GROUP BY Candidates.id`,
            {
                replacements: {position_id: positionId}
            }
        )

        return candidates[0].length === 0 ? null : candidates[0];
    }

    public approveCandidate = async (candidateId: number) => {
        return await sequelize.query(
            `UPDATE TABLE Candidates SET isApproved = 1 WHERE id = :candidate_id`,
            {
                replacements: {candidate_id : candidateId}
            }
        )
    }
}
