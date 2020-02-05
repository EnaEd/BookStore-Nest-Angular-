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
const book_service_1 = require("./book.service");
let BookController = class BookController {
    constructor(service) {
        this.service = service;
    }
    async getPrices() {
        return await this.service.getPrices();
    }
    async getTitles() {
        return await this.service.getTitles();
    }
    async getAuthors() {
        return await this.service.getAuthors();
    }
    async getTypes() {
        return await this.service.getTypes();
    }
    async getCategories() {
        return await this.service.getCategories();
    }
    async getAllBooks(byAuthor = null, byCategory = null, byType = null, byTitle = null, byPrice = null, page = 0, limit = 3) {
        let authors = byAuthor ? byAuthor.split(',') : null;
        let categories = byCategory ? byCategory.split(',') : null;
        let types = byType ? byType.split(',') : null;
        let title = byTitle ? byTitle.split(',') : null;
        let prices = byPrice ? byPrice.split(',').map(Number) : null;
        limit = parseInt(limit.toString());
        limit > 100 ? 100 : limit;
        return await this.service.getAllBooksByFilter(authors, categories, types, title, prices, { page, limit, route: 'http://localhost:3000/book' });
    }
};
__decorate([
    common_1.Get('/price'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getPrices", null);
__decorate([
    common_1.Get('/title'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getTitles", null);
__decorate([
    common_1.Get('/author'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAuthors", null);
__decorate([
    common_1.Get('/type'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getTypes", null);
__decorate([
    common_1.Get('/category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getCategories", null);
__decorate([
    common_1.Get(''),
    __param(0, common_1.Query('byAuthor')),
    __param(1, common_1.Query('byCategory')),
    __param(2, common_1.Query('byType')),
    __param(3, common_1.Query('byTitle')),
    __param(4, common_1.Query('byPrice')),
    __param(5, common_1.Query('page')), __param(6, common_1.Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
BookController = __decorate([
    common_1.Controller('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map