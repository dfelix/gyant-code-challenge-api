import { IsString, Length } from 'class-validator';

export class EvaluationDto {
  @IsString()
  code: string;

  // @IsUUID()
  @IsString()
  @Length(24)
  evaluatedBy: string;
}
