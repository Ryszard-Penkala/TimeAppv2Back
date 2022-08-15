import { Test, TestingModule } from '@nestjs/testing';
import { TimeRegistrationService } from './time-registration.service';

describe('TimeRegistrationService', () => {
  let service: TimeRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeRegistrationService],
    }).compile();

    service = module.get<TimeRegistrationService>(TimeRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
