import { Repository } from "../repository";
import { sequelize } from "../../sequelize";
import { Election } from "../models/Election";


export class ElectionService extends Repository<Election>{
    constructor() {
        super(Election)
    }

    public addElection = async (data) => {
        return await this.create(data);
    }

    public getAllElections = async () => {
        return await this.findAll();
    }

    private fetchElectionPhase = async (electionId: number) => {
        let election = await this.findOne({
            where: {
                id: electionId
            },
        })
        return election.electionPhase;
    }

    public setElectionPhase = async (electionId: number, newPhase: number) => {
        let currentPhase = await this.fetchElectionPhase(electionId);

        if (newPhase === currentPhase + 1) {
            return await sequelize.query(
                `UPDATE TABLE Elections SET electionPhase = :newPhase WHERE id = :electionId`,
                {
                    replacements: {
                        newPhase : newPhase,
                        electionId : electionId
                    }
                }
            )
        }
        return 0;
    }
}