import { Injectable } from '@nestjs/common';
import { TimeRegistrationTask } from './time-registration-task.entity';
import { TimeRegistrationTaskInterface } from '../../types/time-registration/time-registration-task.entity';

@Injectable()
export class TimeRegistrationService {
  constructor() {}
  //
  async getAllTasks(): Promise<TimeRegistrationTaskInterface[]> {
    return await TimeRegistrationTask.find();
  }

  async startNewTask(): Promise<TimeRegistrationTask> {
    const newTask = new TimeRegistrationTask();
    newTask.taskDescription = 'nowy task';
    newTask.startedAt = new Date();
    newTask.daysOfEffort = 13;
    newTask.minutesOfEffort = 254;

    await newTask.save();
    return newTask;
  }

  async deleteStartedTask(id: string): Promise<string> {
    await TimeRegistrationTask.delete(id);

    return `Task o ${id} został zdeletowany`;
  }
}
