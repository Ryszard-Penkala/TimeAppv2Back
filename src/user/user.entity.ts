import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimeRegistrationTask } from '../time-registration/time-registration-task.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
  })
  email: string;

  @Column()
  pwdHash: string;

  @Column({
    nullable: true,
    default: null,
  })
  currentTokenId: string | null;

  @OneToMany((type) => TimeRegistrationTask, (entity) => entity.affectedUser)
  userId: TimeRegistrationTask[];
}
