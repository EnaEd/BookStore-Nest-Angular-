import { Book } from './book.model';

export class BasketLine {
    constructor(public book: Book, public quantity: number) {
    }

    get lineTotal() {
        return this.quantity * this.book.price;
    }
}