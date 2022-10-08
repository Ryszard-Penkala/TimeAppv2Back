import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { TimeReportInterface } from '../../types/time-report/time-report.entity';
import { AuthGuard } from '@nestjs/passport';
import { TimeRegistrationTask } from '../time-registration/time-registration-task.entity';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';

@Controller('time-report')
export class TimeReportController {
  @Inject(TimeReportService) private timeReportService: TimeReportService;

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getId(
    @UserObj() user: User,
  ): Promise<string> {
    return this.timeReportService.getId(user);
  }

  @Get('/all-users')
  @UseGuards(AuthGuard('jwt'))
  getAllTasks(): Promise<TimeRegistrationTask[]> {
    return this.timeReportService.getAllTasks();
  }

  @Get('/:id')
  getCurrentUserReport(
    @Param('id') id: string,
    @UserObj() user: User,
  ): TimeReportInterface[] | [] {
    return this.timeReportService.getCurrentUserReport(id);
  }
}
