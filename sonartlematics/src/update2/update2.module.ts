import { Module } from '@nestjs/common';
import { Updates2 } from './entities/update2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Update2Service } from './update2.service';
import { Update2Resolver } from './update2.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Updates2])],
  providers: [Update2Resolver, Update2Service],
  exports: [Update2Service],
})
export class Update2Module {}
