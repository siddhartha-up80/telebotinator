import { Injectable, Logger } from '@nestjs/common';
const TelegramBot = require('node-telegram-bot-api');


const token = '6612359816:AAHqWfFuh6MPoFsYVKy8eSu1uMvLHMyL88U';

@Injectable()
export class TelegramService {
    private readonly bot: any
    private logger = new Logger(TelegramService.name)

    constructor(){
        this.bot = new TelegramBot(token, { polling: true });

        this.bot.on('message', this.onRecieveMessage);
    }

    onRecieveMessage = (msg:any) =>{
         this.logger.debug(msg);
    }

}
