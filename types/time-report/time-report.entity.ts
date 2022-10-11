import {TimeRegistrationTaskInterface} from '../time-registration/time-registration-task.entity';

export interface TimeReportInterface
    extends Omit<TimeRegistrationTaskInterface, 'userId'> {
    userName: string;
    affectedUser: {
        id: string;
    }
}

// export interface TimeReportInterface
//   extends Omit<TimeRegistrationTaskInterface, 'userId'> {
//   userName: string;
//   affectedUserId: string;
// }

export type getAllUsersReportResponse = TimeReportInterface[] | [];

export type getCurrentUserReportResponse = TimeReportInterface[] | [];
