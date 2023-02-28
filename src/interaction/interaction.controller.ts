import {
  Controller,
  Logger,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  Put,
  Get,
} from '@nestjs/common';
import { CreateInteractionDto } from './dto/create-interaction.dto';
import { CreateAutoInteractionDto } from './dto/create-auto-interaction.dto';
import { InteractionService } from './interaction.service';
import { Interaction } from './schemas/interaction.schema';
import { AddNlpToInteractionDto } from './dto/add-nlp.dto';
import { Utterance } from 'src/transcript/schemas/utterance.schema';
@Controller('/v3/interaction')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}
  logger = new Logger('InteractionController');

  @Get('/:interactionId')
  getInteraction(@Param('interactionId') interactionId: string) {
    this.logger.log(`Getting interaction data ${interactionId}`);
    return this.interactionService.getInteraction(interactionId);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createInteraction(@Body() createInteractionDto: CreateInteractionDto) {
    return this.interactionService.createInteraction(createInteractionDto);
  }

  @Post('/auto')
  @UsePipes(new ValidationPipe({ transform: true }))
  createAutoInteraction(
    @Body() createAutoInteractionDto: CreateAutoInteractionDto,
  ) {
    this.logger.verbose(
      `Creating auto interaction ${createAutoInteractionDto.id}`,
    );
    return this.interactionService.createAutoInteraction(
      createAutoInteractionDto.id,
    );
  }

  @Put(':interactionId/nlp')
  addNlpToInteraction(
    @Body() addNlpToInteractionDto: AddNlpToInteractionDto,
    @Param('interactionId')
    interactionId: string,
  ) {
    return this.interactionService.addNlpToInteraction(
      interactionId,
      addNlpToInteractionDto,
    );
  }
}
