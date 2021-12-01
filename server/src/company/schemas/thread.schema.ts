import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Company} from "./company.schema";
import * as mongoose from 'mongoose'

export type ThreadDocument = Thread & Document;

@Schema()
export class Thread {
    @Prop()
    name: string;

    @Prop()
    payload: number;

    @Prop()
    status: boolean;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
    company: Company;
}

export const ThreadSchema = SchemaFactory.createForClass(Thread);