import { Test, TestingModule } from '@nestjs/testing';
import { TimeRegistrationController } from './time-registration.controller';

describe('TimeRegistrationController', () => {
  let controller: TimeRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeRegistrationController],
    }).compile();

    controller = module.get<TimeRegistrationController>(TimeRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
