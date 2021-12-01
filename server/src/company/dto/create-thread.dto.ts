import {ObjectId} from "mongoose";

export class CreateThreadDto {
    readonly name;
    readonly payload;
    readonly status;
    readonly companyId: ObjectId;
}