import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateUtterancesDto {
  @IsString()
  @IsNotEmpty()
  interaction_id: string;

  @IsString()
  @IsNotEmpty()
  utterance: string;

  @IsString()
  @IsNotEmpty()
  intent: string;

  @IsString()
  @IsNotEmpty()
  confidence: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsString()
  @IsNotEmpty()
  transcript: string;

  @IsString()
  @IsNotEmpty()
  transcript_id: string;

  @IsString()
  @IsNotEmpty()
  transcript_language: string;

  @IsString()
  @IsNotEmpty()
  transcript_confidence: string;

  @IsString()
  @IsNotEmpty()
  transcript_intent: string;

  @IsString()
  @IsNotEmpty()
  transcript_utterance: string;

  @IsString()
  @IsNotEmpty()
  transcript_transcript: string;

  @IsString()
  @IsNotEmpty()
  transcript_transcript_id: string;

  @IsString()
  @IsNotEmpty()
  transcript_transcript_language: string;
}
