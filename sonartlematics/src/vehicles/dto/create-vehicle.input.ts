import { InputType, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { CustomUuidScalar } from '../../uuid-scalar';
//import { Process } from '../../vehicle_process/process.entity';

@InputType()
export class CreateVehInput {
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  placa: string;

  @Field(() => CustomUuidScalar)
  codigo: string;

  @Field(() => Date)
  fecha_registro: Date;
}
