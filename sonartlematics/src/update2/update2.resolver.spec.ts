import { Test, TestingModule } from '@nestjs/testing';
import { Update2Resolver } from './update2.resolver';
import { Update2Service } from './update2.service';

describe('Update2Resolver', () => {
  let resolver: Update2Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Update2Resolver, Update2Service],
    }).compile();

    resolver = module.get<Update2Resolver>(Update2Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
