import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
    imports: [TypeOrmModule.forRoot(), CategoriesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
