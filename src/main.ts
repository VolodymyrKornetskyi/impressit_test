import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const setupSwagger = (app: INestApplication): void => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Impressit')
    .setDescription('Base multiple of API description')
    .setVersion('1.0')
    .addTag('multiple-of')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
