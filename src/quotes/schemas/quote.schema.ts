import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuoteDocument = Quote & Document;

@Schema()
export class Quote {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    quote: string;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);