import { Test, TestingModule } from '@nestjs/testing';
import { TimeReportController } from './time-report.controller';

describe('TimeReportController', () => {
  let controller: TimeReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeReportController],
    }).compile();

    controller = module.get<TimeReportController>(TimeReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
