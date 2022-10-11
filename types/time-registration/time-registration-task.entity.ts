export interface TimeRegistrationTaskInterface {
  id: string;
  startedAt: Date;
  daysOfEffort: number | null;
  minutesOfEffort: number | null;
  taskDescription: string | null;
}

export type startNewTaskResponse = TimeRegistrationTaskInterface;

