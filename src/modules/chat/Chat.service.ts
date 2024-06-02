import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class ChatService {
  constructor(private readonly httpService: HttpService) {}

  onModuleInit() {
    this.startInterval();
  }

  private startInterval() {
    setInterval(() => {
      this.getPSID();
    }, 20000); // 20000ms = 20s
  }
  async getPSID() {
    console.log('count');
  }
}
