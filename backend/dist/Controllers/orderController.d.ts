import type { NextFunction, Request, Response } from "express";
interface AuthRequest extends Request {
    user?: any;
}
export declare const createOrder: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const GetMyOrder: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllOrder: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const updateOrderStatus: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=orderController.d.ts.map