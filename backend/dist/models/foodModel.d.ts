import mongoose from "mongoose";
import type { IFood } from "../types/types.js";
export declare const Food: mongoose.Model<IFood, {}, {}, {}, mongoose.Document<unknown, {}, IFood, {}, mongoose.DefaultSchemaOptions> & IFood & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IFood>;
//# sourceMappingURL=foodModel.d.ts.map