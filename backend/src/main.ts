import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // adiciona /api antes de todas as rotas
  await app.listen(3000);
}
bootstrap();
