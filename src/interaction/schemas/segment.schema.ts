import { Prop, Schema } from '@nestjs/mongoose';
import { Event } from './event.schema';
import { SegmentNlp } from './segment-nlp.schema';
@Schema()
export class Segment {
  @Prop({
    unique: true,
  })
  segment_id: string;

  @Prop()
  events: Event[];

  @Prop()
  duration: number;

  @Prop()
  created_at: Date;

  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  event_count: number;

  @Prop()
  started_at: Date;

  @Prop()
  slots: string; //Parse slots object to json after reading

  @Prop()
  nlps: SegmentNlp[];
}
