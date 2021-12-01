import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from 'mongoose'
import { Thread } from './thread.schema';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    status: boolean;

   

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Thread'}]})
    threads: Thread[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);