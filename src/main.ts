import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as os from 'os';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port= configService.get('PORT') || 3000;
  app.enableShutdownHooks();  // used in kubernetes
  await app.listen(port);
  Logger.log(`access url in ${os.hostname()} and ips :| ${Object.values(os.networkInterfaces()).map(x=>x[0].address)} and port ${port}`)
}
bootstrap();
