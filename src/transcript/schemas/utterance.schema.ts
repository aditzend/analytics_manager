import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

// export type UtteranceDocument = Utterance & HydratedDocument<Utterance>;

@Schema()
export class Utterance {
  @Prop()
  text: string;

  @Prop()
  channel: number;

  @Prop()
  start: number;

  @Prop()
  end: number;
}

export const UtteranceSchema = SchemaFactory.createForClass(Utterance);
