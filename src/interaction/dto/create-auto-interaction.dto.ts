import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAutoInteractionDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
