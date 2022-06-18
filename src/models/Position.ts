import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default, HasMany, HasOne} from "sequelize-typescript";
import { Election } from "./Election";

@Table
export class Position extends Model<Position>{

    @Column
    name: string;

    @Column
    description: string;

    @Column
    candidate_threshold: number;
    
    @ForeignKey(()=> Election)
    @Column
    election_id: number;

    @Default(1)
    @Column
    isContestable: number;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}