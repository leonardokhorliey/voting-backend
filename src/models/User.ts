import {Model, Column, Table, CreatedAt, UpdatedAt, Default, HasMany, HasOne} from "sequelize-typescript";
import bcrypt from "bcrypt";


@Table
export class User extends Model<User> {
  [x: string]: any;

  @Column
  firstname: string;
  
  @Column
  lastname: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  voterId: string;

  @Column
  set password(value: string) {
    let hash = bcrypt.hashSync(value, 8)
    this.setDataValue('password', hash)
  }

  @Column
  token: string;
  
  @Default(1)
  @Column
  status: number;

  @Default(0)
  @Column
  is_verified: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}