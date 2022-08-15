import { TimeRegistrationTaskInterface } from '../time-registration/time-registration-task.entity';

export interface TimeReportInterface
  extends Omit<TimeRegistrationTaskInterface, 'userId'> {
  userName: string;
}

export type getAllUsersReportResponse = TimeReportInterface[] | [];

export type getCurrentUserReportResponse = TimeReportInterface[] | [];
