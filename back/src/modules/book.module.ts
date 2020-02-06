import { BookController } from '../controllers/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Book } from '../entities/book.entity';
import { BookService } from '../services/book.service';

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    providers: [BookService],
    controllers: [BookController]
})
export class BookModule { }