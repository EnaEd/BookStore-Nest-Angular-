export class Book {
    id: string;
    category: string;
    author: string;
    title: string;
    price: number;
    type:string;

    constructor(
        id?: string,
        bookTitle?: string,
        author?: string,
        category?: string,
        price?: number,
        type?:string) {
        this.id = id;
        this.author = author;
        this.category = category;
        this.title = bookTitle;
        this.price = price;
        this.type = type;
    }
}