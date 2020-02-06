import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getMongoRepository } from "typeorm";
import { Book } from "./book.entity";
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';

@Injectable()
export class BookService {

    constructor(@InjectRepository(Book)
    private readonly bookRepository: Repository<Book>) {
    }

    async getAllBooksEmptyFilter(options: IPaginationOptions): Promise<Pagination<Book>> {
        return await paginate<Book>(this.bookRepository, options);
    }

    async getAllBooksByFilter(byAuthor: string[] = null, byCategory: string[] = null, byType: string[] = null,
        byTitle: string[] = null, byPrice: number[] = null, options: IPaginationOptions): Promise<Pagination<Book>> {
            let regex:string;
        if (byTitle) {
            regex = byTitle.join('|');
        }
        return await paginate<Book>(this.bookRepository, options, {
            where: {
                category: byCategory ? { $in: byCategory } : { $ne: null },
                author: byAuthor ? { $in: byAuthor } : { $ne: null },
                type: byType ? { $in: byType } : { $ne: null },
                title: byTitle ? {
                    $regex:regex,
                    $options:"i"
                } : { $ne: null },
                price: byPrice ? {
                    $gte: byPrice[0],
                    $lte: byPrice[1]
                } : { $ne: null }
            }
        });
    }

    async getPrices(): Promise<number[]> {
        return await (await this.bookRepository.find()).map(item => item.price);
    }

    async getAuthors(): Promise<string[]> {
        return await (await this.bookRepository.find()).map(item => item.author);
    }


    async getTypes(): Promise<string[]> {
        return await (await this.bookRepository.find()).map(item => item.type);
    }

    async getCategories(): Promise<string[]> {
        return await (await this.bookRepository.find()).map(item => item.category);
    }

    async getTitles(): Promise<string[]> {
        return await (await this.bookRepository.find()).map(item => item.title);
    }

}