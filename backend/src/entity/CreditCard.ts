import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("credit_cards")
export class CreditCard {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number_card: string;

    @Column()
    name_card: string;

    @Column()
    month_vencimento: number;

    @Column()
    year_vencimento: number;

    @Column()
    code: number;
}