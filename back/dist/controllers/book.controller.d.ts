import { BookService } from '../services/book.service';
export declare class BookController {
    service: BookService;
    constructor(service: BookService);
    getPrices(): Promise<number[]>;
    getTitles(): Promise<string[]>;
    getAuthors(): Promise<string[]>;
    getTypes(): Promise<string[]>;
    getCategories(): Promise<string[]>;
    getAllBooks(byAuthor?: string, byCategory?: string, byType?: string, byTitle?: string, byPrice?: string, page?: number, limit?: number): Promise<import("nestjs-typeorm-paginate").Pagination<import("../entities/book.entity").Book>>;
}
