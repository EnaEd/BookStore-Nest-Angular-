"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("./book.entity");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getAllBooksEmptyFilter(options) {
        return await nestjs_typeorm_paginate_1.paginate(this.bookRepository, options);
    }
    async getAllBooksByFilter(byAuthor = null, byCategory = null, byType = null, byTitle = null, byPrice = null, options) {
        let regex;
        if (byTitle) {
            regex = byTitle.join('|');
        }
        return await nestjs_typeorm_paginate_1.paginate(this.bookRepository, options, {
            where: {
                category: byCategory ? { $in: byCategory } : { $ne: null },
                author: byAuthor ? { $in: byAuthor } : { $ne: null },
                type: byType ? { $in: byType } : { $ne: null },
                title: byTitle ? {
                    $regex: regex,
                    $options: "i"
                } : { $ne: null },
                price: byPrice ? {
                    $gte: byPrice[0],
                    $lte: byPrice[1]
                } : { $ne: null }
            }
        });
    }
    async getPrices() {
        return await (await this.bookRepository.find()).map(item => item.price);
    }
    async getAuthors() {
        return await (await this.bookRepository.find()).map(item => item.author);
    }
    async getTypes() {
        return await (await this.bookRepository.find()).map(item => item.type);
    }
    async getCategories() {
        return await (await this.bookRepository.find()).map(item => item.category);
    }
    async getTitles() {
        return await (await this.bookRepository.find()).map(item => item.title);
    }
};
BookService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map