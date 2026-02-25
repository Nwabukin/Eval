/**
 * Mock of the generated Prisma client for unit tests.
 * Re-exports enums and provides a stub PrismaClient class
 * so that services can be compiled and tested without a real DB.
 */

export const UserRole = {
  ADMIN: "ADMIN",
  EMPLOYEE: "EMPLOYEE",
  LINE_MANAGER: "LINE_MANAGER",
  CALIBRATION: "CALIBRATION",
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const CycleStatus = {
  OPEN: "OPEN",
  CLOSED: "CLOSED",
} as const;
export type CycleStatus = (typeof CycleStatus)[keyof typeof CycleStatus];

export const EvaluationStatus = {
  DRAFT: "DRAFT",
  SUBMITTED_TO_MANAGER: "SUBMITTED_TO_MANAGER",
  SUBMITTED_TO_CALIBRATION: "SUBMITTED_TO_CALIBRATION",
  FINALIZED: "FINALIZED",
} as const;
export type EvaluationStatus =
  (typeof EvaluationStatus)[keyof typeof EvaluationStatus];

export const CalibrationMode = {
  INDIVIDUAL_AGGREGATE: "INDIVIDUAL_AGGREGATE",
  DIRECT_TEAM: "DIRECT_TEAM",
} as const;
export type CalibrationMode =
  (typeof CalibrationMode)[keyof typeof CalibrationMode];

export class PrismaClient {
  $connect = jest.fn();
  $disconnect = jest.fn();
  $transaction = jest.fn();
}
