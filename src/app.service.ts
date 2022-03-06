import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hits } from './hits';
import { Repository } from 'typeorm';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Hits)
    private usersRepository: Repository<Hits>,
  ) {}

 async findOne(id: number) {
    let result= await this.usersRepository.findOne(id);
    if(!result){
      await this.create();
      result=await this.findOne(1);
     }
    result.lasthits=result.hits
    result.hits+=1
    this.usersRepository.save(result);
    return result;
  }
  
  create(): Promise<Hits> {
    
    return this.usersRepository.save({id:1,hits:0,lasthits:0});
  }
  reset() {
    
    return this.usersRepository.update({id:1},{id:1,hits:0,lasthits:0});
  }
  
}
