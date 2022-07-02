import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogService } from './services/log.service';
const logService = new LogService('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  logService.debug('start ... 3000');
  await app.listen(3000);
}
bootstrap();
