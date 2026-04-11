import { Role } from 'src/generated/prisma/enums';
import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty()
  password: string;

  @IsEnum(Role, { message: 'Role must be valid' })
  @IsNotEmpty()
  role: Role;
}
