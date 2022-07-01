import { CreateUpdate2Input } from './create-update2.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUpdate2Input extends PartialType(CreateUpdate2Input) {
  @Field(() => Int)
  id: number;
}
