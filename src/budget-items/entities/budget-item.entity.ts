import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BudgetItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    vendor: string;

    @Column()
    dueDate: Date;

    @Column()
    paymentAmount: number;

    @Column()
    category: string;

    @Column()
    overDue: boolean;
}
