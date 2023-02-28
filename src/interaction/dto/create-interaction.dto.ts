import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsObject,
} from 'class-validator';

export class CreateInteractionDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  segments: number;

  @IsDateString()
  @IsNotEmpty()
  started_at: Date;

  @IsString()
  crm_id: string;

  @IsObject()
  client: Record<string, any>;

  @IsString()
  dnis: string;

  @IsString()
  ani: string;

  @IsObject()
  result: Record<string, any>;

  @IsObject()
  termination_cause: Record<string, any>;

  @IsNumber()
  q850_cause_id: number;

  @IsObject()
  cut_origin: Record<string, any>;

  @IsObject()
  campaign: Record<string, any>;

  @IsObject()
  agent: Record<string, any>;

  @IsString()
  context: string;

  @IsString()
  message_id: string;

  @IsNumber()
  case_id: number;

  @IsNumber()
  closed_by_max_acw_time: number;

  @IsNumber()
  duration: number;

  @IsNumber()
  task_id: number;
}
