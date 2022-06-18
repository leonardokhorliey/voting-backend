import { Repository } from "../repository";
import { sequelize } from "../../sequelize";
import { Position } from "../models/Position";

export class PositionService extends Repository<Position> {
    constructor() {
        super(Position)
    }

    public addPosition = async (data) => {
        return await this.create(data);
    }

    public fetchPositions = async () => {
        return await this.findAll();
    }

    public fetchPositionsByElection = async (electionId: number) => {
        return await sequelize.query(
            `SELECT * FROM Positions WHERE election_id= :electionId`,
            {
                replacements: { electionId }
            }
        )
    }

    
}