import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path/win32';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehicleProcessModule } from './vehicle_process/process.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomUuidScalar } from './uuid-scalar';
//import { CustomDateScalar } from './date-scalar';
import { Update2Module } from './update2/update2.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      resolvers: { UUID: CustomUuidScalar }, //Date_Scalar: CustomDateScalar },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'sonar_telematics',
      entities: ['dist/**/*.entity{.ts,.js}'],
      port: 3306,
      username: 'root',
      password: '$ofiaM1602',
      logging: true,
      synchronize: true,
    }),
    VehiclesModule,
    VehicleProcessModule,
    Update2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
