import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { Process } from '../../vehicle_process/process.entity';

export enum Updates_Status {
  Request = 'Request',
  Approved = 'Approved',
  In_process = 'In_process',
  Ended = 'Ended',
}

@Entity()
@ObjectType()
export class Updates2 {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Process, { cascade: true })
  @JoinColumn({ name: 'id_process' })
  id_process: Process['id'];

  @Field(() => String)
  @Column({
    type: 'enum',
    enum: Updates_Status,
    default: Updates_Status.Request,
  })
  last_state: string;

  @Column()
  @Field(() => String)
  comment: string;

  @Column()
  @Field()
  @CreateDateColumn()
  create_at: Date;
}
