import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const listenPort = 3000;
    console.log(`Starting listender on port ${listenPort}`);
    await app.listen(listenPort);
}
bootstrap();
