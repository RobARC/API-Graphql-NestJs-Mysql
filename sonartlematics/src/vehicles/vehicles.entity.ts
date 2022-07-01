import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ProcessResolver } from 'src/vehicle_process/process.resolver';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CustomUuidScalar } from '../uuid-scalar';

@Entity()
@ObjectType()
export class Vehicles {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => String)
  @Column()
  placa: string;

  @Field(() => CustomUuidScalar)
  @Column()
  codigo: string;

  @Field()
  @Column()
  @CreateDateColumn()
  fecha_registro: Date;
}
