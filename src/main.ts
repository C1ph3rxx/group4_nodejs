import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

    // Swagger configuration
    const config = new DocumentBuilder()
    .setTitle('API Documentation')  // Title of the API documentation
    .setDescription('API description for the application')  // Description
    .setVersion('1.0')  // API version
    .addTag('user')  // Tag for grouping endpoints (optional)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);  // API docs endpoint


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
