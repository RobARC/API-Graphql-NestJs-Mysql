import { InputType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Process_Status } from '../process.entity';
import { Vehicles } from 'src/vehicles/vehicles.entity';
import { Process } from '../process.entity';

@InputType()
export class CreateProInput {
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  id_vehicle: number;

  @Field(() => String)
  process: string;

  @Field(() => String)
  desc_process: string;

  @Field(() => String)
  processStatus: Process_Status;

  @Field(() => Date)
  process_created_at: Date;

  @Field(() => Date)
  last_update: Date;
}
