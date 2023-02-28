import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InteractionModule } from './interaction/interaction.module';
import { TranscriptModule } from './transcript/transcript.module';
import { AlertModule } from './alert/alert.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    // TODO: Move this to config
    MongooseModule.forRoot(process.env.MONGO_URL),
    InteractionModule,
    TranscriptModule,
    AlertModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
