import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accounts")
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    agencia: number;

    @Column()
    conta: number;
}