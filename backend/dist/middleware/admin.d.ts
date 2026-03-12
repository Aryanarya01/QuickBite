import type { NextFunction, Request, Response } from "express";
interface AuthRequest extends Request {
    user?: any;
}
export declare const isAdmin: (req: AuthRequest, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=admin.d.ts.map