import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TranscriptController } from './transcript.controller';
import { TranscriptService } from './transcript.service';
import { Transcript, TranscriptSchema } from './schemas/transcript.schema';
import { ClientProxyFactory, RmqOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transcript.name, schema: TranscriptSchema },
    ]),
  ],
  controllers: [TranscriptController],
  providers: [
    {
      provide: 'TRANSCRIPT_QUEUE',
      useFactory: (configService: ConfigService) => {
        const transcriptServiceOptions: RmqOptions =
          configService.get('transcript');
        return ClientProxyFactory.create(transcriptServiceOptions);
      },
      inject: [ConfigService],
    },
    TranscriptService,
  ],
})
export class TranscriptModule {}
