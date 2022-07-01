import { Test, TestingModule } from '@nestjs/testing';
import { Update2Service } from './update2.service';

describe('Update2Service', () => {
  let service: Update2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Update2Service],
    }).compile();

    service = module.get<Update2Service>(Update2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
