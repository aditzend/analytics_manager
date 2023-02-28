import {
  Controller,
  Logger,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  Get,
} from '@nestjs/common';
import { CreateTranscriptJobDto } from './dto/create-transcript-job.dto';
import { TranscriptService } from './transcript.service';

@Controller('/v3/transcript')
export class TranscriptController {
  constructor(private readonly transcriptService: TranscriptService) {}

  logger = new Logger('TranscriptController');

  @Post('job')
  @UsePipes(new ValidationPipe({ transform: true }))
  createJob(@Body() createTranscriptJobDto: CreateTranscriptJobDto) {
    this.logger.log(
      `Received transcript job: ${JSON.stringify(createTranscriptJobDto)}`,
    );
    return this.transcriptService.createJob(createTranscriptJobDto);
  }

  @Post('job/finished')
  @UsePipes(new ValidationPipe({ transform: true }))
  markAsFinished(@Body() markTranscriptJobAsFinishedDto) {
    // this.logger.log('markAsFinished', markTranscriptJobAsFinishedDto);
    return this.transcriptService.markAsFinished(
      markTranscriptJobAsFinishedDto,
    );
  }

  @Post('job/failed')
  @UsePipes(new ValidationPipe({ transform: true }))
  markAsFailed(@Body() markTranscriptJobAsFailedDto) {
    return this.transcriptService.markAsFailed(markTranscriptJobAsFailedDto);
  }

  @Get('/:interactionId')
  getLatestTranscription(@Param('interactionId') interactionId: string) {
    this.logger.log(`Getting transcription for ${interactionId}`);
    return this.transcriptService.getLatestTranscription(interactionId);
  }

  @Get('/pending/:interactionId')
  getPendingTranscription(@Param('interactionId') interactionId: string) {
    this.logger.log(`Getting pending transcription for ${interactionId}`);
    return this.transcriptService.getPendingTranscription(interactionId);
  }
}
