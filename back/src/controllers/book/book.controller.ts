import { Controller, Get, Query, Post } from '@nestjs/common';
import { BookService } from './book.service';


@Controller('book')
export class BookController {

    constructor(public service: BookService) {
    }

    // @Get('')
    // async getAllBooks(
    //     @Query('page') page: number = 0,
    //     @Query('limit') limit: number = 3) {
    //     limit = parseInt(limit.toString());
    //     limit > 100 ? 100 : limit;
    //     return await this.service.getAllBooksEmptyFilter(
    //         { page, limit, route: 'http://localhost:3000/book' });
    // }

    @Get('/price')
    async getPrices() {
        return await this.service.getPrices();
    }

    @Get('/title')
    async getTitles() {
        return await this.service.getTitles();
    }

    @Get('/author')
    async getAuthors() {
        return await this.service.getAuthors();
    }

    @Get('/type')
    async getTypes() {
        return await this.service.getTypes();
    }


    @Get('/category')
    async getCategories() {
        return await this.service.getCategories();
    }

    @Get('')
    async getAllBooks(@Query('byAuthor') byAuthor: string = null,
        @Query('byCategory') byCategory: string = null,
        @Query('byType') byType: string = null,
        @Query('byTitle') byTitle: string = null,
        @Query('byPrice') byPrice: string = null,
        @Query('page') page: number = 0, @Query('limit') limit: number = 3) {

        let authors = byAuthor ? byAuthor.split(',') : null;
        let categories = byCategory ? byCategory.split(',') : null;
        let types = byType ? byType.split(',') : null;
        let title = byTitle ? byTitle.split(',') : null;
        let prices = byPrice ? byPrice.split(',').map(Number) : null;

        limit = parseInt(limit.toString());
        limit > 100 ? 100 : limit;

        return await this.service.getAllBooksByFilter(authors, categories, types, title, prices,
            { page, limit, route: 'http://localhost:3000/book' });
    }


}
