import { Module } from '@nestjs/common';
import { TimeRegistrationController } from './time-registration.controller';
import { TimeRegistrationService } from './time-registration.service';

@Module({
  imports: [],
  controllers: [TimeRegistrationController],
  providers: [TimeRegistrationService],
})
export class TimeRegistrationModule {}
