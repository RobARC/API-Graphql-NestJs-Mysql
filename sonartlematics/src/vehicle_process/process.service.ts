import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Process } from './process.entity';
import { CreateProInput } from './dto/create-process.input';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(Process)
    private processRepository: Repository<Process>,
  ) {}
  async findAll(): Promise<Process[]> {
    console.log(this.processRepository.find());
    return await this.processRepository.find();
  }

  async findOne(id: number): Promise<Process> {
    return await this.processRepository.findOne({ where: { id: id } });
  }

  async createProcess(createProInput: CreateProInput): Promise<Process> {
    const newProcess = this.processRepository.create(createProInput);

    return this.processRepository.save(newProcess);
  }
  async deletePro(id: number): Promise<Process> {
    await this.processRepository.delete(id);
    return;
  }
}
