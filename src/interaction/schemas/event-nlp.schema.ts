import { Schema, Prop, raw } from '@nestjs/mongoose';
@Schema()
export class EventNlp {
  @Prop({
    unique: true,
  })
  event_nlp_id: string;

  @Prop()
  pipeline: string;

  @Prop()
  last_update: Date;

  @Prop()
  model_version: string;

  @Prop()
  model_name: string;

  @Prop()
  intent_name: string;

  @Prop()
  intent_confidence: number;

  @Prop()
  intent_level_1: string;

  @Prop()
  intent_level_2: string;

  @Prop()
  intent_level_3: string;

  @Prop()
  intent_level_4: string;

  @Prop(
    raw({
      probas: {
        POS: { type: Number },
        NEG: { type: Number },
        NEU: { type: Number },
      },
      output: { type: String },
    }),
  )
  sentiment: Record<string, any>;

  @Prop(
    raw({
      probas: {
        ANGER: { type: Number },
        DISGUST: { type: Number },
        FEAR: { type: Number },
        JOY: { type: Number },
        SADNESS: { type: Number },
        SURPRISE: { type: Number },
        OTHERS: { type: Number },
      },
      output: { type: String },
    }),
  )
  emotion: Record<string, any>;

  @Prop(
    raw({
      probas: {
        HATEFUL: { type: Number },
        TARGETED: { type: Number },
        AGGRESSIVE: { type: Number },
      },
      output: { type: Array },
    }),
  )
  hate_speech: Record<string, any>;

  @Prop(
    raw({
      score: { type: Number },
      value: { type: String },
    }),
  )
  topic: Record<string, any>;

  @Prop()
  type_short: string;

  @Prop()
  type_long: string;

  @Prop()
  entities: string; //Entity[];
}
