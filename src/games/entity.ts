// src/pages/entity.ts
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'

const boardDefault = {board:[['o', 'o', 'o'], ['o', 'o', 'o'], ['o', 'o', 'o']]}

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @Column('text', {nullable:false})
  color: string

  @Column('json', {nullable:false, default: boardDefault })
  board: {board: string[][]}

}
