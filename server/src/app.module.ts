import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { SchedulesModule } from './schedules/schedules.module';
import { UsersModule } from './users/users.module';
import { UsersGuard } from './users/guards/users.guard';

@Module({
  imports: [
    SchedulesModule,
    UsersModule,

    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY ?? 'cambia_esto_por_env',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: UsersGuard,
    },
  ],
})
export class AppModule {}
