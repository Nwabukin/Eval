import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import type { AuthenticatedUser } from "../../../common/interfaces/index.js";
interface JwtPayload {
    sub: string;
    email: string;
    role: string;
    departmentId: string | null;
}
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): AuthenticatedUser;
}
export {};
