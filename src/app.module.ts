import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hits } from './hits';

@Module({
  imports: [ConfigModule.forRoot( {isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST')||'localhost',
        port: 3306,
        username: 'ismaeil',
        password: 'root',
        database: 'db_example',
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    })
    ,TypeOrmModule.forFeature([Hits])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}