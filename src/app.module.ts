import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Catn, CatSchema } from './cat.schema';

@Module({
  imports: [ConfigModule.forRoot()
  //   MongooseModule.forRootAsync({
  //     useFactory: () => ({
  //       uri: 'mongodb://shajar:roottoor@3.239.78.16:27017/test-Dn',
  //       useNewUrlParser: true, 
  //       useUnifiedTopology:true,
  //       directConnection: true
  //     }),
  //   }),
  //   MongooseModule.forFeature([{ name: Catn.name, schema: CatSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}