import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Event, EventDocument } from './event.schema';
import { Interaction, InteractionDocument } from './schemas/interaction.schema';
import { CreateInteractionDto } from './dto/create-interaction.dto';
import { AddNlpToInteractionDto } from './dto/add-nlp.dto';
import { EventNlp } from './schemas/event-nlp.schema';
import axios from 'axios';
import { Utterance } from 'src/transcript/schemas/utterance.schema';
import { ConfigService } from '@nestjs/config';

interface DbInterfaceConfig {
  url: string;
}

@Injectable()
export class InteractionService {
  constructor(
    @InjectModel(Interaction.name)
    private interactionModel: Model<InteractionDocument>,
    private configService: ConfigService,
  ) {}

  logger = new Logger('InteractionService');

  async getInteraction(interactionId: string) {
    try {
      const result = await this.interactionModel.findOne({
        interaction_id: interactionId,
      });
      this.logger.verbose(`interaction found ${result}`);
      return result;
    } catch (error) {
      this.logger.warn(`BAD REQUEST EXCEPTION: ${error}`);
      throw new HttpException(`${error}`, 400, {
        cause: error,
      });
    }
  }

  async createInteraction(
    createInteractionDto: CreateInteractionDto,
  ): Promise<InteractionDocument> {
    const createdInteraction = new this.interactionModel(createInteractionDto);
    try {
      const result = await createdInteraction.save();
      return result;
    } catch (error) {
      this.logger.warn(`BAD REQUEST EXCEPTION: ${error}`);
      throw new HttpException(`${error}`, 400, {
        cause: error,
      });
    }
  }

  async createAutoInteraction(interactionId) {
    try {
      this.logger.verbose(`Creating auto interaction ${interactionId}`);
      const dbInterfaceConfig: DbInterfaceConfig =
        this.configService.get<DbInterfaceConfig>('dbinterface');
      const dbInterfaceUrl = dbInterfaceConfig.url;
      const interactionFullData = await axios.get(
        `${dbInterfaceUrl}/v3/interaction/full/${interactionId}`,
      );

      this.logger.debug(
        `interactionFullData: ${JSON.stringify(interactionFullData.data)}`,
      );

      const createdInteraction = new this.interactionModel(
        interactionFullData.data,
      );
      const result = await createdInteraction.save();
      return result;
    } catch (error) {
      this.logger.warn(`BAD REQUEST EXCEPTION: ${error}`);

      // 409 means conflict
      throw new HttpException(`${error}`, 409, {
        cause: error,
      });
    }
  }

  // async addTranscriptToInteraction(
  //   interactionId: string,
  //   addTranscriptDto: AddTranscriptDto,
  // ) {
  //   try {
  //     const interaction = await this.interactionModel.findOne({
  //       id: interactionId,
  //     });
  //     interaction.transcripts.push(addTranscriptDto);

  async addNlpToInteraction(
    interactionId: string,
    addNlpToInteractionDto: AddNlpToInteractionDto,
  ) {
    try {
      const interaction = await this.interactionModel.findOne({
        id: interactionId,
      });
      // const nlp = {
      //   last_update: new Date(),
      //   ...addNlpToInteractionDto,
      // };
      // interaction.nlps.push(nlp);
      return interaction.save();
    } catch (error) {
      this.logger.warn(`BAD REQUEST EXCEPTION: ${error}`);
      throw new HttpException(`${error}`, 400, {
        cause: error,
      });
    }
  }
}
