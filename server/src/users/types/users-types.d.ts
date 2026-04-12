import { Role } from 'src/generated/prisma/enums';
import { Request } from 'express';
export interface UserPayload {
  id: string;
  role: Role;
  iat?: number;
  exp?: number;
}

export interface ScheduleResponse {
  id: string;
  name: string | null;
  description: string | null;
  startDate: Date | null;
  endDate: Date | null;
  status: string | null;
  assigned?: {
    id: string;
    email: string | null;
    fullName: string | null;
    role: string | null;
  };
  creator?: {
    id: string;
    email: string | null;
    fullName: string | null;
    role: string | null;
  };
}

export interface RequestWithUser extends Request {
  user: UserPayload;
}
