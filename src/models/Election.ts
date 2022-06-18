import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default, HasMany, HasOne} from "sequelize-typescript";
import { User } from "./User";

@Table
export class Election extends Model<Election>{

    @Column
    key: string;

    @Column
    name: string;

    @Column
    description: string;
    
    @ForeignKey(()=> User)
    @Column
    adminId: number;

    @Default(0)
    @Column
    electionPhase: number;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}