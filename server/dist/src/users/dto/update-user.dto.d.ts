import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<Pick<CreateUserDto, "name" | "apellido">>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
