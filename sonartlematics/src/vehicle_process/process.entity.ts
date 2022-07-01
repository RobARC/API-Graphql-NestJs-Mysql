import { Field, ObjectType, Int, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Vehicles } from '../vehicles/vehicles.entity';

export enum Process_Status {
  Request = 'Request',
  Approved = 'Approved',
  In_process = 'In_process',
  Ended = 'Ended',
}

@Entity()
@ObjectType()
export class Process {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field(() => Int)
  id_vehicle: number;

  @Column()
  @Field(() => String)
  process: string;

  @Column()
  @Field(() => String)
  desc_process: string;

  @Field(() => String)
  @Column({
    type: 'enum',
    enum: Process_Status,
    default: Process_Status.Request,
  })
  processStatus: Process_Status;

  @Field()
  @Column()
  @CreateDateColumn()
  process_created_at: Date;

  @Field()
  @Column(() => Date)
  @CreateDateColumn()
  last_update: Date;
}
