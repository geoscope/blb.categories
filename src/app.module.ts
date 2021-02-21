import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { StoreIdMiddleware } from './storeid.middleware';

@Module({
    imports: [TypeOrmModule.forRoot(), CategoriesModule],
    controllers: [AppController],
    providers: [AppService],
})
// export class AppModule {}
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(StoreIdMiddleware).forRoutes(CategoriesController);
    }
}
