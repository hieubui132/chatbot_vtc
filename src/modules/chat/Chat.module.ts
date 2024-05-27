import { Module } from '@nestjs/common';
import { ChatController } from './Chat.controller';
import { ChatService } from './Chat.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
