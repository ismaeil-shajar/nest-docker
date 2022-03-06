import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Catn } from './cat.schema';
import { CreateCatDto } from './create-cat.dto';
import * as os from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(){
   let out= await this.appService.findOne(1);
    return {"hits":out.hits,"hostName":os.hostname(),"success":true};
  }
  @Get("rest")
  async getReset(){
   let out= await this.appService.reset();
    return "done";
  }
  
  @Get("liveness")
  async getLive(){
    return "Done";
  }

}
