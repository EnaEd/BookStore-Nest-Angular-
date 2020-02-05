import { Repository } from "typeorm";
import { Book } from "./book.entity";
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    getAllBooksEmptyFilter(options: IPaginationOptions): Promise<Pagination<Book>>;
    getAllBooksByFilter(byAuthor: string[], byCategory: string[], byType: string[], byTitle: string[], byPrice: number[], options: IPaginationOptions): Promise<Pagination<Book>>;
    getPrices(): Promise<number[]>;
    getAuthors(): Promise<string[]>;
    getTypes(): Promise<string[]>;
    getCategories(): Promise<string[]>;
    getTitles(): Promise<string[]>;
}
