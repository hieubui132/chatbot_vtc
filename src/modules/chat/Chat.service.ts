import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class ChatService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello Chatbot By Hieubc';
  }

  // async findAll() {
  //   const { data } = await firstValueFrom(
  //     this.httpService
  //       .get(
  //         'https://graph.facebook.com/v20.0/327329587129436/conversations?platform=messenger&access_token=EAAN7jP8sNV8BO7zthJuN4YeNEa44Eis9kihvrNT9xHMLw1Dk5KZCZAGKU28KE90Wh9bLf6p0J1hq5Vspli6NhCioAzX7RzMgrg3FC3tUoXc8CvhehDmkPPgerRMLeQjh26526V9TeIPHdwhghKmts2qt0yiJNp5cS2Et5fDuaSG9iC0ZAEad0H9h8MNy0sbDwZDZD',
  //       )
  //       .pipe(
  //         catchError((error: AxiosError) => {
  //           console.log(error.response.data);
  //           throw 'An error happened!';
  //         }),
  //       ),
  //   );
  //   return data;
  // }
}
