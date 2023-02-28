import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InteractionController } from './interaction.controller';
import { Interaction, InteractionSchema } from './schemas/interaction.schema';
import { InteractionService } from './interaction.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Interaction.name, schema: InteractionSchema },
    ]),
  ],
  controllers: [InteractionController],
  providers: [InteractionService],
})
export class InteractionModule {}
