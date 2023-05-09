import { Test, TestingModule } from '@nestjs/testing';
import { BikeLocationController } from './bike-location.controller';

describe('BikeLocationController', () => {
  let controller: BikeLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikeLocationController],
    }).compile();

    controller = module.get<BikeLocationController>(BikeLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
