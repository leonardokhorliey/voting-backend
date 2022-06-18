import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default, HasMany, HasOne} from "sequelize-typescript";
import { User } from "./User";
import { Candidate } from "./Candidate";


@Table
export class Vote extends Model<Vote>{
    @ForeignKey(() => User)
    @Column
    voter_id: number;

    @ForeignKey(()=> Candidate)
    @Column
    candidate_id: number;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}