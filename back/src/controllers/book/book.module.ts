import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Book } from './book.entity';
import { BookService } from './book.service';

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    providers: [BookService],
    controllers: [BookController]
})
export class BookModule { }