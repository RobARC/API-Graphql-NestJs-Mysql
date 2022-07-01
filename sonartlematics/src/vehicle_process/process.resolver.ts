import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Process } from './process.entity';
import { ProcessService } from './process.service';
import { CreateProInput } from './dto/create-process.input';

@Resolver(() => Process)
export class ProcessResolver {
  constructor(private ProcessService: ProcessService) {}

  @Query(() => [Process])
  process(): Promise<Process[]> {
    return this.ProcessService.findAll();
  }

  @Query(() => Process, { name: 'process_id' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ProcessService.findOne(id);
  }

  @Mutation(() => Process)
  async createProcess(
    @Args('createProInput') createProInput: CreateProInput,
  ): Promise<Process> {
    const newProcess = this.ProcessService.createProcess(createProInput);
    return await newProcess;
  }

  @Mutation(() => Process)
  async deleteProcess(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Process> {
    await this.ProcessService.deletePro(id);
    return;
  }
}
