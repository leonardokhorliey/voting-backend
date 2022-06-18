import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
 
} from 'sequelize-typescript'

@Table
export class Otp extends Model<Otp> {
  [x: string]: any
  @Column
  code: string

  @Column
  email: string

  @Column
  phone: string

  @Column
  expiration_time: Date

  @Column
  purpose: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
