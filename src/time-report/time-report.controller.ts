import { Controller, Get, Inject, Param } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { TimeReportInterface } from '../../types/time-report/time-report.entity';

@Controller('time-report')
export class TimeReportController {
  @Inject(TimeReportService) private timeReportService: TimeReportService;

  @Get('/')
  getHello(): string {
    return this.timeReportService.getHello();
  }

  @Get('/all-users')
  getAllUsersReport(): TimeReportInterface[] {
    return this.timeReportService.getAllUsersReport();
  }

  @Get('/:id')
  getCurrentUserReport(
    @Param('id') id: string
  ): TimeReportInterface[] | [] {
    return this.timeReportService.getCurrentUserReport(id);
  }
}
