import mongoose from "mongoose";
import type { IOrder } from "../types/types.js";
export declare const Order: mongoose.Model<IOrder, {}, {}, {}, mongoose.Document<unknown, {}, IOrder, {}, mongoose.DefaultSchemaOptions> & IOrder & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IOrder>;
//# sourceMappingURL=orderModel.d.ts.map