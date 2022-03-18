import { IsString } from 'class-validator';

export class EvaluationDto {
  @IsString()
  doctor: string;
  @IsString()
  label: string;
}
