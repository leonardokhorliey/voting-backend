import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default, HasMany, HasOne} from "sequelize-typescript";
import { User } from "./User";

@Table
export class Election extends Model<Election>{

    @Column
    deviceType: string;

    @Column
    operatingSystem: string;

    @Column
    source: string;

    @Column
    
    
    @ForeignKey(()=> User)
    @Column
    userId: number;

    @Default(0)
    @Column
    isSuccessful: number;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}