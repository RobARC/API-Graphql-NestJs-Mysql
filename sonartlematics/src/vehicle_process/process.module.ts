import { Module } from '@nestjs/common';
import { Process } from './process.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessService } from './process.service';
import { ProcessResolver } from './process.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Process])],
  providers: [ProcessService, ProcessResolver],
  exports: [ProcessService],
})
export class VehicleProcessModule {}
