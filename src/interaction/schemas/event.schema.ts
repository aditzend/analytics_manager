import { Prop, Schema } from '@nestjs/mongoose';
import { EventNlp } from './event-nlp.schema';
@Schema()
export class Event {
  @Prop({
    unique: true,
  })
  event_id: string;

  @Prop()
  interaction_id: string;

  @Prop()
  segment_id: string;

  @Prop()
  created_at: Date;

  @Prop()
  started_at: number;

  @Prop()
  ended_at: number;

  @Prop()
  text: string;

  @Prop()
  nlps: EventNlp[];
}
