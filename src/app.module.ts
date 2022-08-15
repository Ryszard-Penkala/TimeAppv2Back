import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeRegistrationModule } from './time-registration/time-registration.module';
import { TimeReportModule } from './time-report/time-report.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import ormconfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: ormconfig.host,
      port: ormconfig.port,
      username: ormconfig.username,
      password: ormconfig.password,
      database: ormconfig.database,
      entities: ormconfig.entities,
      bigNumberStrings: false,
      logging: true,
      synchronize: true,
    }),
    TimeRegistrationModule,
    TimeReportModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
