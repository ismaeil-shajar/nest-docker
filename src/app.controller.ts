import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Catn } from './cat.schema';
import { CreateCatDto } from './create-cat.dto';
import * as os from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    return {"hostName":os.hostname(),"success":true};
  }
}
