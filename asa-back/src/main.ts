import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ServerConfig } from './global/config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverConfig = app.get(ConfigService).get<ServerConfig>('server');

  await app.listen(serverConfig.port);
}

bootstrap();
