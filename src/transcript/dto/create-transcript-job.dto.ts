import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';
export class CreateTranscriptJobDto {
  @IsNotEmpty()
  @IsString()
  transcription_job_id: string; // mongoose.Schema.Types.ObjectId,
  @IsNotEmpty()
  @IsString()
  campaign_name: string;

  @IsString()
  segment_number: string;
  @IsString()
  interaction_id: string; // mongoose.Schema.Types.ObjectId,
  @IsNotEmpty()
  audio_url: string;
  @IsString()
  base_path?: string;
  @IsString()
  asr_provider: string;
  @IsString()
  asr_language?: string;
  @IsNumber()
  sample_rate?: number;
  @IsNumber()
  num_samples: number;
  @IsNumber()
  channels?: number;
  @IsNumber()
  duration?: number;
  @IsString()
  audio_format?: string;
  @IsBoolean()
  is_silent?: boolean;
}
