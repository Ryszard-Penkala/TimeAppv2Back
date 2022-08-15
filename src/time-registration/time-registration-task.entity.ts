import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TimeRegistrationTaskInterface } from '../../types/time-registration/time-registration-task.entity';
import { User } from '../user/user.entity';

@Entity()
export class TimeRegistrationTask extends BaseEntity implements TimeRegistrationTaskInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  startedAt: Date;

  @Column({
    type: 'tinyint',
    unsigned: true,
    nullable: true,
  })
  daysOfEffort: number | null;

  @Column({
    type: 'mediumint',
    nullable: true,
  })
  minutesOfEffort: number | null;

  @Column({
    type: 'text',
    nullable: true,
  })
  taskDescription: string | null;

  @ManyToOne((type) => User, (entity) => entity.userId)
  @JoinColumn()
  affectedUser: User;
}
