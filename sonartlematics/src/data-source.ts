import { DataSource } from 'typeorm';
import { Vehicles } from './vehicles/vehicles.entity';
import { Process } from './vehicle_process/process.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '$ofiaM1602',
  database: 'sonar_telematics',
  synchronize: true,
  logging: true,
  entities: [Vehicles, Process],
  subscribers: [],
  migrations: [],
});
