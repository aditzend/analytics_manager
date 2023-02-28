import { InjectModel } from '@nestjs/mongoose';
import { Transcript, TranscriptDocument } from './schemas/transcript.schema';
import { Model } from 'mongoose';
import { CreateTranscriptJobDto } from './dto/create-transcript-job.dto';
import { HttpException, Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MarkTranscriptJobAsFinishedDto } from './dto/mark-transcript-job-as-finished.dto';
import { MarkTranscriptJobAsFailedDto } from './dto/mark-transcript-job-as-failed.dto';
@Injectable()
export class TranscriptService {
  constructor(
    @InjectModel(Transcript.name)
    private transcriptModel: Model<TranscriptDocument>,
    @Inject('TRANSCRIPT_QUEUE') private transcriptQueue: ClientProxy,
  ) {}

  logger = new Logger('TranscriptService');

  async createJob(
    createTranscriptJobDto: CreateTranscriptJobDto,
  ): Promise<TranscriptDocument> {
    const newJob = {
      created_at: new Date(),
      ...createTranscriptJobDto,
    };
    const createdJob = new this.transcriptModel(newJob);
    try {
      const result = await createdJob.save();
      return result;
    } catch (error) {
      this.logger.warn(`BAD REQUEST EXCEPTION: ${error}`);
      // 409 means conflict
      throw new HttpException(`${error}`, 409, {
        cause: error,
      });
    }
  }

  async getLatestTranscription(interactionId: string) {
    const transcription = await this.transcriptModel.findOne({
      interactionId,
    });
    return transcription;
  }

  async getPendingTranscription(interactionId: string) {
    const transcription = await this.transcriptModel.findOne({
      interaction_id: interactionId,
      status: 'PENDING',
    });
    return transcription;
  }

  async markAsFailed(
    markTranscriptJobAsFailedDto: MarkTranscriptJobAsFailedDto,
  ) {
    const updated = await this.transcriptModel.findOneAndUpdate(
      {
        interaction_id: markTranscriptJobAsFailedDto.interaction_id,
        status: 'PENDING',
      },
      {
        status: 'FAILED',
      },
    );
    this.logger.log(
      `[${markTranscriptJobAsFailedDto.interaction_id}] transcript job as failed`,
    );
    return updated;
  }

  async markAsFinished(
    markTranscriptJobAsFinishedDto: MarkTranscriptJobAsFinishedDto,
  ) {
    const updated = await this.transcriptModel.findOneAndUpdate(
      {
        transcription_job_id:
          markTranscriptJobAsFinishedDto.transcription_job_id,
      },
      {
        status: 'FINISHED',
        utterances: markTranscriptJobAsFinishedDto.utterances,
      },
    );
    this.logger.log(
      `[${markTranscriptJobAsFinishedDto.transcription_job_id}] transcript job as finished`,
    );
    return updated;
  }
}
