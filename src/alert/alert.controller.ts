import {
  Controller,
  Logger,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AlertService } from './alert.service';
import { CreateAlertDto } from './dto/create-alert.dto';

@Controller('/v3/alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}
  logger = new Logger('AlertController');

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createAlert(@Body() createAlertDto: any) {
    this.logger.log('createAlert', createAlertDto);
    return this.alertService.createAlert(createAlertDto);
  }
}
