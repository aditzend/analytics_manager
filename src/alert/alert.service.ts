import { Injectable, Logger, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlertDto } from './dto/create-alert.dto';
import { Alert, AlertDocument } from './schema/alert.schema';
@Injectable()
export class AlertService {
  constructor(
    @InjectModel(Alert.name)
    private alertModel: Model<AlertDocument>,
  ) {}
  logger = new Logger('AlertService');

  async createAlert(createAlertDto: CreateAlertDto): Promise<AlertDocument> {
    const createdAlert = new this.alertModel({
      created_at: new Date(),
      updated_at: new Date(),
      status: 'NEW',
      ...createAlertDto,
    });
    try {
      const result = await createdAlert.save();
      return result;
    } catch (error) {
      this.logger.warn(`BAD REQUEST EXCEPTION: ${error}`);
      throw new HttpException(`${error}`, 400, {
        cause: error,
      });
    }
  }
}
