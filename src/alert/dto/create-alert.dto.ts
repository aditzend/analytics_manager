import { IsString } from 'class-validator';

export class CreateAlertDto {
  @IsString()
  interaction_id: string;
  @IsString()
  description: string;
  @IsString()
  service: string;
  @IsString()
  type: string;
  @IsString()
  severity: string;
}
