import { Schema, Prop, raw } from '@nestjs/mongoose';
@Schema()
export class SegmentNlp {
  @Prop({
    unique: true,
  })
  segment_nlp_id: string;

  @Prop()
  segment_id: string;

  @Prop()
  status: string;

  @Prop()
  created_at: Date;

  @Prop()
  main_sentiment: string;
  @Prop()
  channel_1_main_sentiment: string;
  @Prop()
  channel_2_main_sentiment: string;

  @Prop()
  main_emotion: string;

  @Prop()
  channel_1_main_emotion: string;

  @Prop()
  channel_2_main_emotion: string;

  @Prop()
  main_intention_group: string;
  @Prop()
  channel_1_main_intention_group: string;
  @Prop()
  channel_2_main_intention_group: string;

  @Prop()
  main_intention_subgroup: string;
  @Prop()
  channel_1_main_intention_subgroup: string;
  @Prop()
  channel_2_main_intention_subgroup: string;

  @Prop()
  flag_hatespeech: boolean;

  @Prop()
  flag_neg_sentiment: boolean;

  @Prop()
  flag_joy: boolean;

  @Prop()
  flag_surprise: boolean;

  @Prop()
  flag_sadness: boolean;

  @Prop()
  flag_anger: boolean;

  @Prop()
  flag_disgust: boolean;

  @Prop()
  flag_fear: boolean;

  @Prop()
  entities: string;
  // TODO Should be an array of objects type Entity

  @Prop()
  pipeline: string;

  @Prop()
  last_update: Date;

  @Prop()
  model_version: string;

  @Prop()
  model_name: string;
}
