import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Interaction } from '../../interaction/schemas/interaction.schema';
import { Utterance } from './utterance.schema';

export type TranscriptDocument = Transcript & HydratedDocument<Transcript>;

@Schema()
export class Transcript {
  @Prop({
    required: true,
    unique: true,
  })
  transcription_job_id: string;

  @Prop()
  campaign_name: string;

  @Prop()
  segment_number: string;

  @Prop({
    required: true,
  })
  interaction_id: string;

  @Prop({
    default: 'WHISPER',
  })
  asr_provider: string;

  @Prop()
  asr_provider_response: string;

  @Prop({
    default: 'es',
  })
  asr_language: string;

  @Prop({
    required: true,
  })
  audio_url: string;
  @Prop({
    required: true,
  })
  base_path: string;
  @Prop()
  created_at: Date;
  @Prop()
  updated_at: Date;
  @Prop()
  started_at: Date;

  @Prop()
  ended_at: Date;

  @Prop({ required: true, default: 'PENDING' })
  status: string;
  @Prop()
  utterances: Utterance[];

  @Prop()
  duration: number;

  @Prop()
  sample_rate: number;

  @Prop()
  channels: number;

  @Prop()
  audio_format: string;

  @Prop()
  is_silent: boolean;
}

export const TranscriptSchema = SchemaFactory.createForClass(Transcript);
