import express from 'express';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Public } from './decorators/public.decorator';
import type { RequestWithUser } from './types/users-types';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('/register')
  async register(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: express.Response,
  ) {
    const user = await this.usersService.register(createUserDto);

    res.cookie('access_token', user.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60, // 1 hora
    });

    return { message: user.message, user: user.user };
  }

  @Public()
  @Post('/login')
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: express.Response,
  ) {
    const user = await this.usersService.login(loginUserDto);

    res.cookie('access_token', user.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60, // 1 hora
    });

    return { message: 'Login exitoso' };
  }

  @Get('/all')
  findAll() {
    return this.usersService.findAll();
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Get('/me')
  getMe(@Req() req: RequestWithUser) {
    return this.usersService.getMe(req.user.id);
  }

  @Public()
  @Post('/logout')
  logout(@Res({ passthrough: true }) res: express.Response) {
    res.clearCookie('access_token');
    return { message: 'Logout exitoso' };
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
