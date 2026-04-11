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
