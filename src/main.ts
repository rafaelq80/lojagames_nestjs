import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDatabase } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm';

async function bootstrap() {
  
  // Opções para criar o Banco de dados
  const options: DataSourceOptions = {
    type: 'mysql',
    database: 'db_lojagames_new',
    username: 'root',
    password: 'root'
  };

  // Função para criar o Banco de dados
  await createDatabase({ ifNotExist: true, options });

  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  await app.listen(4000);
}

bootstrap();
