export declare const Role: {
    readonly CREATOR: "CREATOR";
    readonly USER: "USER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ScheduleStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly PENDING: "PENDING";
};
export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];
