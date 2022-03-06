import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Catn, CatDocument } from './cat.schema';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectModel(Catn.name)
  //   private readonly catModel: Model<CatDocument>,
  // ) {}


  // async create(createCatDto: CreateCatDto): Promise<Catn> {
  //   const createdCat = await this.catModel.create(createCatDto);
  //   return createdCat;
  // }

  // async findAll(): Promise<Catn[]> {
  //   return this.catModel.find().exec();
  // }

}
