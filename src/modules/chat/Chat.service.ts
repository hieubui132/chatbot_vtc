import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ChatService {
  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron() {
    console.log('Called every 30 seconds');
  }
}
