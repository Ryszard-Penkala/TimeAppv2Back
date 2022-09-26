import { Controller, Get, Inject, Param, UseGuards } from "@nestjs/common";
import { TimeReportService } from './time-report.service';
import { TimeReportInterface } from '../../types/time-report/time-report.entity';
import { AuthGuard } from "@nestjs/passport";

@Controller('time-report')
export class TimeReportController {
  @Inject(TimeReportService) private timeReportService: TimeReportService;

  @Get('/')
  getHello(): string {
    return this.timeReportService.getHello();
  }

  @Get('/all-users')
  // @UseGuards(AuthGuard('jwt'))
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
