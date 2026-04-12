// src/users/guards/users.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { RequestWithUser } from '../types/users-types';
import { UsersService } from '../users.service';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(
    // 👇 UsersService en lugar de JwtService — sin problemas de ESLint
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const token: string | undefined = request.cookies?.[
      'access_token'
    ] as string;

    if (!token) throw new UnauthorizedException('No hay sesión activa');

    try {
      // ✅ Sin casts, sin eslint-disable, TypeScript confía completamente
      request.user = await this.usersService.verifyToken(token);
    } catch {
      throw new UnauthorizedException('Token inválido o expirado');
    }

    return true;
  }
}
