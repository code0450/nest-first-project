import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesModule } from './quotes/quotes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    QuotesModule,
    MongooseModule.forRoot('mongodb+srv://kdlrkttl23232:tJ7Q1GWn1NqHl3GX@cluster0.jgv80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(QuotesController)
  }
}
