import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Update2Service } from './update2.service';
import { Updates2 } from './entities/update2.entity';
import { CreateUpdate2Input } from './dto/create-update2.input';
import { UpdateUpdate2Input } from './dto/update-update2.input';

@Resolver(() => Updates2)
export class Update2Resolver {
  constructor(private readonly update2Service: Update2Service) {}

  @Mutation(() => Updates2)
  createUpdate2(
    @Args('createUpdate2Input') createUpdate2Input: CreateUpdate2Input,
  ) {
    return this.update2Service.create(createUpdate2Input);
  }

  @Query(() => [Updates2], { name: 'update' })
  findAll() {
    return this.update2Service.findAll();
  }

  @Query(() => Updates2, { name: 'update2' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.update2Service.findOne(id);
  }

  @Mutation(() => Updates2)
  updateUpdate2(
    @Args('updateUpdate2Input') updateUpdate2Input: UpdateUpdate2Input,
  ) {
    return this.update2Service.update(
      updateUpdate2Input.id,
      updateUpdate2Input,
    );
  }

  @Mutation(() => Updates2)
  removeUpdate2(@Args('id', { type: () => Int }) id: number) {
    return this.update2Service.remove(id);
  }
}
