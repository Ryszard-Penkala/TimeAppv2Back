import { Injectable } from '@nestjs/common';
import { getAllUsersReportResponse, getCurrentUserReportResponse } from "../../types/time-report/time-report.entity";
import { TimeRegistrationTaskInterface } from "../../types";
import { TimeRegistrationTask } from '../time-registration/time-registration-task.entity';

@Injectable()
export class TimeReportService {
  getHello(): string {
    return 'TimeReport Witaj';
  }

  async getAllTasks(): Promise<TimeRegistrationTask[]> {
    return await TimeRegistrationTask.find();
  }

  // getAllUsersReport(): getAllUsersReportResponse {
  //   return [
  //     {
  //       userName: 'Admin',
  //       id: 'cce05d19-ddcc-4b1d-950c-b6a523143f85',
  //       startedAt: new Date('2022-03-07T00:09:17.325Z'),
  //       daysOfEffort: 0,
  //       minutesOfEffort: 2,
  //       taskDescription: 'Building a project',
  //     },
  //     {
  //       userName: 'dsadas',
  //       id: 'bd24e33a-f6d9-4605-8bb4-a1ea16eeac9d',
  //       startedAt: new Date('2022-06-26T14:26:30.124Z'),
  //       daysOfEffort: 0,
  //       minutesOfEffort: 0,
  //       taskDescription: 'naprawić db',
  //     },
  //     {
  //       userName: 'Jan',
  //       id: '2afc46d7-86d8-4999-878b-355459a925d8',
  //       startedAt: new Date('2022-03-12T00:32:47.178Z'),
  //       daysOfEffort: 0,
  //       minutesOfEffort: 0,
  //       taskDescription: 'add more tasks',
  //     },
  //     {
  //       userName: 'Rajmund',
  //       id: '8c446413-94f6-4c0a-84bd-ab65547ac85d',
  //       startedAt: new Date('2022-02-27T23:16:37.865Z'),
  //       daysOfEffort: 0,
  //       minutesOfEffort: 9,
  //       taskDescription: 'urządzić kurczakowi pogo',
  //     },
  //     {
  //       userName: 'Ryszard',
  //       id: 'd61995c5-7915-4444-8858-316350d899c0',
  //       startedAt: new Date('2022-02-28T12:58:59.030Z'),
  //       daysOfEffort: 0,
  //       minutesOfEffort: 15,
  //       taskDescription: 'dokończyć aplikacje',
  //     },
  //     {
  //       userName: 'Ryszard',
  //       id: 'd61995c6-7915-4444-8858-316350d899c0',
  //       startedAt: new Date('2022-02-27T19:50:55.645Z'),
  //       daysOfEffort: 0,
  //       minutesOfEffort: 12,
  //       taskDescription: 'zbić krzesło',
  //     },
  //   ];
  // }

  getCurrentUserReport(id: string): getCurrentUserReportResponse {
    return [
      {
        userName: 'Ryszard',
        id: 'd61995c5-7915-4444-8858-316350d899c0',
        startedAt: new Date('2022-02-27T19:50:55.645Z'),
        daysOfEffort: 0,
        minutesOfEffort: 12,
        taskDescription: 'zbić krzesło',
      },
      {
        userName: 'Ryszard',
        id: 'd61995c6-7915-4444-8858-316350d899c0',
        startedAt: new Date('2022-02-27T19:50:55.645Z'),
        daysOfEffort: 0,
        minutesOfEffort: 12,
        taskDescription: 'rozzbić krzesło',
      },
      {
        userName: 'Ryszard',
        id: 'd61995c7-7915-4444-8858-316350d899c0',
        startedAt: new Date('2022-02-27T19:50:55.645Z'),
        daysOfEffort: 0,
        minutesOfEffort: 12,
        taskDescription: 'zbić znowu krzesło',
      },
    ];
  }
}
