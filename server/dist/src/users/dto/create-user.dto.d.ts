import { Role } from "../../generated/prisma/enums";
export declare class CreateUserDto {
    name: string;
    apellido: string;
    email: string;
    password: string;
    role: Role;
}
