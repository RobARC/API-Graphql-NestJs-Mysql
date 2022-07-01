import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUpdate2Input } from './dto/create-update2.input';
import { UpdateUpdate2Input } from './dto/update-update2.input';
import { Updates2 } from './entities/update2.entity';

@Injectable()
export class Update2Service {
  constructor(
    @InjectRepository(Updates2)
    private updates2Repository: Repository<Updates2>,
  ) {}

  async create(createUpdate2Input: CreateUpdate2Input): Promise<Updates2> {
    const newUpdates2 = this.updates2Repository.create(createUpdate2Input);
    return this.updates2Repository.save(newUpdates2);
  }

  async findAll(): Promise<Updates2[]> {
    return await this.updates2Repository.find();
  }

  async findOne(id: number): Promise<Updates2> {
    return await this.updates2Repository.findOne({ where: { id: id } });
  }

  update(id: number, updateUpdate2Input: UpdateUpdate2Input) {
    return `This action updates a #${id} update2`;
  }

  remove(id: number) {
    return `This action removes a #${id} update2`;
  }
}
