import { Test, TestingModule } from '@nestjs/testing';
import { BikeLocationService } from './bike-location.service';

describe('BikeLocationService', () => {
  let service: BikeLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikeLocationService],
    }).compile();

    service = module.get<BikeLocationService>(BikeLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
