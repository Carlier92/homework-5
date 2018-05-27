// src/pages/entity.ts
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsIn } from 'class-validator'
import {colors} from './controller'

const boardDefault = {board:[['o', 'o', 'o'], ['o', 'o', 'o'], ['o', 'o', 'o']]}

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsIn(colors, {message: "Already had this one."})
  @Column('text', {nullable:false})
  color: string

  @Column('json', {nullable:false, default: boardDefault })
  board: {board: string[][]}

}
