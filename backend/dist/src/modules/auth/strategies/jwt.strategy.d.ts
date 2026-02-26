import { ConfigService } from "@nestjs/config";
import type { AuthenticatedUser } from "../../../common/interfaces/index.js";
interface JwtPayload {
    sub: string;
    email: string;
    role: string;
    departmentId: string | null;
}
declare const JwtStrategy_base: new (...args: unknown[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): AuthenticatedUser;
}
export {};
