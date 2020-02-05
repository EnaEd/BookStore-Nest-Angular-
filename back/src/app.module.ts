import { Book } from './controllers/book/book.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './controllers/book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'bookstore',
    entities: [Book],
    synchronize: true
  }), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
