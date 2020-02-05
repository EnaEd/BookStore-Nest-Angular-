import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { AppSettings } from '../app.settings';

@Injectable()
export class HttpService {

    constructor(private readonly http: HttpClient) {
    }

    getBooks(url: string = null, params: HttpParams = null): Observable<any> {
        return Boolean(url) ?
            this.http.get<any>(`${url}`, { params }) :
            this.http.get<any>(`${AppSettings.CONNECTION_STRING}/book`, { params });
        //return this.http.get<any>(`${Boolean(url) ? url : this.connectionString}/book`);
    }

    getBooksByFilter(params: HttpParams = null): Observable<any> {
        return this.http.get<any>(`${AppSettings.CONNECTION_STRING}/book`, { params })
    }

    getPrices():Observable<number[]>{
        return this.http.get<number[]>(`${AppSettings.CONNECTION_STRING}/book/price`);
    }

    getAuthors():Observable<string[]>{
        return this.http.get<string[]>(`${AppSettings.CONNECTION_STRING}/book/author`);
    }

    getTypes():Observable<string[]>{
        return this.http.get<string[]>(`${AppSettings.CONNECTION_STRING}/book/type`);
    }

    getCategories():Observable<string[]>{
        return this.http.get<string[]>(`${AppSettings.CONNECTION_STRING}/book/category`);
    }

    getTitles():Observable<string[]>{
        return this.http.get<string[]>(`${AppSettings.CONNECTION_STRING}/book/title`)
    }




}