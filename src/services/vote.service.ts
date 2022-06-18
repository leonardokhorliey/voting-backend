import { Repository } from "../repository";
import { sequelize } from "../../sequelize";
import { Vote } from "../models/Vote";

export class VoteService extends Repository<Vote> {
    constructor() {
        super(Vote)
    }

    public addVote = async (data) => {
        return await this.create(data);
    }

    public getCandidatesVoteCount = async (candidateId: number) => {
        let voteCount = await sequelize.query(
            `SELECT COUNT(*) FROM Votes WHERE candidate_id=:candidate_id`,
            {
                replacements: {candidate_id: candidateId}
            }
        )
    }
}