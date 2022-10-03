import { Controller, Delete, Get, Inject, Param, Post, Redirect, UseGuards } from "@nestjs/common";
import { TimeRegistrationService } from './time-registration.service';
import { startNewTaskResponse, TimeRegistrationTaskInterface } from "../../types/time-registration/time-registration-task.entity";
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';

@Controller('time-registration')
export class TimeRegistrationController {
  constructor(
    @Inject(TimeRegistrationService)
    private readonly timeRegistrationService: TimeRegistrationService,
  ) {}

  // @Get('/')
  // @UseGuards(AuthGuard('jwt'))
  // getAllTasks(@UserObj() user: User): Promise<TimeRegistrationTaskInterface[]> {
  //   return this.timeRegistrationService.getAllTasks();
  // }

  @Post('/')
  startNewTask(): Promise<startNewTaskResponse> {
    return this.timeRegistrationService.startNewTask();
  }

  @Delete('/:id')
  deleteStartedTask(
    @Param('id') id: string
  ): Promise<string> {
    return this.timeRegistrationService.deleteStartedTask(id);
  }
}
