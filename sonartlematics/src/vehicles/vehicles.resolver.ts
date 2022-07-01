import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Vehicles } from './vehicles.entity';
import { VehiclesService } from './vehicles.service';
import { CreateVehInput } from './dto/create-vehicle.input';
import { Process } from '../vehicle_process/process.entity';

@Resolver((of) => Vehicles)
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) {}

  @Query(() => [Vehicles])
  vehicles(): Promise<Vehicles[]> {
    return this.vehiclesService.findAll();
  }
  @Query(() => Vehicles)
  async Vehicle(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Vehicles> {
    return this.vehiclesService.findOne(id);
  }

  @ResolveField(() => Process)
  proces(@Parent() proces: Process): Promise<Process> {
    return this.vehiclesService.getProcess(proces.id);
  }

  @Mutation(() => Vehicles)
  createVehicle(
    @Args('createVehInput') createVehInput: CreateVehInput,
  ): Promise<Vehicles> {
    return this.vehiclesService.createVehicle(createVehInput);
  }
}
