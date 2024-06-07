import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ChatService {
  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async getMessage() {
    const envVariables = process.env;
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `https://graph.facebook.com/v20.0/${envVariables.PAGE_ID}/conversations?platform=messenger&access_token=${envVariables.PAGE_ACCESS_TOKEN}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!';
          }),
        ),
    );
    this.processData(data);
  }

  // Hàm xử lý dữ liệu
  processData(data: any) {
    // Thực hiện logic của bạn tại đây
    console.log(data); // ví dụ, in dữ liệu ra console
    // Hãy thay thế phần trên bằng mã của bạn để xử lý dữ liệu
  }
}
