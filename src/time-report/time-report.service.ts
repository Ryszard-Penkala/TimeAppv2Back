import { Injectable } from '@nestjs/common';
import { getAllUsersReportResponse, getCurrentUserReportResponse } from "../../types/time-report/time-report.entity";
import { TimeRegistrationTaskInterface } from '../../types';
import { TimeRegistrationTask } from '../time-registration/time-registration-task.entity';
import { User } from '../user/user.entity';

@Injectable()
export class TimeReportService {

  async getId(user: User): Promise<string> {
    return JSON.stringify(user.id);
  }

  async getAllTasks(): Promise<TimeRegistrationTask[]> {
    return await TimeRegistrationTask.find({
      select: {
        id: true,
        daysOfEffort: true,
        minutesOfEffort: true,
        taskDescription: true,
        startedAt: true,
        affectedUser: {
          id: true,
        },
      },
      relations: ['affectedUser'],
    });
  }

  async getCurrentUserReport(
    userId: string,
  ): Promise<TimeRegistrationTaskInterface[]> {
    return await TimeRegistrationTask.find({
      select: {
        id: true,
        daysOfEffort: true,
        minutesOfEffort: true,
        taskDescription: true,
        startedAt: true,
        affectedUser: {
          id: true,
        },
      },
      relations: ['affectedUser'],
      where: {
        affectedUser: {
          id: userId,
        },
      },
    });
  }
}
