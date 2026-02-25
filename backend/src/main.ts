import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";
import { AppModule } from "./app.module.js";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Security headers
  app.use(helmet());

  // CORS
  app.enableCors({
    origin: process.env["FRONTEND_URL"] ?? "http://localhost:3001",
    credentials: true,
  });

  // Global prefix
  const apiPrefix = process.env["API_PREFIX"] ?? "api/v1";
  app.setGlobalPrefix(apiPrefix);

  // Global validation pipe — enforces class-validator on all incoming DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Swagger (disabled in production)
  if (process.env["NODE_ENV"] !== "production") {
    const config = new DocumentBuilder()
      .setTitle("Performance Evaluation System API")
      .setDescription("API for managing employee performance evaluations")
      .setVersion("1.0")
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`${apiPrefix}/docs`, app, document);
  }

  const port = process.env["PORT"] ?? 3000;
  await app.listen(port);
}

bootstrap();
