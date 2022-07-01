import { Module } from '@nestjs/common';
import { VehiclesResolver } from './vehicles.resolver';
import { VehiclesService } from './vehicles.service';
import { Vehicles } from './vehicles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleProcessModule } from '../vehicle_process/process.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicles]), VehicleProcessModule],
  providers: [VehiclesResolver, VehiclesService],
})
export class VehiclesModule {}
