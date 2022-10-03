import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { TimeReportInterface } from '../../types/time-report/time-report.entity';
import { AuthGuard } from '@nestjs/passport';
import { TimeRegistrationTask } from '../time-registration/time-registration-task.entity';

@Controller('time-report')
export class TimeReportController {
  @Inject(TimeReportService) private timeReportService: TimeReportService;

  @Get('/')
  getHello(): string {
    return this.timeReportService.getHello();
  }

  @Get('/all-users')
  @UseGuards(AuthGuard('jwt'))
  getAllTasks(): Promise<TimeRegistrationTask[]> {
    return this.timeReportService.getAllTasks();
  }

  @Get('/:id')
  getCurrentUserReport(
    @Param('id') id: string
  ): TimeReportInterface[] | [] {
    return this.timeReportService.getCurrentUserReport(id);
  }
}
