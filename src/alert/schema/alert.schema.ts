import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AlertDocument = Alert & HydratedDocument<Alert>;
@Schema()
export class Alert {
  @Prop()
  description: string;

  @Prop()
  service: string;

  @Prop()
  type: string;

  @Prop()
  severity: string;

  @Prop()
  status: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  interaction_id: string; // mongoose.Schema.Types.ObjectId,
}

export const AlertSchema = SchemaFactory.createForClass(Alert);
