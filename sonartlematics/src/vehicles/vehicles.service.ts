import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicles } from './vehicles.entity';
import { Process } from '../vehicle_process/process.entity';
import { CreateVehInput } from './dto/create-vehicle.input';
import { ProcessService } from '../vehicle_process/process.service';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicles)
    private vehiclesRepository: Repository<Vehicles>,
    private ProcessService: ProcessService, //private processService: ProcessService,
  ) {}

  async findAll(): Promise<Vehicles[]> {
    return await this.vehiclesRepository.find();
  }

  async findOne(id: number): Promise<Vehicles> {
    return await this.vehiclesRepository.findOne({ where: { id: id } });
  }

  getProcess(process_id: number): Promise<Process> {
    return this.ProcessService.findOne(process_id);
  }

  async createVehicle(createVehInput: CreateVehInput): Promise<Vehicles> {
    const newVehicle = this.vehiclesRepository.create(createVehInput);

    return this.vehiclesRepository.save(newVehicle);
  }

  //async getProcess(id: number): Promise<Process> {
  //  return await this.processService.findOne(id);
  //}
}
