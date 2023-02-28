import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Transcript } from 'src/transcript/schemas/transcript.schema';
// import { Utterance } from 'src/transcript/utterance.schema';
import { Segment } from './segment.schema';
export type InteractionDocument = Interaction & HydratedDocument<Interaction>;

@Schema()
export class Interaction {
  @Prop({
    unique: true,
  })
  interaction_id: string;

  // @Prop()
  // utterances: Utterance[];
  @Prop()
  segments: Segment[];

  // @Prop()
  // transcripts: Transcript[];

  @Prop()
  started_at?: Date;
  @Prop()
  crm_id?: string;

  @Prop(
    raw({
      id: { type: String },
      name: { type: String },
      phone_number_id: { type: Number },
    }),
  )
  client: Record<string, any>;

  @Prop()
  dnis: string;

  @Prop()
  ani: string;

  @Prop(
    raw({
      id: { type: Number },
      code: { type: String },
      name: { type: String },
    }),
  )
  result: Record<string, any>;

  @Prop(
    raw({
      id: { type: Number },
      default_score: { type: Number },
      default_time: { type: Number },
    }),
  )
  termination_cause: Record<string, any>;

  @Prop()
  q850_cause_id: number;

  @Prop(
    raw({
      id: { type: Number },
      description: { type: String },
    }),
  )
  cut_origin: Record<string, any>;

  @Prop(
    raw({
      id: { type: Number },
      name: { type: String },
      mode: { type: String },
    }),
  )
  campaign: Record<string, any>;

  @Prop(
    raw({
      id: { type: Number },
      name: { type: String },
      group_id: { type: Number },
      group_name: { type: String },
      supervisor_id: { type: Number },
      supervisor_name: { type: String },
    }),
  )
  agent: Record<string, any>;

  @Prop()
  context: string;
  @Prop()
  message_id: number;
  @Prop()
  case_id: number;
  @Prop()
  closed_by_max_acw_time: number;
  @Prop()
  duration: number;
  @Prop()
  task_id: number;
}

export const InteractionSchema = SchemaFactory.createForClass(Interaction);
