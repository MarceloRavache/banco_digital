import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    id_account: number;

    @Column()
    id_credit_card: number;

}