import { HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from "@angular/core";
import { Book } from '../models/book.model';
import { HttpService } from './http.service';
import { Subscription } from 'rxjs';
import { AppSettings } from '../app.settings';


@Injectable()
export class BookService {

    private subscription: Subscription;

    private books: Book[] = [];
    private categories: string[] = [];
    private types: string[] = [];
    private prices: number[] = [];
    private authors: string[] = [];
    private titles: string[] = [];
    private itemCount: number;
    private totalItems: number;
    private pageCount: number;
    private nextPage: string;
    private previousPage: string;

    constructor(private readonly httpService: HttpService) {

        this.httpService.getTypes().subscribe(data => {
            this.types = data.filter((value, index, self) => self.indexOf(value) === index).sort();
        })

        this.httpService.getAuthors().subscribe(data => {
            this.authors = data.filter((value, index, self) => self.indexOf(value) === index).sort();
        })

        this.httpService.getPrices().subscribe(data => {
            this.prices = data.filter((value, index, self) => self.indexOf(value) === index).sort();
        })

        this.subscription = this.httpService.getBooks().subscribe(data => {
            this.itemCount = data.itemCount;
            this.totalItems = data.totalItems;
            this.pageCount = data.pageCount;
            this.nextPage = data.next;
            this.previousPage = data.previous;
            this.books = data.items;
        })

        this.httpService.getCategories().subscribe(data => {
            this.categories = data.filter((value, index, self) => self.indexOf(value) === index).sort();
        })

        this.httpService.getTitles().subscribe(data => {
            this.titles = data.filter((value, index, self) => self.indexOf(value) === index).sort();
        })

    }

    changeSubscriber(url: string, params: HttpParams = null) {
        this.subscription.unsubscribe();
        console.log(params);
        this.subscription = this.httpService.getBooks(url, params).subscribe(data => {

            this.itemCount = data.itemCount;
            this.totalItems = data.totalItems;
            this.pageCount = data.pageCount;
            this.nextPage = data.next;
            this.previousPage = data.previous;
            this.books = data.items;
        })
    }

    changeFilter(categories: string[] = null, types: string[] = null, authors: string[] = null, title: string[] = null,
        priceRange: number[] = null, newPage: number = 1, itemPerPage: number = 3, url: string = null) {
        let params = this.addParams(categories, types, authors, title, priceRange);

        this.changeSubscriber(url, params);
    }

    getTitles() {
        return this.titles;
    }

    getItemCount() {
        return this.itemCount;
    }

    getTotalItems() {
        return this.totalItems;
    }

    getPageCount() {
        return this.pageCount;
    }

    getNextPage() {
        return this.nextPage;
    }

    getPreviousPage() {
        return this.previousPage;
    }

    addParams(categories: string[], types: string[], authors: string[], title: string[],
        priceRange: number[]): HttpParams {
        let params = new HttpParams();

        if (categories) {
            params = params.append('byCategory', categories.join(','));
        }
        if (authors) {
            params = params.append('byAuthor', authors.join(','));
        }
        if (types) {
            params = params.append('byType', types.join(','));
        }
        if (title) {
            params = params.append('byTitle', title.join(','));
        }
        if (priceRange) {
            params = params.append('byPrice', priceRange.join(','))
        }
        return params;
    }

    getBooks(): Book[] {
        return this.books;
    }

    getCategories() {
        return this.categories;
    }

    getAuthors() {
        return this.authors;
    }

    getTypes() {
        return this.types;
    }

    getPrices() {
        return this.prices;
    }
}