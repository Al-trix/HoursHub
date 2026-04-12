import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersGuard } from './guards/users.guard';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersGuard],
  exports: [UsersService, UsersGuard],
})
export class UsersModule {}
