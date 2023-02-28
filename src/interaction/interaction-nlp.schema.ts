import { Schema, Prop, raw } from '@nestjs/mongoose';
@Schema()
export class InteractionNlp {
  @Prop({
    unique: true,
  })
  id: string;

  @Prop()
  pipeline: string;

  @Prop()
  last_update: Date;

  @Prop()
  model_version: string;

  @Prop()
  model_name: string;

  @Prop(
    raw({
      score: { type: Number },
      value: { type: String },
    }),
  )
  sentiment: Record<string, any>;

  @Prop(
    raw({
      score: { type: Number },
      value: { type: String },
    }),
  )
  topic: Record<string, any>;

  @Prop()
  labels: string[];
}
