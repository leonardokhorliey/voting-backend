import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default, HasMany, HasOne} from "sequelize-typescript";
import { User } from "./User";
import { Election } from "./Election";
import { Candidate } from "./Candidate";


@Table
export class Vote extends Model<Vote>{
    @ForeignKey(() => User)
    @Column
    voterId: number;

    @ForeignKey(()=> Candidate)
    @Column
    electionId: Candidate;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}