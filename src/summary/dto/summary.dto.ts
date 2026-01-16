import { IsNotEmpty, IsString } from 'class-validator';

export class SummaryDto {
  @IsString()
  @IsNotEmpty()
  meetingId: string;
}
