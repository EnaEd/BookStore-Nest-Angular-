import { Injectable } from "@angular/core";
import { BasketLine } from '../models/basket-line.models';
import { Book } from '../models/book.model';

@Injectable()
export class BasketService {

    public lines: BasketLine[] = [];
    public itemCount: number = 0;
    public basketPrice: number = 0;

    recalculate() {

        this.itemCount = 0;
        this.basketPrice = 0;
        
        this.lines.forEach(line => {
            this.itemCount += line.quantity;
            this.basketPrice += (line.quantity * line.book.price);
        })
    }

    addLine(book: Book, quantity: number = 1) {
        let line = this.lines.find(line => line.book.title === book.title);
        if (line != undefined) {
            line.quantity += quantity;
            this.recalculate();
            return;
        }
        if (line == undefined) {
            this.lines.push(new BasketLine(book, quantity));
        }
        this.recalculate();
    }

    updateQuantity(book: Book, quantity: number) {
        let line = this.lines.find(line => line.book.title == book.title);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    removeLine(id: string) {
        let lineIndex = this.lines.findIndex(line => line.book.id == id);
        this.lines.splice(lineIndex);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.basketPrice = 0;
    }
}

