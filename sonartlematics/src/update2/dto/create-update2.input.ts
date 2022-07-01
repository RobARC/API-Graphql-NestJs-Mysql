import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Process } from '../../vehicle_process/process.entity';

@InputType()
export class CreateUpdate2Input {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  id_process: Process['id'];

  @Field(() => String)
  last_state: string;

  @Field(() => String)
  comment: string;

  @Field(() => Date)
  created_at: Date;
}
