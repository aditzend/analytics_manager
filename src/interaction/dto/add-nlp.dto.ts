import { IsString } from 'class-validator';

export class AddNlpToInteractionDto {
  @IsString()
  pipeline: string;

  @IsString()
  model_version: string;

  @IsString()
  model_name: string;
}
