export class CreateBudgetItemDto {
    readonly description: string;
    readonly vendor: string;
    readonly dueDate: Date;
    readonly paymentAmount: number;
    readonly category: string;
    readonly overDue: boolean;
}
