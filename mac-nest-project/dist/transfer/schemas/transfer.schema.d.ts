import { ObjectId } from "typeorm";
export declare class Transfer {
    _id: ObjectId;
    name: string;
    age: number;
}
export declare const TransferSchema: import("mongoose").Schema<Transfer, import("mongoose").Model<Transfer, any, any, any, import("mongoose").Document<unknown, any, Transfer> & Transfer & Required<{
    _id: ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transfer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Transfer>> & import("mongoose").FlatRecord<Transfer> & Required<{
    _id: ObjectId;
}> & {
    __v: number;
}>;
