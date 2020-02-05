import { Entity, PrimaryGeneratedColumn, Column, ObjectID } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    category: string;

    @Column()
    type: string;

    @Column('decimal')
    price: number;
}