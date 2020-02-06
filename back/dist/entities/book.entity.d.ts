import { ObjectID } from "typeorm";
export declare class Book {
    id: ObjectID;
    title: string;
    author: string;
    category: string;
    type: string;
    price: number;
}
