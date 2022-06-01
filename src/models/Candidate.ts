import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default, HasMany, HasOne} from "sequelize-typescript";
import { Election } from "./Election";
import { User } from "./User";

@Table
export class Candidate extends Model<Candidate>{

    @ForeignKey(()=> User)
    @Column
    userId: number;

    @Column
    watchword: string;

    @ForeignKey(()=> Election)
    @Column
    positionId: number;

    @Default(0)
    @Column
    isApproved: number;

    @Column
    approvedAt: Date;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}